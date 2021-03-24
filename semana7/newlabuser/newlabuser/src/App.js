import React from 'react';
import './App.css';
import CadastroUsuario from './Components/CadastroUsuario';
import ListaUsuario from './Components/ListaUsuario';

export default class App extends React.Component {

  state = {
    estaCadastrado: false
  };

  irParaLista = () => {
    this.setState({ estaCadastrado: true });
  };

  irParaCadastro = () => {
    this.setState({ estaCadastrado: false });
  };
  

  render () {
    const renderizaTelaCorreta = () => {
      if (this.state.estaCadastrado) {
        return <ListaUsuario  cadastro={this.irParaCadastro}/>;
      } else {
        return <CadastroUsuario lista={this.irParaLista}/>;
      }
    }
    return (
      <div className="App">

      {renderizaTelaCorreta()}
      </div>
    );
  }  
}