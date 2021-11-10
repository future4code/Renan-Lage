import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
        nomeUsuario={'bruninha'}
        fotoUsuario={'https://www.petlove.com.br/images/breeds/194940/profile/original/bernese-p.jpg?1532380300'}
        fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0ogioVBeQMLuBBx-TITYbVo4c-g9f4BL1Q&usqp=CAU'}
        />
        <Post
        nomeUsuario={'josealdo'}
        fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQng7FY49QNpdPhGhE6EW5TZgBnUpl7Uc_LTQ&usqp=CAU'}
        fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwrm1H6Qb3cGpgz7BNgLBXE4mcl-wPfmU7A&usqp=CAU'}
        />
      </MainContainer>
    );
  }
}

export default App;
