import connection from "../data/connection";
import { generateToken } from "../services/Authenticator";
import { generateId } from "../services/idGenerator";
import { userData, USER_ROLES } from "../model/user";
import { createHash, compareHash} from "../services/hashManager"


export const signupBusiness = async (
    userData: userData,
 ):Promise<string> => {

    if (!userData.name || !userData.email || !userData.password || !userData.role) {
        throw new Error("Preencha os campos 'name', 'password' e 'email'")
    }
    if (!userData.email.includes("@") ) {
        throw new Error("O campo de email precisa de um '@'")
    }
    if(!(userData.role in USER_ROLES)){
    throw new Error("'role' deve ser 'NORMAL' ou 'ADMIN'")
    }

    if ( userData.password.length <= 6 ) {
    throw new Error("Password deve ter no minímo 6 caracteres")
    }

    const email = userData.email
    const [user] = await connection('cookenu_users')
        .where({ email })

    if (user) {
        throw new Error('Email já cadastrado')
    }

    const id: string = generateId();

    const cypherPassword = await createHash(userData.password);

    const newUser = { 
        ...userData,
        password: cypherPassword,
        id: generateId()
    }

    await connection('cookenu_users')
        .insert(newUser)

    const token: string = generateToken(
        {
        id: newUser.id,
        role: userData.role
        }
    )

    return token
}