import React from "react";
import "./App.css"
import MensagemForm from "./components/MessageForm"
 
class App extends React.Component {
  render() {
    
    return (
      <div>{<MensagemForm />}</div>
    );
  }

}

export default App;