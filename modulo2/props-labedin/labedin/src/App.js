import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande';
import ImagemButton from './components/ImagemButton';
import CardPequeno from "./components/CardPequeno";
import MinhaFoto from "./img/minha-foto.jpg";
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  /* Outros estilos globais */
`;


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {MinhaFoto} 
          nome="Renan Lopresti Lage" 
          descricao="Oi, eu sou o Renan. Sou aluno da Labenu. Estudo programação, pretendo ser desenvolvedor. Sou uma pessoa muito dedicada, e venho crescendo com o curso."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno
          imagemEmail="https://cdn.icon-icons.com/icons2/935/PNG/512/email-closed-outlined-back-envelope-interface-symbol_icon-icons.com_73262.png"
          email="renanzera.lops@hotmail.com"
          imagemEndereco="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS178LyE7uOMRorSFLwvl4yJBhJ8K8E3XQ-g&usqp=CAU"
          endereco="Rua 33 de abril, 3945 - Batatinha "
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Curso de programação" 
        />
        
        <CardGrande 
          imagem="https://pbs.twimg.com/profile_images/880419617130336257/7ZQLukqw_400x400.jpg" 
          nome="IFSP" 
          descricao="Técnico em mecânica com ensino médio." 
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
