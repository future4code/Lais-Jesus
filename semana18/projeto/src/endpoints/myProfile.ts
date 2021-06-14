import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";


export default async function myProfile(
   req: Request,
   res: Response
): Promise<void> {
   try {

    const token = req.headers.authorization as string;
    const verifiedToken = getTokenData(token);
    

    if(!verifiedToken ){
        res.statusCode = 403
        res.statusMessage = "Dados do usuário não encontrados"
        throw new Error()
    }

    const result = await connection('cookenu_users')
     .select('id', 'name', 'email')
     .where({ id: verifiedToken.id })
    
    
     res.send(result)

   } catch (error) {
      res.status(400).send({ message: error.message})

   }
}