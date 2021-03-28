import React from 'react'
import CreatePlaylists from "./Pages/CreatePlaylists";
import PlaylistsList from "./Pages/PlaylistsList";
import styled from "styled-components"

const Header = styled.div `
  height:110px;
  background-color: black;
  color: white;
  text-align:center;
  padding-top:5px;
`

export default class App extends React.Component {
  state = {
    page: "CreatePlaylist"
  };

  changePage = () => {
    if (this.state.page === "CreatePlaylist") {
      this.setState({ page: "PlaylistList" });
    } else if (this.state.page === "PlaylistList") {
      this.setState({ page: "CreatePlaylist" });
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "CreatePlaylist":
        return <CreatePlaylists />;
      case "PlaylistList":
        return <PlaylistsList />;
      default:
        return <div></div>;
    }
  };

  buttonName = () => {
    const nomeCriar ="Criar Playlist"
    const nomeLista = "Ver Playlists"
    switch (this.state.page) {
      case "CreatePlaylist":
        return nomeLista;
      case "PlaylistList":
        return nomeCriar;
      default:
        return <div></div>;
    }

  }


  render() {
    return (
      <div className="App">
        
        <Header>
          <h1> Labefy, musica do seu jeito!</h1>
          <button onClick={this.changePage}>{this.buttonName()}</button> 
        </Header>
        {this.renderPage()}
        
      </div>
    );
  }
  
}
