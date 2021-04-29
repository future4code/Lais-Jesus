import React from 'react';
import axios from 'axios';
import {baseUrl, axiosParam} from '../parametros'

export default class DetalheUsuario extends React.Component {
    
    ggetUserById = (id) => {
        
        axios.post(`${baseUrl}/${id}`, axiosParam)
        .then((res) => {
            console.log((res))
        })
        .catch((err) => {
            console.log(err);
        });
      };

      
    render () {
        const detalhe = this.state.props.usersList.map((user) => {
          return (
            <div key={user.id}>
              <p >Nome:{user.name}</p>
              <p >Nome:{user.email}</p>
              <button onClick={() => {this.props.deleteUser(user.id)}}>Delete usuário</button>
            </div>
          )
        });

        return (
            <div>
                
                <h1>Detalhe do Usuário</h1>
                
                {detalhe}
                
                
            </div>


            
        )
    }
}