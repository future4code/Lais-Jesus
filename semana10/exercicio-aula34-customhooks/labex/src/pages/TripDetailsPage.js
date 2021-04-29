import React, {useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage } from '../router/coordinator';
import { useProtectedPage } from "../hooks/useProtectedPage";
import styled from 'styled-components'
import logo  from '../img/logo.png'
import axios from 'axios';

const DivContainer = styled.div `
  text-align:center; 
   
`
const Cards = styled.div `
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center; 
`
const Header = styled.div `
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  color: white;
`

const ImgLogo = styled.img `
  width: 300px;
`
const CardContainer = styled.div `
  background-color: black;
  color: white;
  margin: 10px;
  width:600px;
`
const DivApproved = styled.div `
  background-color: black;
  color: white;
  display:flex;

  margin: 10px;
  width:600px;
`
const Buttons = styled.div `
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

function TripDetailsPage() {
  useProtectedPage();
  const history = useHistory();
  const params = useParams();
  const [tripDetails, setTripDetails] = useState({})

  useEffect(() => {
    
    getTripDetail(params.id);
  }, [params.id])

  const getTripDetail = (id) => {
    const token = window.localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trip/${id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((res) => {
        console.log(res.data.trip);
        setTripDetails(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decideCandidate = (tripId) => {
    const token = window.localStorage.getItem("token");
    const body = {
      approve: true,
    }
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips/${tripId}/candidates/2MIZ8EW0KEaDlaaVZNbs/decide`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((res) => {
        console.log(res.data);
        // setTripDetails(res.data.trip); chamar lista de candidatos
      })
      .catch((err) => {
        console.log(err);
      });
  };

 

  return (
    <DivContainer>
      
      <Header>
        
        <Buttons>
          <button onClick={() => goToLastPage(history)}>Voltar</button>
        </Buttons>
        
        <ImgLogo src ={logo}/>

        <h1></h1>
        
      </Header>
      <h2>Detalhes da Viagem</h2>
      <Cards>
        <CardContainer>
          <h4>Nome: {tripDetails.name}</h4>
          <p>Planeta:  {tripDetails.planet}</p>
          <p>Duração (em dias): {tripDetails.durationInDays}</p>
          <p>Data da viagem: {tripDetails.date}</p>
        </CardContainer>
        
        <DivApproved>
          <CardContainer>
            <h4>Lista de Candidatos</h4>
            {/* <p></p> colocar aqui a lista de candidatos que vem do applyforms */}
          </CardContainer>
          
          <CardContainer>
            <h4>Candidatos Aprovados</h4>
            <Buttons>
              <button onClick={decideCandidate}>Aprovar</button>
              <button>Reprovar</button>
            </Buttons>
            
          </CardContainer>
      </DivApproved>

      </Cards>
      
          


    </DivContainer>
  );
}

export default TripDetailsPage;
