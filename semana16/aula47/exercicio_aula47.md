### EXERCÍCIOS DA AULA 47 (SEMANA 16)

#### Exercício 1

a) O raw devolve o resultado da query e outras informações em um array, mas o resultado que queremos está sempre na 1º posição, então podemos acessá-la pegando a primeira posição do array.

b)
```
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
```

c)

```
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
```
