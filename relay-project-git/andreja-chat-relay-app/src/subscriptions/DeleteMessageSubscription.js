import {
  graphql,
  requestSubscription
} from 'react-relay'
import environment from '../Environment'
import {ConnectionHandler} from 'relay-runtime';

const deleteMessageSubscription = graphql`
  subscription DeleteMessageSubscription {
    # 1
    Message {
      # 2
      node {
        id
        text
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
    subscription: deleteMessageSubscription,
    variables: {},
    updater: proxyStore => {
      console.log('-------------delete----------------');
      const createMessageField = proxyStore.getRootField('Message')
      const previousValues = createMessageField.getLinkedRecord('previousValues')
      const node = createMessageField.getLinkedRecord('node')
        console.log('previousValues ' + previousValues);
          console.log('node ' + node);
      if(previousValues == undefined){
        return;
      }
      const messageId = previousValues.getValue('id');


     const viewer = proxyStore.getRoot().getLinkedRecord('viewer');


     const messages =
        ConnectionHandler.getConnection(viewer, 'MessageList_allMessages');

        ConnectionHandler.deleteNode(messages,messageId);

    },
    onError: error => console.log(`An error occured:`, error)
  }

  requestSubscription(
    environment,
    subscriptionConfig
  )

}
