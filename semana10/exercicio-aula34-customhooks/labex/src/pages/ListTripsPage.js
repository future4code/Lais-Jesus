import React from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToApplicationFormPage, goToHomePage } from '../router/coordinator';


function ListTripsPage() {
  const history = useHistory();
  return (
    <div>
      <p>ListTripsPage</p>
      <button onClick={() => goToHomePage(history)}>Voltar</button>
      <button onClick={() => goToApplicationFormPage(history)}>Inscreva-se</button>

      <div>Lista de viagens</div>
    </div>
  );
}

export default  ListTripsPage;
