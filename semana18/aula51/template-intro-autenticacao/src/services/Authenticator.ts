import * as JWT from 'jsonwebtoken';
import { resourceLimits } from 'worker_threads';

export type authenticationData = {
    id:string
}

export function generateToken(payload: authenticationData): string {
    return JWT.sign (
        payload,
        "Jesus",
        {
            expiresIn: "2m"
        }
    )
}

export function getTokenData(token:string): object {
    const result: authenticationData = JWT.verify (
        token,
        "Jesus"
    ) as authenticationData;
    return result;
}