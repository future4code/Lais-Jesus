import React from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage, goToListTripsPage } from '../router/coordinator';

function ApplicationFormPage() {
  const history = useHistory();
  return (
    <div>
      <p>ApplicationFormPage</p>

      <button onClick={() => goToLastPage(history)}>Voltar</button>

      <select>
        <option>Escolha uma viagem</option>
        <option>Marte</option>
        <option>Dagobah</option>
      </select>
      <input placeholder="Nome"/>
      <input placeholder="E-mail"/>
      <input placeholder="Porque você quer ir a essa viagem?"/>

      <button onClick={() => goToListTripsPage(history)}>Enviar</button>
    </div>
  );
}

export default ApplicationFormPage;
