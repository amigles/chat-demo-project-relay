import {
  graphql,
  requestSubscription
} from 'react-relay'
import environment from '../Environment'
import {ConnectionHandler} from 'relay-runtime';

const editMessageSubscription = graphql`
  subscription EditMessageSubscription {
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
    subscription: editMessageSubscription,
    variables: {},
    updater: proxyStore => {
      const editMessageField = proxyStore.getRootField('Message')
      const editMessage = editMessageField.getLinkedRecord('node')
        const previousValues = editMessageField.getLinkedRecord('previousValues')

          console.log('-------------edit----------------');



        if(previousValues == null){
          console.log('returen from edit ' );
          return;
        }
      if(editMessage == undefined){
        return;
      }
      const messageId = editMessage.getValue('id');


     const viewer = proxyStore.getRoot().getLinkedRecord('viewer');


     const messages =
        ConnectionHandler.getConnection(viewer, 'MessageList_allMessages');
         console.log(messages);
         const edge = ConnectionHandler.createEdge(
        proxyStore,
        messages,
        editMessage,
        'MessageEdge',
      );


    //    ConnectionHandler.insertEdgeBefore(messages, edge);

    },
    onError: error => console.log(`An error occured:`, error)
  }

  requestSubscription(
    environment,
    subscriptionConfig
  )

}
