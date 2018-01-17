import {
  graphql,
  requestSubscription
} from 'react-relay'
import environment from '../Environment'
import {ConnectionHandler} from 'relay-runtime';

const newMessageSubscription = graphql`
  subscription NewMessageSubscription {
    # 1
    Message {
      # 2
      node {
        id
        text
        createdAt
        postedBy {
          id
        }

      }
      previousValues{id}

    }
  }
`

// 3
export default () => {

  const subscriptionConfig = {
    subscription: newMessageSubscription,
    variables: {},
    updater: proxyStore => {
      const createMessageField = proxyStore.getRootField('Message')
      const newMessage = createMessageField.getLinkedRecord('node')
      const previousValues = createMessageField.getLinkedRecord('previousValues')
      const node = createMessageField.getLinkedRecord('node')
        console.log('-------------new----------------');



      console.log('previousValues ' + previousValues);
        console.log('node ' + node);

        const viewer = proxyStore.getRoot().getLinkedRecord('viewer');
        const messages =
           ConnectionHandler.getConnection(viewer, 'MessageList_allMessages');

      if(node == null){
        const messageId = previousValues.getValue('id');

        ConnectionHandler.deleteNode(messages,messageId);

          return;
      }
      if(previousValues == null){
        const edge = ConnectionHandler.createEdge(
       proxyStore,
       messages,
       newMessage,
       'MessageEdge',
     );
          ConnectionHandler.insertEdgeAfter(messages, edge);
      }




    },
    onError: error => console.log(`An error occured:`, error)
  }

  requestSubscription(
    environment,
    subscriptionConfig
  )

}
