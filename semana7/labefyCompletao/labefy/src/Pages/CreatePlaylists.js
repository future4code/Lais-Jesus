import React from "react";
import { baseUrl, axiosConfig } from "../parameters";
import axios from "axios";
import styled from "styled-components";


const Main = styled.div`
  background-color: #008000;
  color:white;
  text-align:center;
  padding: 50px;
`;

const Input = styled.input`
  color:white;
  text-align:center;
  padding: 0 20%;
`;

const Button = styled.input`
  color:white;
  text-align:center;
  margin: 10px;
`;



export default class CreatePlaylists extends React.Component {
  state = {
    name: ""
  };

  handleName = (event) => {
    this.setState({ name: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.name
    };

    axios
      .post(baseUrl, body, axiosConfig)
      .then((response) => {
        console.log(response);
        alert("A playlist foi criado com sucesso!");
        this.setState({ name: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Main>
          <h2>CRIAR PLAYLIST</h2>
          <h2>NOME DA PLAYLIST</h2>
          <p>Escolha um nome para cada Playlist</p>
          <Input
            onChange={this.handleName}
            value={this.state.name}
            placeholder="Digite aqui o nome da playlist "
          />
          <button onClick={this.createPlaylist}>ENVIAR</button>
        </Main>
      </div>
    );
  }
}
