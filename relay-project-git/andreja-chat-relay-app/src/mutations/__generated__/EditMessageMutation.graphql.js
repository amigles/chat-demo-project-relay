/**
 * @flow
 * @relayHash 718a85ed4fdd7351842aa1fb90b8e296
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type EditMessageMutationVariables = {|
  input: {
    id: string;
    text?: ?string;
    postedById?: ?string;
    postedBy?: ?{
      fullname: string;
      username: string;
      messagesIds?: ?$ReadOnlyArray<string>;
      messages?: ?$ReadOnlyArray<{
        text: string;
      }>;
    };
    clientMutationId: string;
  };
|};
export type EditMessageMutationResponse = {|
  +updateMessage: ?{|
    +message: ?{|
      +id: string;
      +text: string;
    |};
  |};
|};
*/


/*
mutation EditMessageMutation(
  $input: UpdateMessageInput!
) {
  updateMessage(input: $input) {
    message {
      id
      text
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateMessageInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditMessageMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateMessageInput!"
          }
        ],
        "concreteType": "UpdateMessagePayload",
        "name": "updateMessage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "name": "message",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "text",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "EditMessageMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateMessageInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "EditMessageMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateMessageInput!"
          }
        ],
        "concreteType": "UpdateMessagePayload",
        "name": "updateMessage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "name": "message",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "text",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation EditMessageMutation(\n  $input: UpdateMessageInput!\n) {\n  updateMessage(input: $input) {\n    message {\n      id\n      text\n    }\n  }\n}\n"
};

module.exports = batch;
