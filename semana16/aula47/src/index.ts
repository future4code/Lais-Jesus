import { Request, Response } from "express";
import app from "./app";
import connection from "./connection"

app.get('/actors', (req, res) => {
    try {
        const searchActor = async (name: string): Promise<any> => {
            const result = await connection.raw(`
              SELECT * FROM Actor WHERE name = "${name}"
            `)
            return result
        }

    } catch(error) {
        console.log (error.message)
        res.status(500).send("An expected error")
    }
});

app.put("actors/"), (req: Request, res: Response) => {
    try {
        const countActors = async (gender: string): Promise<any> => {
            const result = await connection.raw(`
              SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
            `);
            const count = result[0][0].count;
            return count;
        };

    } catch(error) {
        console.log (error.message)
        res.status(500).send("An expected error")
    }
});

