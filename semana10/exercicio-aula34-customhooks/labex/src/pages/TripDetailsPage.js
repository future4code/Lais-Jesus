import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage } from '../router/coordinator';
import styled from 'styled-components'

function TripDetailsPage() {
  const history = useHistory();
  return (
    <div>
      <p>TripDetailsPage</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
    </div>
  );
}

export default TripDetailsPage;
