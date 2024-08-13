import React, { useEffect, useState } from 'react';
import { client } from '../index';
import { gql } from '@apollo/client';

// Apollo GraphQL Client Quick Start Guide: https://www.apollographql.com/docs/react/get-started
// I'm feeling lucky Google search URL format: http://www.google.com/search?q=yourQueryHere&btnI

export default function StevieRayVaughan() {
  const artistName = 'Stevie Ray Vaughan';
  const [albumAndTrackNames, setAlbumAndTrackNames] = useState([]);

  function initAlbumsAndTracks() {
    client
      .query({
        query: gql`{
          queryArtists(byName:"Stevie Ray Vaughan") { 
            name
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
        const artists = result.data.queryArtists;

        if (!result.data.queryArtists.length) {
          return;
        }

        const firstArtistResult = artists[0]
        setAlbumAndTrackNames(firstArtistResult.albums.map(albumOrTrack => albumOrTrack.name))
      });
  }

  useEffect(() => {
    initAlbumsAndTracks();
  }, []);

  function onClickAlbumOrTrackName(albumOrTrackName) {
    const searchQuery = encodeURIComponent(`artistName ${albumOrTrackName} YouTube`);
    const imFeelingLuckyURL = `http://www.google.com/search?q=${searchQuery}&btnI`;
    window.location.href = imFeelingLuckyURL;
  }

  return (
    <div>
      <h1>Stevie Ray Vaughan</h1>
      {albumAndTrackNames.map((albumOrTrackName, index) => (
        <p 
          key={index}
          style={{color: 'blue' }}
          onClick={() => onClickAlbumOrTrackName(albumOrTrackName)}
        >
          {albumOrTrackName}
        </p>
      ))}
    </div>
  );
}