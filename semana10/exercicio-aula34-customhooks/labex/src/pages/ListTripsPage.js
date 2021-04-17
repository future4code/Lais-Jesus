import React, {useState, useEffect } from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { baseUrl } from "../parameters";
import { goToApplicationFormPage, goToHomePage } from '../router/coordinator';
import axios from 'axios';

const TripDiv = styled.div `
  background-color: black;
  color: white;
  margin: 10px;
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
      <TripDiv key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
      </TripDiv>
    )
  })


  return (
    <div>
      <p>ListTripsPage</p>

      <button onClick={() => goToHomePage(history)}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(history)}>Inscreva-se</button>

      <div>Lista de viagens</div>
      {mapTrips}
    </div>
  );
}

export default  ListTripsPage;
