import React from 'react';
import Styled from 'styled-components'
import LoginPage from './components/pages/login';
import UserPage from './components/pages/userPages';


const Body = Styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  
`
export default class App extends React.Component {
  state = {
    page:"LoginPage",
    button: "Pagina de Usuarios"
  }
  changePage = (ev) =>{
    if(this.state.page === "LoginPage"){
      this.setState({page:"UserPage", button:"Pagina de Criação de Usuarios"})
    }else if(this.state.page === "UserPage"){
      this.setState({page:"LoginPage", button:"Pagina de Usuarios"})
    }
  }
  render() {
    return (
      <Body>
        <h1>Labenusers</h1>
        <button onClick={this.changePage}>{this.state.button}</button>
        {this.state.page === "LoginPage" ? <LoginPage/> : <UserPage/>}
      </Body>
    );
  }

}


