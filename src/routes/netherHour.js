import React, { useEffect } from 'react';
import { client } from '../index';
import { gql } from '@apollo/client';

// Apollo GraphQL Client Quick Start Guide: https://www.apollographql.com/docs/react/get-started
// Blog Post on the Spotify GraphQL Server: https://www.codecentric.de/wissens-hub/blog/lets-build-spotify-graphql-server

export default function NetherHour() {
  useEffect(() => {
    client
      .query({
        query: gql`{
          queryArtists(byName:"Nether Hour") { 
            albums {
              name
              tracks {
                name
                artists { name }
              }
            }
          }
          }`,
      })
      .then((result) => { 
        alert(JSON.stringify(result, null, 2));
        console.log(JSON.stringify(result, null, 2));
      });
  }, []);

  return (
    <div>
      <h1>Nether Hour</h1>
    </div>
  );
}