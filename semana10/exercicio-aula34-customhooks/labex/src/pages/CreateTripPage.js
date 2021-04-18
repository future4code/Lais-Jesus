import React from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage, goToLastPage } from '../router/coordinator';
import { useProtectedPage } from "../hooks/useProtectedPage";

function CreateTripPage() {
  useProtectedPage();
  const history = useHistory();
  return (
    <div>
      <p>CreateTripPage</p>
      <form>
        <input plcaholder ="Nome"/>
        <select>
          <option>Escolha um planeta</option>
          <option>Planeta 1</option>
          <option>Planeta 2</option>
        </select>
        <input plcaholder ="Data"/>
        <input plcaholder ="Descrição"/>
        <input plcaholder ="Duração em dias"/>
      </form>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
      <button onClick={() => goToAdminHomePage(history)}>Criar Viagem</button>
    </div>
  );
}

export default CreateTripPage;
