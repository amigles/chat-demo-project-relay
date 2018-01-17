// 1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Environment'

// 2
const mutation = graphql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      message {      
        text
      }
    }
  }
`

// 3
export default (text, callback) => {
  // 4
  const variables = {
    input: {
      text,
      clientMutationId: ""
    },
  }

  // 5
  commitMutation(
    environment,
    {
      mutation,
      variables,
      // 6
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
