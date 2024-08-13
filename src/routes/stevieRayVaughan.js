import React, { useEffect } from 'react';
import { client } from '../index';
import { gql } from '@apollo/client';

// Apollo GraphQL Client Quick Start Guide: https://www.apollographql.com/docs/react/get-started
// I'm feeling lucky Google search URL format: http://www.google.com/search?q=yourQueryHere&btnI

export default function StevieRayVaughan() {
  function doStuff() {
    // {
    //   "data": {
    //     "queryArtists": [
    //       {
    //         "__typename": "Artist",
    //         "albums": [
    //           {
    //             "__typename": "Album",
    //             "name": "The Essential Stevie Ray Vaughan And Double Trouble",
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
        const firstAlbumOrTrackName = result.data.queryArtists[0].albums[0].name;
        alert(`firstAlbumOrTrackName: ${firstAlbumOrTrackName}`);
      });
  }

  useEffect(() => {
    doStuff();
  }, []);

  return (
    <div>
      <h1>Stevie Ray Vaughan</h1>
    </div>
  );
}