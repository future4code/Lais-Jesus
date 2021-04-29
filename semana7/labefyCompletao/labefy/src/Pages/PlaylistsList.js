import React from 'react';
import { baseUrl, axiosConfig } from '../parameters'
import axios from 'axios';
import styled from 'styled-components'



const Main = styled.div`
  background-color: #008000;
  color:white;
  text-align:center;
  padding: 50px;
`;

export default class PlaylistsList extends React.Component {
  state = {
    playlists: {
      result: {
        list: []
      }
    },
  }

  componentDidMount() {
    this.getAllPlaylist();
  }

  getAllPlaylist = async () => {
    
    try {
      const response = await axios.get (baseUrl, axiosConfig);
      this.setState({ playlists: response.data });
    } catch (error) {
      console.log(error)
    }
  }

  deletePlaylist = (id) => {
    if (window.confirm("Tem certeza que quer deletar esta playlist?")) {
       axios.delete (
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId", 
          axiosConfig
        )
        .then((res) => {
          this.getAllPlaylist();
          console.log(res)
        })
        .catch ((err) => {
          console.log(err);
        });
    };
  }

    render () {

      const mapPlaylists = this.state.playlists.result.list.map((play) => {
        return (
          <div key={play.id}>
            <p>{play.name}</p>
            <button onClick={() => this.deletePlaylist(play.id)}>
              Deletar</button>
          </div>
        );
      });

      return (
            <div>
             
              <Main>
                <h1> Playslists Criadas</h1>
                {mapPlaylists}
              </Main>
  
            </div>

        )
    }
}
