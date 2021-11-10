import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCompartilhamento from '../../img/send.svg'
import iconeBookmark from '../../img/bookmark.svg'
import iconeBookmarkBranco from '../../img/bookmark-white.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhamento} from '../SecaoCompartilhamento/SecaoCompartilhamento'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    comentario: '',
    compartilhamento: false,
    save: false,
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
      if(this.state.curtido == false){
        this.setState({
          numeroCurtidas: this.state.numeroCurtidas + 1,
          curtido: true
        })
      }else{
        this.setState({
          numeroCurtidas: this.state.numeroCurtidas - 1,
          curtido: false
        })
      }
  }
  
  onClickSave = () => {
    this.setState({
      save: !this.state.save
    })
  }
  

  onClickCompartilhamento = () =>{
    this.setState({
      compartilhamento: !this.state.compartilhamento
    })
  }

  aoEnviarCompartilhamentoTwitter = () =>{
    console.log("Compartilhou no Twitter a mensagem: ")
    this.setState({
      compartilhamento: false
    })
  }

  aoEnviarCompartilhamentoFacebook = () =>{
    console.log("Compartilhou no Facebook a mensagem: ")
    this.setState({
      compartilhamento: false
    })
  }

  aoEnviarCompartilhamentoInstagram = () =>{
    console.log("Compartilhou no Instagram a mensagem: ")
    this.setState({
      compartilhamento: false
    })
  }
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSave

    if(this.state.save == false){
      iconeSave = iconeBookmarkBranco
    } else {
      iconeSave = iconeBookmark
    }
     
    let componenteCompartilhamento

    if(this.state.compartilhamento){
      componenteCompartilhamento = <SecaoCompartilhamento twitter={this.aoEnviarCompartilhamentoTwitter} facebook={this.aoEnviarCompartilhamentoFacebook} instagram={this.aoEnviarCompartilhamentoInstagram} />
      this.state.comentando = false
    }
    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
      this.state.compartilhamento = false
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeSave}
          onClickIcone={this.onClickSave}
          valorContador={' '}
        />

        <IconeComContador
          icone={iconeCompartilhamento}
          onClickIcone={this.onClickCompartilhamento}
          valorContador={''}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        

      </PostFooter>
      {componenteComentario}
      {componenteCompartilhamento}
    </PostContainer>
  }
}

export default Post