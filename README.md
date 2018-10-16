# Mobiquity Ionic Angular Builder

This is an update to the current Ionic builders that uses [`@angular-builders/custom-webpack`](https://www.npmjs.com/package/@angular-builders/custom-webpack)
to allow for custom wepback specification to customize builds while still using
Ionic's set build process.

This does minimal changes to the builders. Its only purpose is to allow you to
have a `webpack.config.js` in the root directory of your project to be merged
with Angular/Ionic's base webpack configuration to allow for some custom building.

Currently this doesn't support any additional options and just assumes to use
the defaults which are to append the merged configuration specified in
`webpack.config.js`.
