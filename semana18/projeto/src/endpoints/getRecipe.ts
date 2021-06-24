import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";

export default async function getRecipe(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
 
     const token = req.headers.authorization as string;
     const verifiedToken = getTokenData(token);
     
 
     if(!verifiedToken){
         res.statusCode = 403
         res.statusMessage = "Você não está logado"
         throw new Error()
     }
 
     const result = await connection('cookenu_recipes')
      .select('id', 'title', 'description', 'created_date')
      .where({ id: req.params.id })
     
     
      res.send(result)
 
    } catch (error) {
       res.status(400).send({ message: error.message})
 
    }
 }