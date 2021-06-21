import { Request, Response } from "express";
import connection from "../data/connection";
import { generateToken } from "../services/Authenticator";
import { generateId } from "../services/idGenerator";
// import { user, ROLE } from "../types";
import { createHash, compareHash} from "../services/hashManager"
import { signupBusiness } from "../business/signupBusiness";

export default async function signup(
   req: Request,
   res: Response
): Promise<void> {
   try {
    let message = "Success!"
    const { name, email, password } = req.body

    const token: string = await signupBusiness({
      name, email, password
   })

    res.status(201).send({ message, token })

 } catch (error) {
    res.statusCode = 400
    let message = error.sqlMessage || error.message

    res.send({ message })
 }
      
}

