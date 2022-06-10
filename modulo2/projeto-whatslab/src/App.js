import React from 'react';
import './App.css';
import { MessageForm } from './components/MessageForm';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  render() {
    return (
      <div className='AppContainer'>
        <div className='MessagesContainer'>
          {
            this.state.messages.map((message, index) => <p key={index}><span className='BoldText'>{message.user}</span>{': ' + message.text}</p>)
          }
        </div>
        <div addMessage={this.addMessage} />
        {<MessageForm />}
      </div>
    );
  }
}

export default App;
