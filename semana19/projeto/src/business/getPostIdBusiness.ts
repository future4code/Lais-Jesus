import { compareHash } from "../services/hashManager";
import { post } from "../model/post";
import { generateToken } from "../services/Authenticator";
import { selectUserByEmail } from "../data/user/selectUserByEmail";
import { selectpostById } from "../data/post/selectPostById";

export const getPostIdBusiness = async (
    id:string
) => {

    const result = await selectpostById(id)


    if (!result) {
        throw new Error("Post not found")
     }
     const postInfo = {
        id: result.id,
        photo: result.photo,
        description: result.description,
        type: result.type,
        createdAt: result.created_at,
        authorId: result.author_id,
    }
    
    return postInfo

}