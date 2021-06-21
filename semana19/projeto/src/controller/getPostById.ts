import { Request, Response } from "express";
import connection from "../data/connection";
import { post } from "../model/post";
import { getPostIdBusiness } from "../business/getPostIdBusiness"

export default async function getPostById(
   req: Request,
   res: Response
): Promise<void> {
   try {
    let message = "Success!"

    const { id } = req.params

    const post = await getPostIdBusiness(id)

    res.status(200).send({ message, post })

 } catch (error) {
    let message = error.sqlMessage || error.message
    res.statusCode = 400

    res.send({ message })
 }
}