import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemMinhaFoto from './img/raiane.jpeg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemMinhaFoto}
          nome="Raiane" 
          descricao="Oi, eu sou a Raiane. Sou aluna da Labenu. Adoro pedir e-mails na sexta-feira e esperar os meus amigos da labenu responderem e poder desejar um bom final de semana"
        />
        
        <ImagemButton 
          imagem= "https://cdn-icons-png.flaticon.com/512/6327/6327790.png"
          texto="Ver mais"
        />
        <CardPequeno 
          imagem ="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Location-Pin-Map-512.png" 
          nome= "endereço: " 
          descricao= "Rua Maria Josefina de Resende"
        
        />
      
        <CardPequeno
        imagem ="https://cdn1.iconfinder.com/data/icons/document-edit-line/64/Document-doc-file-email-message-order-paper-512.png" 
        nome= "email: " 
        descricao= "raianeancel@hotmail.com"
        
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de desenvolvimento web" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
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
