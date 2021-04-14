import React from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage, goToLastPage } from '../router/coordinator';

function LoginPage() {
  const history = useHistory();
  return (
    <div>
      <p>LoginPage</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
      <button onClick={() => goToAdminHomePage(history)}>Entrar</button>
    </div>
  );
}

export default LoginPage;
