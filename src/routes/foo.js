import React, { useEffect } from 'react';
import { client } from '../index';
import { gql } from '@apollo/client';

export default function Foo() {
  useEffect(() => {
    client
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
      .then((result) => alert(result));
  }, []);

  return (
    <div>
      <h1>Foo Page</h1>
    </div>
  );
}