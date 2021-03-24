import React from 'react';
import axios from 'axios';


export default class CadastroUsuario extends React.Component {
    state = {
        inputNameValue: "",
        inputEmailValue: ""
    }

    handleInputNameChange = (e) => {
        this.setState({ inputNameValue: e.target.value});
    }
    handleInputEmailChange = (e) => {
        this.setState({ inputEmailValue: e.target.value});
    }

    createUser = () => {
        const body = {
            name: this.state.inputNameValue,
            email: this.state.inputEmailValue
        };
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        {
            headers: {
                Authorization: "lais-jesus-cruz"
            }
        }).then((res) => {
            this.setState({inputNameValue:""})
            this.setState({inputEmailValue:""})
            
            alert ("Usuário Cadastrado com sucesso")
        })
        .catch((err) => {
            console.log(err);
            alert ("Erro ao cadastrar usuário")
        });
    };

     
    render () {

        return (
            <div>
                <br/>
                <h1>Cadastro de novos usuários</h1>
                
                Nome:
                <input value = {this.state.inputNameValue}
                onChange={this.handleInputNameChange}
                type="text"
                />
                <br/>
                E-mail:
                <input value = {this.state.inputEmailValue}
                onChange={this.handleInputEmailChange}
                type="email"
                />
                <br/>
                <br/>
                <button onClick={this.props.createUser}>
                    Cadastrar Novo Usuário
                </button>
                <hr/>
                <button onClick={this.props.lista}>
                    Ir para Lista de Usuarios
                </button>
                
            </div>


            
        )
    }
}