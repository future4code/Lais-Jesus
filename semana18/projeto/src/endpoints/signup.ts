import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { user, USER_ROLE } from "../types";
import { createHash, compareHash} from "../services/hashManager"

export default async function aignup(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, password, role } = req.body

      if (!name || !email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name', 'password' e 'email'")
      }
      if (!email.includes("@") ) {
         throw new Error("O campo de email precisa de um '@'")
      }
      if(!(role in USER_ROLE)){
        throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'")
     }

      if ( password.length <= 6 ) {
        throw new Error("Password deve ter no minímo 6 caracteres")
      }

      const [user] = await connection('cookenu_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const newUser: user = { id, name, email, password: createHash(password), role }

      await connection('cookenu_users')
         .insert(newUser)

      const token: string = generateToken(
         {
            id: newUser.id,
            role
         }
      )

      res.status(201).send({ token })

   } catch (error) {
      res.status(400).send({ message: error.message})

   }
}