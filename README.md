# Consultant Feedback Form

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run start-mock-server`

Runs the json-server on port 3456.
Mock server is acessible on [http://localhost:3456](http://localhost:3456).

### `npm run start:db`

Runs the app in the development mode also run the json-server on port 3456.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Mock server is acessible on [http://localhost:3456](http://localhost:3456).

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:ci`

Launches the test runner and collects coverage information separately for each test.

### `npm run test:update`

Updates all snapshots for tests.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Configuring API URL
You can configure your API URL during start or build process.

```bash
REACT_APP_API_URL=$YOUR_API_URL npm start
or
REACT_APP_API_URL=$YOUR_API_URL npm run build
```

API URL is set to `http://localhost:3456` by default. You can change that address by providing proper value of `REACT_APP_API_URL` env variable

## Deploy on AWS

You can simply use aws-cli to deploy App. Just run above command in the project directory (after succesfull build):

`aws s3 sync build/ s3://NAME-OF-YOUR-BUCKET`
