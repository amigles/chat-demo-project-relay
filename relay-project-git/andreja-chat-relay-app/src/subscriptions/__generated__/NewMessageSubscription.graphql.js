/**
 * @flow
 * @relayHash 461edb7b611a02e8a6e4c46c420e09ed
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type NewMessageSubscriptionVariables = {| |};
export type NewMessageSubscriptionResponse = {|
  +Message: ?{|
    +node: ?{|
      +id: string;
      +text: string;
      +createdAt: any;
      +postedBy: ?{|
        +id: string;
      |};
    |};
    +previousValues: ?{|
      +id: string;
    |};
  |};
|};
*/


/*
subscription NewMessageSubscription {
  Message {
    node {
      id
      text
      createdAt
      postedBy {
        id
      }
    }
    previousValues {
      id
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewMessageSubscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "MessageSubscriptionPayload",
        "name": "Message",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "name": "node",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "createdAt",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "User",
                "name": "postedBy",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MessagePreviousValues",
            "name": "previousValues",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "NewMessageSubscription",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "NewMessageSubscription",
    "operation": "subscription",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "MessageSubscriptionPayload",
        "name": "Message",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "name": "node",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "createdAt",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "User",
                "name": "postedBy",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MessagePreviousValues",
            "name": "previousValues",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
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
  "text": "subscription NewMessageSubscription {\n  Message {\n    node {\n      id\n      text\n      createdAt\n      postedBy {\n        id\n      }\n    }\n    previousValues {\n      id\n    }\n  }\n}\n"
};

module.exports = batch;
