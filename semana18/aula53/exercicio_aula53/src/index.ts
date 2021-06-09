import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { generateId } from "./services/idGenerator"
import { createHash, compareHash} from "./services/hashManager"
import { getTokenData } from "./services/Authenticator";
import { getAddressInfo } from "./services/getAddressInfo"


app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

// const verifiedToken = getTokenData( "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczZmM0ZmQ3LWYzNGMtNDU1OS05YzE5LWUwM2YzZWY3YzBhNiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyMzI3ODg0MywiZXhwIjoxNjIzMjg2MDQzfQ.T8jC5ZdWhbpcm0oEn_COu29bazTU-4ZOrVYoE4xWV1o" )

// console.log(verifiedToken)

getAddressInfo('50680000').then(console.log)