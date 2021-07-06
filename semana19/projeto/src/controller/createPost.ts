import { Request, Response } from "express";
import connection from "../data/connection";
import { generateId } from "../services/idGenerator";
import { getTokenData, authenticationData } from "../services/Authenticator";
import { createPostBusiness } from "../business/createPostBusiness";

export const createPost = async(
   req: Request,
   res: Response
) => {
    try {
       let message = "Success!"
 
       const { photo, description, type } = req.body
 
       const token: string = req.headers.authorization as string
       const tokenData: authenticationData = getTokenData(token)
       
       await createPostBusiness({ 
          photo, description, type 
       })
       res.status(201).end()
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res..end()
    }
 }
 