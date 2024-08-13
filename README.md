# KGQL: GraphQL Radio

Simple Example App for learning GraphQL by Chris Pedersen. Essentially a fun hello, world app which uses Robert Hostlowsky's spotify-graphql-server to give Spotify's API a GraphQL wrapper we can use for learning and experimenting with GraphQL on the frontend.

## Quick Start

### Setting up Spotify GraphQL Server to Run on Your Local Machine

Install yarn if you have not already installed it on your machine:

`brew install yarn`

Clone the Spotify GraphQL Server repo:

`git clone https://github.com/lowsky/spotify-graphql-server`

`cd spotify-graphql-server`

#### prerequisites

For running this example locally, you must 
[register your own application at spotify](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/).

Then open the .env.example file, and replace the placeholder client id and client secrect with the real client id and secret from Spotify for your newly registered Spotify app. Rename the file from .env.example to .env.

Have a modern `node.js` version ( >=14 ) installed.

Run `yarn install`. 

#### run server

`yarn start` to start the graphql server, then open http://localhost:4000/

`yarn watch` to start the graphql server which automatically restarts when any sources were changed (driven by `nodemon`)

#### run tests

`yarn test`

#### print GraphQL schema idl

`yarn run printSchema`

### Step Two

Step two here...

### Start React App

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

