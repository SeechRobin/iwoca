# Iwoca - Calculators

## Overview

I completed the project in about 4hrs, I've listed my approach and the structure below. 
The webapp is deployed on [Netlify](https://iwoca-calculators.netlify.com/)

## Approach

I went for a modular, functional, and easily testable approach with good separation of concerns.

I used Semantic UI to speed up my development and not reinvent the wheel. I utilized the `GRID` and `Table` components.
I used a modular approach and reused some of the functionality between the calculators. As part of the skeleton, I also have routing and a `PageTemplate` for rendering the pages. I just treated it as an app going into production.

I have also passed the product rules from the endpoint, and the calculators behave within bounds of those rules.
I tested the core business logic, which the `loanCalculator` module with a calculation function. I also added vital tests on the `LoanTable`, which shows the customer the number of payments they have to make.

The Payment dates are starting from the day the user inputs the data; this is the assumption I used as there was no specification in the requirements. But that can easily be configured.


## Setup

### Dependencies

The main dependencies are listed below.

* [React](https://reactjs.org/) as web framework
* [Jest](https://facebook.github.io/jest/) for testing
* [React-Testing-Library](https://github.com/testing-library/react-testing-library) for testing
* [Semantic-UI](https://react.semantic-ui.com/) design system


I used [yarn](https://yarnpkg.com/lang/en/docs/install/) to manage dependencies.

## Commands

* `yarn install` - install all dependencies
* `yarn build` - build the code
* `yarn start` - start a developer web server
* `yarn test` - run all unit tests

## Improvements

* More tests
* More validations
* More styling
* Show user why the selected loan is not allowed.
* Remove some reused code for the calculator.


