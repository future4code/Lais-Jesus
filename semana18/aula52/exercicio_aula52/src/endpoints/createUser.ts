import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/Authenticator";
import { generateId } from "../services/idGenerator";
import { user } from "../types";
import { createHash, compareHash} from "../services/hashManager"

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }
      if (!email.includes("@") ) {
         throw new Error("O campo de email precisa de um '@'")
      }

      if ( password.length >= 6 ) {
        throw new Error("Password deve ter no máximo 6 caracteres")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const newUser: user = { id, name, nickname, email, password: createHash(password) }

      await connection('to_do_list_users')
         .insert(newUser)

      const token: string = generateToken(
         {
            id: newUser.id
         }
      )

      res.status(201).send({ token })

   } catch (error) {
      res.status(400).send({ message: error.message})

   }
}