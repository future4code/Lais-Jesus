import React, {useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage } from '../router/coordinator';
import { useProtectedPage } from "../hooks/useProtectedPage";
import styled from 'styled-components'
import axios from 'axios';

const TripDiv = styled.div `
  background-color: black;
  color: white;
  margin: 10px;
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

  const decideCandidate = (tripId, candidateId) => {
    const token = window.localStorage.getItem("token");
    const body = {
      approve: true,
    }
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips/${tripId}/candidates/${candidateId}/decide`,
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
    <div>
      <p>TripDetailsPage</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>

      <div>
        <h4>Nome: {tripDetails.name}</h4>
        <p>Planeta:  {tripDetails.planet}</p>
        <p>Duração (em dias): {tripDetails.durationInDays}</p>
        <p>Data da viagem: {tripDetails.date}</p>
      </div>
      
      <div>
        <h4>Lista de Candidatos</h4>
        {/* <p></p> colocar aqui a lista de candidatos que vem do applyforms */}
      </div>

      <div>
        <h4>Candidatos Aprovados</h4>
        <p> </p> 
        <button onClick={decideCandidate}>Aprovar</button>
        <button>Reprovar</button>
      </div>
          


    </div>
  );
}

export default TripDetailsPage;
