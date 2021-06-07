## EXERCICIOS AULA51

#### EXERCÍCIO 1 

A.) Usar strings para representar id's aumentam as possibilidades de combinações diferentes, e consequente, aumento na segurança.

B.) 
```
export function generateId(): string{

    return v4();
    
}

```

#### EXERCÍCIO 2 

A.) O código acima se conecta ao banco de dados através do cooncection e o createUser faz a inserção de dados (nesse caso os dados são id, email, password) na tabela (userTableName) acessando a conexão citada acima.

B.) 
```
CREATE TABLE IF NOT EXISTS to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
);

ALTER TABLE to_do_list_users
ADD password VARCHAR(255);

```

C.) 

```
export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const newUser: user = { id, name, nickname, email, password }

      await connection('to_do_list_users')
         .insert(newUser)

      res.status(201).send({ newUser })

   } catch (error) {
      res.status(400).send({ message: error.message})

   }
}
```

