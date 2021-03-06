import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/Authenticator";
import { compareHash } from "../services/hashManager";


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

     const queryResult = await connection.raw (`
        SELECT * from to_do_list_users
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
   
      res.status(201).send({ token })

   } catch (error) {
      res.status(400).send({ message: error.message})

   }
}