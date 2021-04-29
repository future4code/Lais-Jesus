import React from 'react';
import axios from 'axios';
import {baseUrl, axiosParam} from '../parametros';
import DetalheUsuario from './DetalheUsuario';

export default class ListaUsuario extends React.Component {
    state = {
        usersList: []
    }

    componentDidMount() {
        this.getUsers();
    }
    
    getUsers = () => {

        axios.get(
            `${baseUrl}`, axiosParam
          )
          .then((res) => {
            this.setState({ usersList: res.data });
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      deleteUser = (id) => {
        axios.delete(`${baseUrl}/${id}`, axiosParam
        ).then ((res) => {
          window.confirm ("Tem certeza que quer apagar este usuário?")
          this.getUsers()

        })
        .catch((err) => {
          console.log(err)
        })
      }
      
      // getUserById = (id) => {
        
      //   axios.post(`${baseUrl}/${id}`, axiosParam)
      //   .then((res) => {
          
      //   })
      //   .catch((err) => {
      //       console.log(err);
            
      //   });
      // };
    exibirDetalhes = () => {
        console.log ("Vem")
    }

      
    render () {
        

        const lista = this.state.usersList.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <button onClick = {this.exibirDetalhes()}>Ver detalhes</button>
                <br/>
                <button onClick={() => {this.deleteUser(user.id)}}>Delete usuário</button>
              </div>
            )
        });
            
        return (
            <div>
                <h1> Essa é a lista de usuários </h1>

                <br/>
                Teste Lista
                {lista}
                <br/>
        
            </div>
            
        )
    }
}