import React, {useState, useEffect } from 'react';

import axios from 'axios'
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToCreateTripPage, goToLastPage, goToLoginPage, goToTripDetailsPage } from '../router/coordinator';

const TripDiv = styled.div `
  background-color: black;
  color: white;
  margin: 10px;
  a:hover {
    background-color: white;
    color:blue;
  }
`

function AdminHomePage() {
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
      <TripDiv key={trip.id} onClick={() => goToTripDetailsPage(history)} >
        <a> {trip.name} </a>
        
      </TripDiv>
    )
  })
  return (
    <div>
      <p>AdminHomePage</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
      
      <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
      <button onClick={() => goToLoginPage(history)}>Logout</button>
      <div>
        <h3>Lista de viagens</h3>
        {mapTrips}
      </div>
      
    </div>
  );
}

export default AdminHomePage;
