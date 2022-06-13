import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

function Etapa3() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <PerguntaAberta
          pergunta={"5. Por que você não terminou um curso de graduação?"}
        />
        <PerguntaOpcoes
          pergunta={"6. Você fez algum curso complementar?"}
          opcoes={["Nenhum", "Curso técnico", "Curso de inglês"]}
        />
      </div>
    );
  }

export default Etapa3;
