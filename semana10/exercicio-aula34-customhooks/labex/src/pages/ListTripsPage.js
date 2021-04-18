import React, {useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import logo  from '../img/logo.png'
import { useHistory, useParams } from "react-router-dom";
import { baseUrl } from "../parameters";
import { goToApplicationFormPage, goToHomePage } from '../router/coordinator';


const DivContainer = styled.div `
  display:flex;
  flex-direction: column;
  justify-content:center;
  text-align:center;
  
`
const DivCard = styled.div `
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content:space-between;
  padding-left: 100px;
`
const CardContainer = styled.div `
  background-color: black;
  color: white;
  margin: 10px;
  width:300px;
`
const Header = styled.div `
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  color: white;
`

const ImgLogo = styled.img `
  width: 300px;
  display:flex;
  justify-content:center;
  

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

function ListTripsPage() {
  const history = useHistory();
  const [trips, setTrips] = useState([])

  useEffect(() => {
    const getTrips = () => {
      axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips")
      .then((res) => setTrips(res.data.trips))
      .catch((err) => console.log (err))
    };
    
    getTrips();
  }, [setTrips])

  const mapTrips = trips.map((trip) => {
    return (
      <CardContainer key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
      </CardContainer>
    )
  })


  return (
    <DivContainer>
      <Header>
        
        <Buttons>
          <button onClick={() => goToHomePage(history)}>Voltar</button>
        </Buttons>
        
        <ImgLogo src ={logo}/>
        
        <Buttons>
        <button onClick={() => goToApplicationFormPage(history)}>Inscreva-se</button>
        </Buttons>
        
        
      </Header>
      <h2> Lista de viagens</h2>
      <DivCard>
        
        {mapTrips}
      </DivCard>
      
    </DivContainer>
  );
}

export default  ListTripsPage;
