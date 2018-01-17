import React, { Component } from 'react'


import { IntlProvider, FormattedDate } from 'react-intl';



import {
  createFragmentContainer,
  graphql
} from 'react-relay'

import DeleteMessage from './DeleteMessage'
import EditMessage from './EditMessage'
import EditMessageMutation from '../mutations/EditMessageMutation'


class Message extends Component {

  state = {
    text: ''
  }



  render() {
    return (
      <li className="chatItem">
        <div class="avatar">
        <img  src="../images/andreja-avatar.png" />
      </div>
        <div className="message_container">

          <div   contentEditable
            onBlur={(e) => this._editMessage( e,this.props.message.id)}>{this.props.message.text}</div>
            <DeleteMessage key={this.props.message.id} message={this.props.message} />
             <IntlProvider>
               <div className="time">
            <FormattedDate
              value={this.props.message.createdAt}
              day="numeric"
              month="long"
              year="numeric"
              hour="numeric"
              minute="numeric"/>
            </div>
            </IntlProvider>


            </div>


      </li>

    )
  }

  _editMessage = (e,id) => {

  EditMessageMutation(id,e.target.innerHTML, () => console.log(`Mutation edited completed`))


  }



}

export default createFragmentContainer(Message, graphql`
  fragment Message_message on Message {
    id
    text
    createdAt
  }
`)
