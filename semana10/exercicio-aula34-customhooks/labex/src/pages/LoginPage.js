import React, {useState, useEffect } from 'react';
import styled from 'styled-components'
import logo  from '../img/logo.png'
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { goToAdminHomePage, goToHomePage } from '../router/coordinator';
import axios from 'axios';

const DivContainer = styled.div `
  text-align:center;
  
`

const DivForm = styled.div `
  form {
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding: 50px 400px;

    input {
      padding: 10px;
      margin: 10px 0;
    }
    button {
      margin: 10px 0;
      padding:20px;
      color:black;
      background-color:black;
      color:white;
      
      
    }
    button:hover{
      padding:20px;
      background-color:gray;
      color:black;
      border:  1px solid black;
    }

  }
  
  
`
const Header = styled.div `
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  color: white;
`

const ImgLogo = styled.img `
  width: 300px;
  ;
`
const Buttons = styled.div `
  button {
    padding:20px;
    background-color:transparent;
    color:white;
    border:  0px solid white;
  }
  button:hover{
    padding:20px;
    color:black;
    background-color:white;
  }
`

function LoginPage() {
  const history = useHistory();
  const initialForm = {
    email: "",
    password: ""
  };
  const [form, onChange, resetForm] = useForm(initialForm)

  const login = (event) => {
    event.preventDefault();
    
    const body = {
      email: form.email,
      password: form.password
    }
  
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/login",
    body)
    .then((res) => { 
      console.log(res.data)
      window.localStorage.setItem('token', res.data.token)
      history.push('/admin/trips/list')
      
    })
    .catch((err) => {
      console.log(err)
    })
  } 

  return (
    <DivContainer>
    
      <Header>
        
        <Buttons>
          <button onClick={() => goToHomePage(history)}>Home</button>
        </Buttons>
        
        <ImgLogo src ={logo}/>

        <h1></h1>
        
        
      </Header>
      <DivForm>
        <form onSubmit={login}>
          <input name='email' value={form.email} type="email" onChange={onChange} placeholder="E-mail" required/>
          <input name='password' value={form.password} type="password"  onChange={onChange} placeholder="Senha" required />
          <button>Login</button>

        </form>

      </DivForm>
      
      
      
    </DivContainer>
  );
}

export default LoginPage;
