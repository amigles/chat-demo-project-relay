import React, { Component } from 'react'
import CreateMessageMutation from '../mutations/CreateMessageMutation'

class CreateMessage extends Component {

  state = {
    text: ''
  }

  render() {

    return (
      <div>
        <div >
          <input
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
              onKeyUp={this.addMessage}
            type='text'
            className='textarea'
            placeholder='Type a message here'
          />

        </div>
  {/*  <div
          className='button'
          onClick={() => this._createMessage()}
        >
          submit
        </div>*/}
      </div>
    )

  }

  _createMessage = () => {
  const { text } = this.state
  CreateMessageMutation(text, () => console.log(`Mutation completed`))
  }

  addMessage = (event) => {
    console.log(event.keyCode);
         if(event.keyCode == 13){
            this._createMessage();
          this.setState({ text: ''});
         }
     }

}

export default CreateMessage
