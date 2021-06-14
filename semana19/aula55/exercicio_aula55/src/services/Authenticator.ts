import * as JWT from 'jsonwebtoken';
import { resourceLimits } from 'worker_threads';
import dotenv from 'dotenv'
import { USER_ROLES } from "../model/user";


export type authenticationData = {
    id:string
    role: USER_ROLES
}

export function generateToken(payload: authenticationData): string {
    return JWT.sign (
        payload,
        String(process.env.JWT_KEY),
        {
            expiresIn: "48h"
        }
    )
}

export function getTokenData(token:string): object {
    const result: authenticationData = JWT.verify (
        token,
        String(process.env.JWT_KEY)
    ) as authenticationData;
    return result;
}