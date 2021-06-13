import * as JWT from 'jsonwebtoken';
import { resourceLimits } from 'worker_threads';
import dotenv from 'dotenv'


export type authenticationData = {
    id:string
}

export function generateToken(payload: authenticationData): string {
    return JWT.sign (
        payload,
        String(process.env.JWT_KEY),
        {
            expiresIn: "2m"
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