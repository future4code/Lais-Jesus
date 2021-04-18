import React, {useState, useEffect } from 'react';

import axios from 'axios'
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToCreateTripPage, goToLastPage, goToLoginPage, goToTripDetailsPage } from '../router/coordinator';
import { useProtectedPage } from "../hooks/useProtectedPage";

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
  useProtectedPage();
  const history = useHistory();
  const params = useParams();
  const [trips, setTrips] = useState([])

  useEffect(() => {
    getTrips();
  }, [setTrips])

  const getTrips = () => {
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips")
    .then((res) => setTrips(res.data.trips))
    .catch((err) => console.log (err))
  };
  


  const deleteTrip = (id) => {
    const token = window.localStorage.getItem('token');
  
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips/${id}`, 
      {
        headers: {
          auth: token
        }
      }
    )
    .then((res) => { 
      console.log(res.data)
      window.confirm('Tem certeza que quer deletar esta viagem?')
      alert("A viagem foi deletada")
      getTrips()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  const mapTrips = trips.map((trip) => {
    return (
      <div>
        <TripDiv key={trip.id} onClick={() => goToTripDetailsPage(history, trip.id)} >
        <a> {trip.name} </a>        
        </TripDiv>
        <div>
          <button onClick={() => deleteTrip(trip.id)}>X</button> 
        </div>
      </div>
      
    )
  })
  return (
    <div>
      <p>AdminHomePage</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
      
      <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
      <button onClick={logout}>Logout</button>
      <div>
        <h3>Lista de viagens</h3>
        {mapTrips}
      </div>
      
    </div>
  );
}

export default AdminHomePage;
