import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/Authenticator";
import { ROLE } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      // const token = req.headers.authorization as string;
      // const verifiedToken = getTokenData(token)

      // if(verifiedToken.role !== ROLE.ADMIN ){
      //    res.statusCode = 403
      //    res.statusMessage = "Just admins can do this"
      //    throw new Error()
      // }
      
      const { name, nickname } = req.body

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      // await connection('to_do_list_users')
      //    .update({ name, nickname })
      //    .where({ id: verifiedToken.id })

      res.end()

   } catch (error) {

      if(error.message.includes("expired")){
         res.statusCode = 401;
         res.send({message:"Unauthorized"})
      }

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}