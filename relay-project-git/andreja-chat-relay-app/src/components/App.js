import React, { Component } from 'react'
import MessageListPage from './MessageListPage'
import CreateMessage from './CreateMessage'
import User from './User'

function ChatBox(props) {
  return (
    <div className="chatContainer">
      <div className="chatTop" >
        {props.top}
      </div>
      <div className="chatCenter">
        {props.center}
      </div>
      <div className="chatBottom">
        {props.bottom}
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <ChatBox
      top={
      <User />
      }
      center={
        <MessageListPage />
      }
      bottom={
        <CreateMessage />
      }
    />




    )
  }
}

export default App
