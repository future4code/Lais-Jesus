## EXERCÍCIO DA AULA 53

### EXERCÍCIO 1


```
export const getAddressInfo = async (
  cep: string
): Promise<userAddress> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    const address: userAddress = {
      city: response.data.localidade,
      neighborhood: response.data.bairro,
      state: response.data.uf,
      street: response.data.logradouro
    }

    return address
  } catch (error) {
    return error.message
  }
}
```

### EXERCÍCIO 2

```
CREATE TABLE IF NOT EXISTS address_users (
    id VARCHAR(64) PRIMARY KEY,
    cep INT NOT NULL,
    street VARCHAR(255) NOT NULL,
    number INT NOT NULL,
    complement VARCHAR(255) NOT NULL,
    neiborhood VARCHAR(64) NOT NULL,
    city VARCHAR(64) NOT NULL,
    state VARCHAR(64) NOT NULL
);
```



