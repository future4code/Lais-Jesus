/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import app from "./app"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"
import { v4 } from "uuid"
import Knex from "knex"
import signup from "./controller/signup"
import login from "./controller/login"
import createPost from "./controller/createPost"
import getPost from "./controller/getPostById"

// /**************************** CONFIG ******************************/

dotenv.config()

export const connection= knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   }
})

// const app: Express = express()
// app.use(express.json())
// app.use(cors())

// /**************************** TYPES ******************************/



// /**************************** SERVICES ******************************/

// const generateId = (): string => v4()

// function generateToken(
//    payload: authenticationData
// ): string {
//    return jwt.sign(
//       payload,
//       process.env.JWT_KEY as string,
//       {
//          expiresIn: process.env.JWT_EXPIRES_IN
//       }
//    )
// }

// function getTokenData(
//    token: string
// ): authenticationData {
//    const result: any = jwt.verify(
//       token,
//       process.env.JWT_KEY as string
//    )

//    return { id: result.id, }
// }

// const hash = async (
//    plainText: string
// ): Promise<string> => {
//    const rounds = Number(process.env.BCRYPT_COST);
//    const salt = await bcrypt.genSalt(rounds);
//    return bcrypt.hash(plainText, salt)
// }

// const compare = async (
//    plainText: string, cypherText: string
// ): Promise<boolean> => {
//    return bcrypt.compare(plainText, cypherText)
// }

/**************************** ENDPOINTS ******************************/

app.post('/users/signup', signup)
app.post('/users/login', login)

app.post('/posts/create', createPost)
app.get('/posts/:id', getPost)

// /**************************** SERVER INIT ******************************/

// app.listen(3003, () => {
//    console.log("Server running on port 3003")
// })