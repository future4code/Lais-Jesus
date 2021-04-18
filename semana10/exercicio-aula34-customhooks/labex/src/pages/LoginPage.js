import React, {useState, useEffect } from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage, goToLastPage } from '../router/coordinator';
import axios from 'axios';

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const login = () => {
    const body = {
      email: email,
      password: password
    }

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/login",
    body)
    .then((res) => { 
      console.log(res.data)
      window.localStorage.setItem('token', res.data.token)
      goToAdminHomePage(history)
    })
    .catch((err) => {
      console.log(err)
    })

  }


  return (
    <div>
      <p>LoginPage</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
      <hr/>
      <br/>
      <input value={email} onChange={handleEmail} placeholder="E-mail"/>
      <input value={password} onChange={handlePassword} placeholder="Senha"/>
      <button onClick={login}>Login</button>
      <br/>
      <hr/>
      <button onClick={() => goToAdminHomePage(history)}>Entrar</button>
    </div>
  );
}

export default LoginPage;
