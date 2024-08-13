import React, { useEffect, useState } from 'react';
import { client } from '../index';
import { gql } from '@apollo/client';

// Apollo GraphQL Client Quick Start Guide: https://www.apollographql.com/docs/react/get-started
// Blog Post on the Spotify GraphQL Server: https://www.codecentric.de/wissens-hub/blog/lets-build-spotify-graphql-server

export default function NetherHour() {
  const artistName = 'Nether Hour';
  const [albumAndTrackNames, setAlbumAndTrackNames] = useState([]);

  function initAlbumsAndTracks() {
    client
      .query({
        query: gql`{
          queryArtists(byName:"Nether Hour") { 
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
    const searchQuery = encodeURIComponent(`${artistName} Music Video on YouTube for ${albumOrTrackName}`);
    const imFeelingLuckyURL = `http://www.google.com/search?q=${searchQuery}&btnI`;
    window.location.href = imFeelingLuckyURL;
  }

  return (
    <div>
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