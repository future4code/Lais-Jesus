import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const DivContainer = styled.div `
  background-color:black;
  width:100%;
  height:900px;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:white;
  font-size:2rem;

  button {
    padding:20px;
    background-color:transparent;
    color:white;
    border:  0px solid white;
  }
  button:hover{
    padding:20px;
    color:black;
    background-color:white;
  }
  
`
const ErrorPage = () => {
  const history = useHistory();
  return (
    <DivContainer>
      <button onClick={history.goBack}>Voltar</button>
      <p>Erro 404 - Este foguete já partiu!</p>
      <img width= "300px" src={"https://conteudo.imguol.com.br/c/parceiros/01/2020/09/25/elon-musk-1601058658859_v2_450x450.jpg"}/>
      
    </DivContainer>
  );
};

export default ErrorPage;