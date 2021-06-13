import app from "./app"
import signup from './endpoints/signup'
import {generateId} from "./services/idGenerator";
import {generateToken, getTokenData} from "./services/authenticator"
import { createHash } from "./services/hashManager";
import login from "./endpoints/login";
// import login from "./endpoints/login";

app.post('/user/signup', signup);
app.post('/user/login', login);


