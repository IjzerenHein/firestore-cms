# Firestore CMS

A free, flexible and easy to use CMS for Google Firestore 🎉

This project is under development and not ready yet. This project primarily aims at providing an out of the box solution for managing your Firestore collections and documents.

## Installation

To install, add the package as a dev dependency:

`yarn add firestore-cms --dev`

## Setup

After that, initialize a default Firestore CMS configuration for your project.

`yarn firestore-cms init`

This will create a folder called `firestore-cms/` in your project
which contains the configuration files and generated output.

## Configuration

The configuration is stored in `firestore-cms/config.js`.
See [Configuration](/configuration) for all the setup options.

## Test & build

To test and debug, you can run a reloading dev server using:

`yarn firestore-cms start`

And use the following command to build a production build:

`yarn firestore-cms build`

This will generate a static website in `/firestore-cms/build`.

## License

[MIT](./LICENSE.txt)
