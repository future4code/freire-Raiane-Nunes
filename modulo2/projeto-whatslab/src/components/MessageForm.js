import React from "react";

class MessageForm extends React.Component {
  state = {   
    pessoas: [],
    valorInputPessoa: "",
    valorInputMensagem: ""
  };

  adicionaPessoa = () => {
    const novaMensagem = {
      nome: this.state.valorInputPessoa,
      mensagem: this.state.valorInputMensagem
    };
    const novoMensagens = [...this.state.pessoas, novaMensagem];   
    this.setState({ pessoas: novoMensagens,valorInputMensagem:"" });
  };

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  onEnterMensagem = (event) =>{
    if (event.key === 'Enter') {
      this.adicionaPessoa();
    }
  }

  render() {
    
    const listaDeMensagens = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          {pessoa.nome}: {pessoa.mensagem}
        </p>
      );
    });

    return (
      <div className="App">
        <h1>WhatsLab</h1>
        <div className="AppContainer">{listaDeMensagens}</div>
        <div>
          <input
            
            value={this.state.valorInputPessoa}
           
            onChange={this.onChangeInputPessoa}
            placeholder={"Usuário"}
          />
          <input
            
            value={this.state.valorInputMensagem}
            
            onChange={this.onChangeInputMensagem}
            onKeyDown={this.onEnterMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </div>
      </div>
    );
  }
}

export default MessageForm;
