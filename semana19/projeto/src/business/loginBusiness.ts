import { compareHash } from "../services/hashManager";
import { user } from "../model/user";
import { generateToken } from "../services/Authenticator";
import { selectUserByEmail } from "../data/user/selectUserByEmail";

export const loginBusiness = async (
    email: string,
    password: string
):Promise<string> => {

        if (!email || !password) { 
            throw new Error('"email" and "password" must be provided')
         }
   
         const user: user = await selectUserByEmail(email)

         if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
         }
   
         const passwordIsCorrect: boolean = await compareHash(password, user.password)
   
         if (!passwordIsCorrect) {
            throw new Error("Invalid credentials")
         }
   
         const token: string = generateToken({
            id: user.id
         })

        return token
} 