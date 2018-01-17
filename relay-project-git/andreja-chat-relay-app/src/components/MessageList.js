import React, { Component } from 'react'
import Message from './Message'
import NewMessageSubscription from '../subscriptions/NewMessageSubscription'
import DeleteMessageSubscription from '../subscriptions/DeleteMessageSubscription'
import EditMessageSubscription from '../subscriptions/EditMessageSubscription'


import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class MessageList extends Component {

  componentDidMount() {
  NewMessageSubscription()
  /*DeleteMessageSubscription()
  EditMessageSubscription()*/
  }

  render() {
  return (
    <ol className="chatList">
      {this.props.viewer.allMessages.edges.map(({node}) =>
          <Message key={node.__id} message={node} />
      )}
    </ol>
  )
}

}

export default createFragmentContainer(MessageList, graphql`
  fragment MessageList_viewer on Viewer {
    allMessages(last: 100, orderBy: createdAt_ASC) @connection(key: "MessageList_allMessages", filters: []) {
      edges {
        node {
          ...Message_message
        }
      }
    }
  }
`)
