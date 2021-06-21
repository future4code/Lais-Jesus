import { createHash } from "../services/hashManager";
import { insertUser } from "../data/user/insertUser";
import { userData } from "../model/user";
import { generateToken } from "../services/Authenticator";
import { generateId } from "../services/idGenerator";

export const signupBusiness = async (
   userData: userData
):Promise<string> => {

    if (!userData.name || !userData.email || !userData.password) {
        throw new Error('"name", "email" and "password" must be provided')
     }
 
     const id: string = generateId()
 
     const cypherPassword = await createHash(userData.password);

     const newUser = {
        ...userData,
        password: cypherPassword,
        id: generateId()
     }
  
     await insertUser(newUser)
 
     const token: string = generateToken({ id })

     return token
}