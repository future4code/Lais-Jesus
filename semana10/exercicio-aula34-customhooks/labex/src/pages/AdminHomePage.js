import React, {useState, useEffect } from 'react';
import logo  from '../img/logo.png'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToCreateTripPage, goToLastPage, goToLoginPage, goToTripDetailsPage } from '../router/coordinator';
import { useProtectedPage } from "../hooks/useProtectedPage";

const DivContainer = styled.div `
  display:flex;
  flex-direction: column;
  justify-content:center;
  text-align:center;
  
`
const DivCard = styled.div `
  display:grid;
  grid-template: 1fr 1fr 1fr;
  justify-content:center;
  padding-left: 0px;
`
const CardContainer = styled.div `
  background-color: black;
  display:flex;
  justify-content: space-between;
  color: white;
  margin: 10px;
  padding: 0 30px;
  width:300px;
  &:hover{
    color:black;
    background-color:white;
    border:  1px solid black;
  }
  button {
    padding:5px;
    margin-top:20px;
    background-color:transparent;
    color:white;
    border:  0px solid white;
  }
  button:hover{
    color:white;
    background-color:black;
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
  display:flex;
  justify-content:center;
  

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

function AdminHomePage() {
  useProtectedPage();
  const history = useHistory();
  const params = useParams();
  const [trips, setTrips] = useState([])

  useEffect(() => {
    getTrips();
  }, [setTrips])

  const getTrips = () => {
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips")
    .then((res) => setTrips(res.data.trips))
    .catch((err) => console.log (err))
  };
  


  const deleteTrip = (id) => {
    const token = window.localStorage.getItem('token');
  
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips/${id}`, 
      {
        headers: {
          auth: token
        }
      }
    )
    .then((res) => { 
      console.log(res.data)
      window.confirm('Tem certeza que quer deletar esta viagem?')
      alert("A viagem foi deletada")
      getTrips()
      history.push ('/admin/trips/list')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  const mapTrips = trips.map((trip) => {
    return (
      <div>
        <CardContainer key={trip.id} onClick={() => goToTripDetailsPage(history, trip.id)} >
        <h3>{trip.name} </h3>   
        <div>
          <button onClick={() => deleteTrip(trip.id)}>X</button> 
        </div>     
        </CardContainer>
        
      </div>
      
    )
  })
  return (
    <DivContainer>
      <Header>
        
        <Buttons>
          <button onClick={() => goToLastPage(history)}>Voltar</button>
        </Buttons>
        
        <ImgLogo src ={logo}/>
        
        <Buttons>
          <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
          <button onClick={logout}>Logout</button>
        </Buttons>    
        
      </Header>
      
      <h2>Lista de viagens</h2>
          
      <DivCard>
        
        {mapTrips}
      </DivCard>
      
    </DivContainer>
  );
}

export default AdminHomePage;
