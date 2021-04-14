import React from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToCreateTripPage, goToLastPage, goToLoginPage, goToTripDetailsPage } from '../router/coordinator';

function AdminHomePage() {
  const history = useHistory();
  return (
    <div>
      <p>AdminHomePage</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
      <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
      <button onClick={() => goToLoginPage(history)}>Logout</button>
      <div>
        <h3>Lista de viagens</h3>
        <button onClick={() => goToTripDetailsPage(history)}>Detalhes</button>
      </div>
      
    </div>
  );
}

export default AdminHomePage;
