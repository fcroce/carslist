# carslist

## Start the server (Node >= 16)
`npm run start`

## Docker
`docker run --rm -p 8080:8080 $(docker build -q --rm .)`

### NPM available scripts
* start
  * Starts the server
* stylelint
  * Run CSS code analysis
* npm run stylelint:fix
  * Run CSS code analysis and fix all issues
* npm run lint
  * Run code analysis
* npm run lint:fix
  * Run code analysis and fix all issues (including CSS)
* npm run test
  * Run Jest test suite
* npm run html-audit
  * Run NPM audit and show results in HTML format
* npm run checkupdates
  * Check for dependency updates