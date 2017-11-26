![North by Northwestern](http://media.northbynorthwestern.com.s3.amazonaws.com/media/img/nbn_logo.svg)

# generator-nbnteractive [![npm](https://img.shields.io/npm/v/generator-politico-interactives.svg)](https://www.npmjs.com/package/generator-politico-interactives)

A [Yeoman](http://yeoman.io) generator to scaffold a development environment for building NBN interactive pieces. Heavily inspired by POLITICO.

See the docs on [readthedocs](http://generator-politico-interactives.readthedocs.io/en/latest/).

## How to use
- Clone this repository onto your machine
- Inside the directory,
`npm link`
`yo nbnteractive`
- Do the thing!

To input story content, use `aml-gdoc-server` to generate JSON from story content formatted with ArchieML. Paste JSON into `src/data/data.json`. Open `src/templates/index.html`; to access any data, type `{{DATA.<key>}}`.
