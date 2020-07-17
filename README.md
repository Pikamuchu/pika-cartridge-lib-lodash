# Cartridge Lib lodash

[![Version](https://img.shields.io/npm/v/cartridge_lib_lodash.svg)](https://npmjs.org/package/cartridge_lib_lodash)
[![Build Status](https://img.shields.io/travis/pikamachu/pika-cartridge-lib-lodash/master.svg)](https://travis-ci.com/pikamachu/pika-cartridge-lib-lodash)
[![codecov](https://codecov.io/gh/pikamachu/pika-cartridge-lib-lodash/branch/master/graph/badge.svg)](https://codecov.io/gh/pikamachu/pika-cartridge-lib-lodash)

## Introduction

Cartridge library from [lodash](https://www.npmjs.com/package/lodash) npm node module

## Build with

* [lodash](https://www.npmjs.com/package/lodash)

## Installation

This library can be installed as a standard SFRA cartridge cloning the repository and running npm script uploadCartridge

````
git clone git@github.com:pikamachu/pika-cartridge-lib-lodash.git
cd pika-cartridge-lib-lodash
npm run uploadCartridge
````

Or can be added as a node module dependency to an existing SFRA cartridges project using

````
npm i cartridge_lib_lodash
````

## Usage

This cartridge library is a babel transpilation to ES5 with some minor changes in order to be usable as a standard SFRA cartridge.

The main lodash module can be loaded using as a standard SFRA script using

````
var _ = require('*/cartridge/scripts/lib/lodash/index');
````

See [lodash](https://www.npmjs.com/package/lodash) documentation for module usage.
