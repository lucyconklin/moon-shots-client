# Moon Shots Client

This is a client application for the [Moon Shots API](https://github.com/lucyconklin/moon_shots_api).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Getting started

`npm start`

navigate to [localhost:3000](http://localhost:3000) in your browser to see it in action.

## 5 Hour Progress Report
At 5 hours I had the API built with a JSON importer and seed data creator. I really wanted to tackle a graphql API and I'm glad I did. I went ahead and avoided using resolvers because I had very recently worked on a bunch of filtering and I knew I could knock that out.

The front end was live and fetching data, but my tables were not displaying it quite right.

After 5 hours I spent the bulk of the time styling and getting the filter and sort to work.

## Improvements
1. De-orbiting and Detonating the satellites could use a little jazz. Right now they just spit out console messages.

2. Refactor the components, and make the table row reusable.

3. My initial intent was to leverage styled-components to style de-orbited and detonated satellites, and I would still like to do that.

4. Filtering on the front end. I let Rails do all the heavy lifting there, but since we have all the data already, why not filter it on the front end?

5. I had a plan for the style coming into the challenge, but it could certainly use some more work.

6. Tests? LOL
