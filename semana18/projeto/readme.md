### <p align="center">Cookenu - Backend</p>

<div align="center" margin-bottom="10px">
  <i> Projeto da semana 18 da Labenu - Feito por: Laís de Jesus</i>
</div> 
&nbsp

### O que funciona 
- [x] Cadastrar usuário;
- [x] Fazer Login;
- [x] Pegar próprio perfil;
- [x] Pegar perfil do próprio usuário;
- [x] Criar receita;
- [x] Pegar receita;

### Endpoints

- **Cadastrar usuário**
  * File name: signup.ts
  * Method: POST
  * Path: /signup
  * Body:
      + Name
      + Email
      + Password
  * Saída: Gera token de acesso

- **Fazer Login**
  * File name: login.ts
  * Method: POST
  * Path: /login
  * Body:
      + Email
      + Password
  * Saída: Gera token de acesso
  
- **Pegar próprio perfil**
  * File name: myProfile.ts
  * Method: GET
  * Path: /user/profile
  * Authorization: "token de acesso"
  * Saída: 
      + id
      + Name
      + Email

- **Pegar perfil do próprio usuário**
  * File name: yourProfile.ts
  * Method: GET
  * Path: /user/:id
  * Path Param: id do usuário
  * Authorization: "token de acesso"
    * Body:
      + title
      + description
  * Saída: "Receita criada com sucesso"

- **Criar receita**
  * File name: createRecipe.ts
  * Method: POST
  * Path: /recipe
  * Authorization: "token de acesso"
  * Saída: 
      + id
      + Name
      + Email
  
- **Pegar receita**
  * File name: getRecipe.ts
  * Method: GET
  * Path: /recipe/:id
  * Authorization: "token de acesso"
  * Saída: 
      + id
      + title
      + description
      + created_Date