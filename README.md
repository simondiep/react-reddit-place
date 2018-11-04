# React Reddit Place

React based implementation of Reddit Place.

![demo preview](./preview.gif?raw=true)

## How to Start

`npm i && npm start`

## External Storage

This app leverages an external store (webtask.io) for storing the drawing. To set up your own external store:

Create a new webtask at https://webtask.io/make
Copy/paste the code in webtask_drawing.js into your webtask.
Save
Grab the public URL for your webtask at the bottom of the webtask editor
Replace the value of STORAGE_URL inside Constants.js

## To deploy to Github pages

Update the field `homepage` in your package.json to the URL you want to host at.

`npm run deploy`

This leverages the npm module gh-pages to deploy to your repo, but under the gh-pages branch.
