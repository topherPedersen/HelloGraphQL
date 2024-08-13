import React, { useEffect } from 'react';
import { client } from '../index';
import { gql } from '@apollo/client';

// Apollo GraphQL Client Quick Start Guide: https://www.apollographql.com/docs/react/get-started

export default function Bar() {
  useEffect(() => {
    client
      // TODO: Try and query spotify graphql client instead of the playground client from Apollo
      .query({
        query: gql`
          query GetLocations {
            locations {
              id
              name
              description
              photo
            }
          }
        `,
      })
      .then((result) => alert(JSON.stringify(result, null, 2)));
  }, []);

  return (
    <div>
      <h1>Bar Page</h1>
    </div>
  );
}