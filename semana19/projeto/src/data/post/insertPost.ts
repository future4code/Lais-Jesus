import connection from "../connection";
import { post } from "../../model/post";

export const insertPost = async(
   post: post
) => {

    await connection("labook_posts")
    .insert({
        post
        
    })
}