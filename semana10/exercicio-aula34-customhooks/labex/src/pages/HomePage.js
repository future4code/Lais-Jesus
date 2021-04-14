import React from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from '../router/coordinator';


function HomePage() {
    const history = useHistory();
  return (
    <div>
      <p>HomePage</p>
      <button onClick={() => goToListTripsPage(history)}>Ver viagens</button>
      <button onClick={() => goToLoginPage(history)}>Área do administrador</button>
    </div>
  );
}

export default HomePage;
