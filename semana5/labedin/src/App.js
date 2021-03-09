import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './components/img/ImagemPerfil.PNG';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil} 
          nome="Laís de Jesus" 
          descricao="Oi, eu sou o Laís de Jesus. Sou aluna da Labenu no curso de desenvolvimento web full stack. Adoro séries de comédia, assisto principalmente nos dias emocionalmente complicados"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="cardPequeno">
        <div className="email">
            <CardPequeno 
            imagem = "https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-email-icon-png-image_1757854.jpg"
            info = "Email: dejesusll@outlook.com"
            />
            <CardPequeno 
            imagem = "https://image.flaticon.com/icons/png/512/9/9275.png"
            info = "Endereço: Rua do Bom Jesus"
            />

        </div>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="LMR - Laboratório de Mecânica das Rochas" 
          descricao="Técnica de laboratório" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Academia da Criatividade" 
          descricao="Facilitando encontros criativos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
