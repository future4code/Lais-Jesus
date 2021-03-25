
import './App.css';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
 
  state = {
    dogtorImage : { url: ""},
  }

  dogtorDogs = async (event) => {

    try {
      const appointment = await axios.get (
        ' https://api.thedogapi.com/v1/images/search'
      );
      console.log ('OI');
      this.setState({dogtorImage: response.data})
    } catch(error) {
      console.log(error)
    }
  }
 
 
  render () {

    return (
      <div className="App">
        
        <h1> Doguinho Fofineo, do latim os terapeutas dos humanos </h1>
        <button onClick = {this.dogtorDogs}>Encontre um Dogtor</button>
        <br />
        <br />
        <img src = {this.state.dogtorImage} alt ={"fotos de doguinhos"} />

      </div>
    );
  }
  
  
}

