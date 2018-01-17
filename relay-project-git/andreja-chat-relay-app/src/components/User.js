import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment'

class User extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query UserQuery($username: String!) {
            viewer {
              User(username: $username) {
                id
                fullname
              }
            }
          }
        `}
        variables={{
          username: "amigles",
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <div className="title">{props.viewer.User.fullname}</div>;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}


export default User
