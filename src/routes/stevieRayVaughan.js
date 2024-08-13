import React, { useEffect } from 'react';
import { client } from '../index';
import { gql } from '@apollo/client';

// Apollo GraphQL Client Quick Start Guide: https://www.apollographql.com/docs/react/get-started
// I'm feeling lucky Google search URL format: http://www.google.com/search?q=yourQueryHere&btnI

export default function StevieRayVaughan() {
  useEffect(() => {
    client
      .query({
        query: gql`{
          queryArtists(byName:"Stevie Ray Vaughan") { 
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
      <h1>Stevie Ray Vaughan</h1>
    </div>
  );
}