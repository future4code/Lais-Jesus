import connection from "../connection"
import { post } from "../../model/post"

export const selectpostById = async (
   id: string
): Promise<any> => {
   try {

   const result: any = await connection("labook_posts")
      .select("*")
      .where({ id })

   return result[0]  
   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}