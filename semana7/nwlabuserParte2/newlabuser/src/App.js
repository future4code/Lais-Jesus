import React from 'react';
import './App.css';
import CadastroUsuario from './Components/CadastroUsuario';
import ListaUsuario from './Components/ListaUsuario';

export default class App extends React.Component {

  state = {
    cadastro: false
  };

  mudaPagina = (event) => {
    this.setState({ cadastro: !this.state.cadastro})
  }
  

  render () {
    
    return (
      <div className="App">

        <br/>
        <br/>
        <button onClick={this.mudaPagina}>
        Troca Pagina
        </button>
        {(this.state.cadastro) ? <ListaUsuario/> : <CadastroUsuario/>}

      </div>
    );
  }  
}