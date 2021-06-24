import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole } from "../model/User";
import userDatabase, { UserDatabase } from "../data/UserDatabase";
import hashGenerator, { HashGenerator } from "../services/hashGenerator";
import idGenerator, { IdGenerator } from "../services/idGenerator";
import tokenGenerator, { TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private hashGenerator: HashGenerator,
      private userDatabase: UserDatabase,
      private tokenGenerator: TokenGenerator
   ) {}

   public async signup(
      name: string,
      email: string,
      password: string,
      role: string
   ) {
      try {
         if (!name || !email || !password || !role) {
            throw new CustomError(422, "Missing input");
         }

         if (email.indexOf("@") === -1) {
            throw new CustomError(422, "Invalid email");
         }

         if (password.length < 6) {
            throw new CustomError(422, "Invalid password");
         }

         const id = this.idGenerator.generate();

         const cypherPassword = await this.hashGenerator.hash(password);

         await this.userDatabase.createUser(
            new User(id, name, email, cypherPassword, stringToUserRole(role))
         );

         const accessToken = this.tokenGenerator.generate({
            id,
            role,
         });
         return { accessToken };
      } catch (error) {
         if (error.message.includes("key 'email'")) {
            throw new CustomError(409, "Email already in use")
         }

         throw new CustomError(error.statusCode, error.message)
      }

   }

   public async login(email: string, password: string) {

      try {
         if (!email || !password) {
            throw new CustomError(422, "Missing input");
         }

         const user = await this.userDatabase.getUserByEmail(email);

         if (!user) {
            throw new CustomError(401, "Invalid credentials");
         }

         const isPasswordCorrect = await this.hashGenerator.compareHash(
            password,
            user.getPassword()
         );

         if (!isPasswordCorrect) {
            throw new CustomError(401, "Invalid credentials");
         }

         const accessToken = this.tokenGenerator.generate({
            id: user.getId(),
            role: user.getRole(),
         });

         return { accessToken };
      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async getUser(
      id: string,
      token: string
   ) {
      try {
         const verifiedToken = this.tokenGenerator.verify(token);
         if (!verifiedToken) {
            throw new CustomError(401, "User unauthorized");
         }
         const resultUser = await this.userDatabase.getUser(id)

         if (!resultUser) {
            throw new CustomError(404, "User not found");
         }

         const resultInfo = {
            id: resultUser.getId(),
            name: resultUser.getName(),
            email: resultUser.getEmail(),
            role: resultUser.getRole()
         }

         return resultInfo;
      } catch (error) { 
         throw new CustomError(error.statusCode, error.message)
      }
   }
}

export default new UserBusiness(
   idGenerator,
   hashGenerator,
   userDatabase,
   tokenGenerator
)
// function getUserById(id: string) {
//    throw new Error("Function not implemented.");
// }

