// 1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Environment'

// 2
const mutation = graphql`
  mutation DeleteMessageMutation($input: DeleteMessageInput!) {
    deleteMessage(input: $input) {
       deletedId
    }
  }
`

// 3
export default (id, callback) => {
  // 4
  const variables = {
    input: {
      id,
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
