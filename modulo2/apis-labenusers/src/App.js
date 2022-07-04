import React from "react";
import './App.css';
import Form from "./components/form/Form";
import Users from "./components/users/Users";

class App extends React.Component {

  state = {
    trocarTela: true
  }

  cadastrar =() => {
    this.setState({trocarTela: true})
  }

  verLista =() =>{
    this.setState({trocarTela: false})
  }

  render(){
    let pagina
    if(this.state.trocarTela) {
      pagina = <Form onClickVerLista={this.verLista}/>
    }else {
      pagina =<Users onClickCadastrar={this.cadastrar}/>
    }
    return (
    <div className="App">
      {pagina}
    </div>
  );
  }

}

export default App;