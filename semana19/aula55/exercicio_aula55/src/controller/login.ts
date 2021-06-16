import { Request, Response } from "express";
import { loginBusiness } from "../business/loginBusiness";


export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      const token:string = await loginBusiness (
         email, password
      )  

      res.status(201).send({ token })

   } catch (error) {
      res.status(400).send({ message: error.message})

   }
}