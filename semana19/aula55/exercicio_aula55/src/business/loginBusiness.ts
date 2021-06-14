import connection from "../data/connection";
import { generateToken } from "../services/Authenticator";
import { compareHash} from "../services/hashManager"


export const loginBusiness = async (
    email: string,
    password: string
 ):Promise<string> => {

    if ( !email || !email.includes("@") ) {
        throw new Error("Preencha o campo de 'email' ou add um '@")
     }

     if ( !password ) {
       throw new Error("Preencha o campo de 'password'")
    }

    const queryResult = await connection.raw (`
       SELECT * from cookenu_users
       where email = "${email}";
   `)
   const user = queryResult[0][0];

     if (!user) {
        throw new Error('Usuário não encontrado')
     }
     const passwordIsCorrect: boolean = compareHash(password, user.password)

     if(!passwordIsCorrect) {
        throw new Error ("Password is incorrect")
     }

   const token: string = generateToken(
       {
          id: user.id,
          role: user.role
       }
   );

    return token
}