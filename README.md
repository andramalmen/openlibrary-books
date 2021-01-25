# Search for books

Demo: https://openlibrary.andra.dev/

# Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Minimum [Node v10](https://nodejs.org/en/)
Minimum [NPM v6](https://www.npmjs.com/get-npm)

## Start development

To start the app in development watch mode, run one the following command:

``
    npm run dev
``

To build the project for production and run it, run one the following commands:

```
    npm run build
    npm start
```

## Linting and formatting

The project is using [Eslint](https://eslint.org) and [Prettier](https://prettier.io/) for code formatting.

To check if the project has any linting issues, run the following command:

``
    npm run lint
``

To check if the project has any formatting issues, run the following command:

``
    npm run format:check
``

To format all code, run the following command:

``
    npm run format
``

To run a type checking, run the following command:

``
    npm run types:check
``

To validate that the changes are ready for deployment, run:

``
    npm run validate
``