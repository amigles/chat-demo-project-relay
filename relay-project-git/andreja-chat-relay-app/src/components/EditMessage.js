import React, { Component } from 'react'
import EditMessageMutation from '../mutations/EditMessageMutation'

class EditMessage extends Component {



  render() {

    return (
      <div>

    <div
          className='button'
          onClick={() => this._editMessage( this.props.message.id,this.props.message.text)}
        >
        Edit
        </div>
      </div>
    )

  }

  _editMessage = (id, text) => {

  console.log(id);
  console.log(text);
  EditMessageMutation(id,text, () => console.log(`Mutation edited completed`))
  }



}

export default EditMessage
