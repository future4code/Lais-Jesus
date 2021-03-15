import React from "react";

export default class Etapa1 extends React.Component {
    
  
    render() {
      
    
      return (
          <div>
            <h1> Etapa 1 - Dados Gerais</h1>

            <h3>1. Qual seu nome?</h3>
            <input type ="text" placeholder="Digite seu nome aqui"/>

            <h3>2. Qual sua idade?</h3>
            <input type ="number" placeholder="Digite sua idade aqui"/>

            <h3>3. Qual seu e-mail?</h3>
            <input type ="email" placeholder="Digite seu e-mail aqui"/>

            <h4>4. Qual sua escolaridade?</h4>
            <select name="escolaridade">
                <option value="médioincompleto">Ensino médio incompleto</option>
                <option value="médiocompleto">Ensino médio completo</option>
                <option value="superiorincompleto">Ensino superior incompleto</option>
                <option value="superiorcompleto">Ensino superior completo</option>
            </select>
          </div>
        



      )
    }
}
  

