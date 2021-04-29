import React, {useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import logo  from '../img/logo.png'
import { useForm } from "../hooks/useForm";
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage, goToLastPage } from '../router/coordinator';
import { useProtectedPage } from "../hooks/useProtectedPage";
import { planets } from '../parameters'

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
    select{
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

function CreateTripPage() {
  useProtectedPage();
  const history = useHistory();
  const [tripCreated, setTripCreated,] = useState("")

  const initialForm = {
    name: '',
    planet: '',
    date:  "2001/10/1",
    description: '',
    durationInDays: "",
  };
  const [form, onChange, resetForm] = useForm(initialForm)

  const createTrip = (event) => {
    event.preventDefault();
    
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }
    const token = window.localStorage.getItem('token');
  
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips",
    body,
    {
      headers: {
        auth: token
      }
    })
    .then((res) => { 
      console.log(res.data)
      setTripCreated(res.data.trip)
      resetForm()
      
    })
    .catch((err) => {
      console.log(err)
    })
  } 
  return (
    <DivContainer>

      <Header>
        
        <Buttons>
          <button onClick={() => goToLastPage(history)}>Voltar</button>
        </Buttons>
        
        <ImgLogo src ={logo}/>

        <h1></h1>
        
        
      </Header>

      <DivForm>
        <form onSubmit={createTrip}>
          <input name='name' value={form.name} type="text" onChange={onChange} required placeholder ="Nome"/>
          
          <select placeholder={"Planeta"} name={"planet"} defaultValue={""} onChange={onChange} required>
            
            <option value="" disabled>Escolha um Planeta</option>
            {planets.map((planet) => {
              return <option value={planet} key={planet}>
                {planet}
              </option> 
            })}
          
          </select>
          <input name='date' value={form.date} type="date" onChange={onChange} required placeholder ="Data"/>
          <input name='description' value={form.description} type="text" onChange={onChange} required placeholder ="Descrição"/>
          <input name='durationInDays' value={form.durationInDays} type="number" min={1} onChange={onChange} required placeholder ="Duração em dias"/>

          <button >Criar Viagem</button>
      </form>
      
      </DivForm>
      
    </DivContainer>
  );
}

export default CreateTripPage;



// trips={trips}
// setTrips={setTrips}