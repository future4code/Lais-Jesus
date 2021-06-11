

#### **Exercício 1**

a) ALTER TABLE Actor DROP COLUMN salary: Apaga a coluna salary

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6):Troca gender por sex e aceita como resposta strings de até 6 caracteres

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255):  Redeclara a coluna gender para que ela aceite strings de até 255 caracteres

d) `ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`

#### **Exercício 2**

a) 
```
UPDATE Actor
SET name = "Anthonie Mackie", birth_date = "1965-03-28" 
WHERE id = "003"
```

b) 
```
SELECT UPPER("Juliana Paes")
from Actor;
```

```
SELECT UPPER("JULIANA PAES")
from Actor;
```

c)
``` 
UPDATE Actor
SET name = "Julia Roberts", salary = 1000000000000, birth_date = "1982-09-28", gender = "female" 
WHERE id = "005";
```

d) Ele deu erro por conta do safe mode, só consigo atualizar com o where se usar o id
```
UPDATE Actor
SET name = "Julia Roberts", salary = 1000000000000, birth_date = "1982-09-28", gender = "female" 
WHERE name = "joana";

```

#### **Exercício 3**

a) `DELETE FROM Actor WHERE id = "003";`
b)

