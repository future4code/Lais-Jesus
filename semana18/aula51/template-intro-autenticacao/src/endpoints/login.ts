import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/Authenticator";


export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if ( !email || !email.includes("@") ) {
         throw new Error("Preencha o campo de 'email' ou add um '@")
      }
      if ( !password ) {
        throw new Error("Preencha o campo de 'password'")
     }

     if ( password.length >= 6 ) {
        throw new Error("Password deve ter no máximo 6 caracteres")
     }

     const queryResult = await connection.raw (`
        SELECT * from to_do_list_users
        where email = "${email}";
    `)
    const user = queryResult[0][0];

      if (!user) {
         throw new Error('Usuário não encontrado')
      }

    const token: string = generateToken(
        {
           id: user.id
        }
    );  
   
      res.status(201).send({ token })

   } catch (error) {
      res.status(400).send({ message: error.message})

   }
}