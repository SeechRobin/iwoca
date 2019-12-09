# Iwoca - Calculators

## Overview

I completed the project in about 5hrs, i've listed my approach and the structure below. 
The webapp is deployed on [https://iwoca-calculators.netlify.com/](Netlify)

## Approach

I used Semantic UI to speed up my development and not reinvent the wheel. I utelised the `GRID` and `Table` components.
I used a modular approach and re-used some of the functionality between the calculators. As part of the skeleton i also have routing and a `PageTemplate` for rendering the pages.


## Setup

### Dependencies

The main dependencies are listed below.

* [React](https://reactjs.org/) as web framework
* [Jest](https://facebook.github.io/jest/) for testing
* [React-Testing-Library](https://github.com/testing-library/react-testing-library) for testing
* [Semantic-UI](https://react.semantic-ui.com/) design system


I used [yarn](https://yarnpkg.com/lang/en/docs/install/) to manage dependencies and we run node 8.9.x.

## Commands

* `yarn install` - install all dependencies
* `yarn build` - build the code
* `yarn start` - start a developer web server
* `yarn test` - run all unit tests

## Improvements

* More tests
* More validations
* More styling
* Show user why the selected loan is not allowed


