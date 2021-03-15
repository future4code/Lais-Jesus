import React from "react";

export default class Etapa3 extends React.Component {
    
  
    render() {
      
    
        return (
            <div>
            <h1> Etapa 3 - Informações sobre quem não se formou no ensino superior nem está cursando</h1>
            <h3>5. Por que você não terminou um curso de graduação?</h3>
            <input type ="text" />

            <h4>6. Você fez algum curso complementar?</h4>
            <select name="curso">
                <option value="tecnico">Curso técnico</option>
                <option value="ingles">Curso de inglês</option>
                <option value="naofiz">Não fiz curso complementar</option>
            </select>

            </div>
        )
      }
}
  