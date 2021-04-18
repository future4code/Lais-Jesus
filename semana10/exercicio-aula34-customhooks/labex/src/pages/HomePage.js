import React from 'react';
import styled from 'styled-components'
import logo  from '../img/logo.png'
import sp  from '../img/sp.png'
import { useHistory, useParams } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from '../router/coordinator';

const HomeContainer = styled.div `
  background-image: url(${sp});
  background-repeat: no-repeat, repeat;

  width: 1520px;
  height: 800px;
  margin: 0 auto;
  color: white;
`
const Container = styled.div `
    display:grid;
    grid-column: 2;
    justify-content: center;
    padding-top:400px;
    
    
`

const ImgLogo = styled.img `
  width: 300px;
  display:flex;
  justify-content:center;
  

`
const Buttons = styled.div `
padding-top:20px;
  button {
    padding:20px;
    background-color:transparent;
    color:white;
    border:  1px solid white;
    

  }
  button:hover{
    padding:20px;
    color:black;
    background-color:white;
  }
`


function HomePage() {
    const history = useHistory();
  return (
    <HomeContainer>
      <Container>
          <ImgLogo src ={logo}/>
          <Buttons>
            <button onClick={() => goToListTripsPage(history)}>Ver viagens</button>
            <button onClick={() => goToLoginPage(history)}>Administrador</button>
          </Buttons>
          
      </Container>
   
    </HomeContainer>
  );
}

export default HomePage;
