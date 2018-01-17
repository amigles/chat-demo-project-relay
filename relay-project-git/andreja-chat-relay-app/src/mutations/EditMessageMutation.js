// 1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Environment'

// 2
const mutation = graphql`
  mutation EditMessageMutation($input: UpdateMessageInput!) {
    updateMessage(input: $input) {
      message {
        id,
        text
      }
    }
  }
`

// 3
export default (id, text, callback) => {
  // 4
  const variables = {
    input: {
      id,
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
