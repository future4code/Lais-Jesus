import { createHash } from "../services/hashManager";
import { insertPost } from "../data/post/insertPost";
import { postData } from "../model/post";
import { getTokenData, authenticationData } from "../services/Authenticator";
import { generateId } from "../services/idGenerator";

export const createPostBusiness = async (
   postData: postData
) => {

    const id: string = generateId()
    const newPost = {
        ...postData,
        id
     }
  
     await insertPost(newPost)
     

}