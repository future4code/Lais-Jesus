import React from 'react';
import axios from 'axios';

export default class ListaUsuario extends React.Component {
    state = {
        usersList: []
    }

    componentDidMount() {
        this.getUsers();
    }
    
    getUsers = () => {

        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "lais-jesus-cruz"
              }
            }
          )
          .then((res) => {
            this.setState({ usersList: res.data.result.list });
            console.log(res.data.result.list);
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
    render () {
        const lista = this.state.usersList.map((user) => {
            return <li key={user.id}>{user.name}</li>
        });
            
        return (
            <div>
                <h1> Essa é a lista de usuários </h1>
                <br/>
                Teste Lista
                {lista}
                <br/>
                <button onClick={this.props.cadastro}>Voltar</button>
            </div>
            
        )
    }
}