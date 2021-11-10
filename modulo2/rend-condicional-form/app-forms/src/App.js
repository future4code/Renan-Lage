import React from 'react';
import Etapa1 from './components/paginas/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components';

const Container = styled.div`
div{
  margin-bottom: 3%;
}
display: flex;
flex-direction: column;
align-items: center;
`

export default class App extends React.Component {
  state = {
    pagina: 0,
    botao: true
  }
  enviarFormulario = () => {
    if(this.state.pagina < 2){
      this.setState({
        pagina: this.state.pagina +=1,
        botao: true
      });
    }else{
      this.setState({
        pagina: this.state.pagina +=1,
        botao: false
      });
    }
  }

render() {
    let pagina
    let botao 
    if(this.state.botao == true){
      botao = <button onClick={this.enviarFormulario}>Enviar Formulario</button>
    }else{
      botao = ""
    }
    if(this.state.pagina == 0){
      pagina = <Etapa1></Etapa1>
    } else if (this.state.pagina == 1){
      pagina = <Etapa2></Etapa2>
    }else if (this.state.pagina == 2){
      pagina = <Etapa3></Etapa3>
    }else{
      pagina = <Final></Final>
    }


    return <Container>
      <div>{pagina}</div>
      <div>{botao}</div>
    </Container>;
  }
}
