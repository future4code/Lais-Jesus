import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { recipe } from "../types";
import { createHash, compareHash} from "../services/hashManager"

export default async function createRecipe(
   req: Request,
   res: Response
): Promise<void> {
   try {

    
        const token = req.headers.authorization as string;
        const verifiedToken = getTokenData(token);

      const { title, description } = req.body

      if ( !title || !description ) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'title' e 'description'")
      }
      
      const [recipe] = await connection('cookenu_recipes')
         .where({ title })

      if (recipe) {
         res.statusCode = 409
         throw new Error('Receita já cadastrada')
      }

      const id: string = generateId();

      const newRecipe: recipe = { id, title, description }

      await connection('cookenu_recipes')
         .insert(newRecipe)

      res.status(201).send("Receita criada com sucesso")

   } catch (error) {
      res.status(400).send({ message: error.message})

   }
}