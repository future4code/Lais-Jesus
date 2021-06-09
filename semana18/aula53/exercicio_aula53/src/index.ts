import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { generateId } from "./services/idGenerator"
import { createHash, compareHash} from "./services/hashManager"

console.log(generateId())

const hash1 = createHash("Senha")
const hash2 = createHash("Senha")
const compare1 = compareHash(hash1, hash2)
const compare2 = compareHash("Senha", hash2)

console.log(compare1, compare2)


app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)