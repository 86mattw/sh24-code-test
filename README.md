# SH:24 Code Test

#### Overview

The app is built using React and Gatsby. Styling has been done
with SASS and uses CSS Modules to apply scoped styles to the 
components. A combination of the useReducer and useContext hooks
have been used to control the state of the app. 

#### Running the app

Clone the repo and run the following commands to launch the app.

```
npm install
npm start
```

You can now visit http://localhost:8000 to view the app.

#### Linting

The code is linted with eslint using the airbnb preset.
Run the following command to lint the files.

```
npm run lint
```

#### Unit testing

The code is unit tested using Jest and Enzyme. Run the unit tests
with the following command.

```
npm run test
```

#### End-to-end testing

The user journey through the app is tested using Cypress.
Run the following command to run Cypress in interactive mode.

```
npm run test:e2e
```

From the Cypress dashboard you can then select the user-journey spec to 
run the tests.

Alternatively, you can run the e2e tests from the terminal using the CI version
of the command

```
npm run test:e2e:ci
```

This will output the result of the test run to the terminal.

