import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import { Container , DivInput } from "./styled";




class App extends React.Component {
  state =  {
    post: [
      {
        nomeUsuario:"paulinha",
        fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4D03AQF95K-tCg97Gw/profile-displayphoto-shrink_800_800/0/1566405079221?e=1620864000&v=beta&t=_ciMtGq0ULlceu0IHFCO13sIsZc-CXbeUlTxHMtDvLw",
        fotoPost: "https://i.pinimg.com/originals/85/7a/4e/857a4e343dc505463fb282d5b9a66acf.jpg",
      },
      {
        nomeUsuario:"laisinha",
        fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4E03AQEdvawifJSVAw/profile-displayphoto-shrink_800_800/0/1615384344191?e=1620864000&v=beta&t=g6BobV1mRxCFGXtaVOepY_y1RdTHq7zP_faX2O0rI9s",
        fotoPost: "https://i.pinimg.com/564x/a8/23/e6/a823e6ccd5c83f4e12a9fcb1c03a6e25.jpg",
      },
      {
        nomeUsuario: "amandinha",
        fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4D03AQEgcmn5Nm-asg/profile-displayphoto-shrink_800_800/0/1565350246843?e=1620864000&v=beta&t=mBkx9xzuqYzeQ0ulazr1WGcGP0bpBRgEM8FrWQFX1js",
        fotoPost: "https://pm1.narvii.com/6521/9949c1118ba66f378b16b95b5713ad33a05470fd_hq.jpg",
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",       
  };
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    
    const novosPost = [...this.state.post, novoPost];

    this.setState({ posts: novoPost });
  };


  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaPosts = this.state.post.map((post) => {
      return (
        <Container key={post.nome}>

          <Post nomeUsuario= {post.nomeUsuario}
          fotoUsuario={post.fotoUsuario} 
          fotoPost= {post.fotoPost} >
          </Post> 

        </Container>
        
      );
    });
    return (
      <div> 
        <DivInput>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
          />
          <input
            
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario }
            placeholder={"Foto de Perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionaPost}>Postar</button>
        </DivInput>
        <div> {listaPosts}</div>
        
      </div>
    );
  }
}

export default App;
