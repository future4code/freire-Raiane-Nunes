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
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />
        <Post
          nomeUsuario={'Raiane'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?a=4'}
        />
        <Post
          nomeUsuario={'Diego'}
          fotoUsuario={'https://picsum.photos/50/50?a=5'}
          fotoPost={'https://picsum.photos/200/150?a=6'}
        />
        pessoas = [{
            nomeUsuario = 'Paulinha',
            fotoUsuario = 'https://picsum.photos/50/50?a=1',
            fotoPost = 'https://picsum.photos/200/150?a=2'
          },{
            nomeUsuario='Raiane',
            fotoUsuario='https://picsum.photos/50/50?a=3',
            fotoPost='https://picsum.photos/200/150?a=4'
          },{
            nomeUsuario='Diego',
            fotoUsuario='https://picsum.photos/50/50?a=5',
            fotoPost='https://picsum.photos/200/150?a=6'
          }  
        ];
        render(){
          PostContainer this.state.pessoas
          return(
            <p>{nome.usuário}</p>
          )
        }
      </MainContainer>
    );
  }
}

export default App;
