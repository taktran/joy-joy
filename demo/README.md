# Joy Joy demo

A demo of the [Joy Joy library](../src/joy-joy).

This demo is deployed to https://taktran.github.io/joy-joy/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

- Install [nvm](https://github.com/creationix/nvm)
- Use correct node version

        nvm use

- Go to [library folder](../../src/joy-joy) and run instructions
- Install dependencies in this folder

        npm install

- Run with `npm start`. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  The page will reload if you make edits.<br>
  You will also see any lint errors in the console.

### Logging

Underneath the hood, the library uses [ulog](https://ulog.js.org/). To change the log level, add the parameter `log=[log-level]` eg, `http://localhost:3000/?log=debug`.

For logging `>= log.INFO`, there is also a [frames per second stats](https://github.com/tibotiber/react-fps-stats).

More documentation on the [ulog website](https://ulog.js.org/).

### Run tests

Run `npm test`

Launches the test runner in the interactive watch mode.

### Build the app

Run `npm run build`

Builds the app for production to the `build` folder.

## Deployment

To deploy the site to https://taktran.github.io/joy-joy/, run

    npm run deploy
