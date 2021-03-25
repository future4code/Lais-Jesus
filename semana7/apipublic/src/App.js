import './App.css';
import React from 'react';
import axios from 'axios';
import styled from "styled-components"

const Img =styled.img `
  width: 80%;
`

export default class App extends React.Component {
 
  state = {
    dogtor: {url: ""}
  }

  loadNextDogtor = async () => {
    const response = await axios.get(
      "https://api.thedogapi.com/v1/images/search", 
      {
        headers: {
          ['x-api-key']: "1dd3be2c-add8-48ca-a329-803d3fa2edf9"
        }
      },
      {params: {limit:1, size:'full'} }
    );
    this.setState({ dogtor: response.data[0] });
    console.log(response.data);
  };

  render () {
    

    return (
      <div className="App">
        
        <h1> Doguinho Fofineo, do latim os terapeutas dos humanos </h1>
        <button onClick = {this.loadNextDogtor}>Encontre um Dogtor</button>
        <br />
        <br />
        <Img src = {this.state.dogtor.url} alt ={"fotos de doguinhos"}/>

      </div>
    );
  }
  
  
}

