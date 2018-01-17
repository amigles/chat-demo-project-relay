import React, { Component } from 'react'
import DeleteMessageMutation from '../mutations/DeleteMessageMutation'

class DeleteMessage extends Component {



  render() {

    return (
      <img src="../images/delete.png"
            className='delete'
          onClick={() => this._deleteMessage( this.props.message.id)}
          />

    )

  }

  _deleteMessage = (id) => {

  console.log(id);
  DeleteMessageMutation(id, () => console.log(`Mutation deletion completed`))
  }



}

export default DeleteMessage
