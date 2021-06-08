## EXERCÍCIO DA AULA 52

### EXERCÍCIO 1

**A.)** 
- salt é uma sequência de caracteres adicionados ao hash da senha composto por algorithm, cost e string.

- round ou cost (como também é chamado) é o custo numérico que está relacionado à segurança da senha, quanto maior mais tempo de execução do algoritmo.

- Usei o valor 12 porque é o que é usado na maioria das libs.

**B.)**

```
export const createHash = (
    plainText: string
) : string => {
    const salt:string = genSaltSync(Number(process.env.BCRYPT_COST))
    const hash: string = hashSync (plainText, salt)
    return hash
}
```

**C.)**


```
export const compareHash = (
    plainText : string,
    cypherText: string
) : boolean => {
    return compareSync(plainText, cypherText)
}
```


______________________________________________________________________________________________________

### EXERCÍCIO 2

**A.)** 
    O cadastro porque a senha já vai ser cadastrada no formato correto. Se modificar o endpoint de login primeiro ele vai comparar com a senha pura e não com o hash da senha.

**B.)**

```
const newUser: user = { id, name, nickname, email, password: createHash(password) }
```

**C.)**

```
const passwordIsCorrect: boolean = compareHash(password, user.password)

if(!passwordIsCorrect) {
    throw new Error ("Password is incorrect")
}
```

**D.)** 
    Não porque esse endpoint não acessa a senha nem precisa da senha para acessá-lo.

______________________________________________________________________________________________________

### EXERCÍCIO 3

**A.)** 
    O cadastro porque a senha já vai ser cadastrada no formato correto. Se modificar o endpoint de login primeiro ele vai comparar com a senha pura e não com o hash da senha.

**B.)**

```
const newUser: user = { id, name, nickname, email, password: createHash(password) }
```

**C.)**

```
const passwordIsCorrect: boolean = compareHash(password, user.password)

if(!passwordIsCorrect) {
    throw new Error ("Password is incorrect")
}
```

**D.)** 
    Não porque esse endpoint não acessa a senha nem precisa da senha para acessá-lo.