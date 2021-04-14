import React from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage, goToLastPage } from '../router/coordinator';

function CreateTripPage() {
  const history = useHistory();
  return (
    <div>
      <p>CreateTripPage</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
      <button onClick={() => goToAdminHomePage(history)}>Criar Viagem</button>
    </div>
  );
}

export default CreateTripPage;
