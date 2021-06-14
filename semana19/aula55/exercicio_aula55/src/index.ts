import app from "./controller/app"
import {signup}  from './controller/signup'
import login from './controller/login'
// import { createTask } from './controller/task/createTask'
// import { getTaskById } from './controller/task/getTaskById'

app.post('/user/signup', signup)
app.post('/user/login', login)