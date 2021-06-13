import React, {useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import logo  from '../img/logo.png'
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import useRequestData from '../hooks/useRequestData'
import { goToLastPage, goToListTripsPage } from '../router/coordinator';
import { countries } from '../parameters'


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


function ApplicationFormPage() {
  const history = useHistory();
  const [trips] = useRequestData("/trips", {})
  const [tripId, setTripid] = useState('')

  const initialForm = {
    name: "",
    age: 0,
    applicationText: "",
    profession: "",
    country: ""
  };
  const [form, onChange, resetForm] = useForm(initialForm)

  const clearForm =() => {
    resetForm()
    setTripid('')
  }

  const postApplyTrip = (id, event) => {
    event.preventDefault()
    const body = 
      {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country
      } 
    
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips/${id}/apply`)
    .then((res) => {
      console.log("res.data")
      clearForm();
    })
    .catch((err) => console.log (err))
  };

  const onChangeTrip = (event) => {
    setTripid(event.target.value)
  }

  const tripsSelect = trips.trips && trips.trips.map((trip) => {
      return <option key={trip.id} value={trip.id}>
        {trip.name}
        </option>
  })


  return (
    <DivContainer>
      <Header>
        
        <Buttons>
          <button onClick={() => goToLastPage(history)}>Voltar</button>
        </Buttons>
        
        <ImgLogo src ={logo}/>

        <h1></h1>
        
        
      </Header>
      <h2>Formulário de inscrição</h2>

      
      <DivForm >

        <form onSubmit={postApplyTrip}>
          <select placeholder={"Viagem"} name={"trip"} defaultValue={""} onChange={onChangeTrip} required>
            
            <option value="" disabled>Escolha uma viagem</option>
            {tripsSelect}
          
          </select>


          <input  name='name' value={form.name} type="text" onChange={onChange} required placeholder ="Nome"/>
          
          
          <input  name='age' value={form.age} type="number" onChange={onChange} min={18} required placeholder ="Idade"/>
          <input name='applicationText' value={form.applicationText} type="text" onChange={onChange} required placeholder ="Porque você quer ir?"/>
          <input name='profession' value={form.profession} type="text"  onChange={onChange} required placeholder ="Quals sua profissão?"/>

          <select placeholder={"País"} name={"country"} defaultValue={""} onChange={onChange} required>
            
            <option value="" disabled>Escolha um País</option>
            {countries.map((country) => {
              return <option value={country} key={country}>
                {country}
              </option> 
            })}
          
          </select>
          
          <button>Enviar</button>
        </form>

      </DivForm>
            
    </DivContainer>
  );
}

export default ApplicationFormPage;
