import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {

  const[posts, setPosts] = useState(
    {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50?random=1",
      fotoPost: "https://picsum.photos/200/150?random=2"
    },
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50?random=3",
      fotoPost: "https://picsum.photos/200/150?random=4"
    },
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50?random=5",
      fotoPost: "https://picsum.photos/200/150?random=6"
    }
  )

  const listaDeComponentes = posts.map((post) => {
    return (<Post
      nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}
    />);
  })

  return (
    <MainContainer>
      
    </MainContainer>
  );
}

export default App;
