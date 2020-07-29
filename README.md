# Cartridge Lib lodash

[![Version](https://img.shields.io/npm/v/cartridge_lib_lodash.svg)](https://npmjs.org/package/cartridge_lib_lodash)
[![Build Status](https://travis-ci.com/pikamachu/pika-cartridge-lib-lodash.svg?branch=master)](https://travis-ci.com/pikamachu/pika-cartridge-lib-lodash)
[![codecov](https://codecov.io/gh/pikamachu/pika-cartridge-lib-lodash/branch/master/graph/badge.svg)](https://codecov.io/gh/pikamachu/pika-cartridge-lib-lodash)

## Introduction

Cartridge library from [lodash](https://www.npmjs.com/package/lodash) npm node module version 3.10.1

## Build with

* [lodash](https://www.npmjs.com/package/lodash)

## Installation

### As standard SFCC cartridge

This library can be installed as a standard SFRA cartridge cloning the repository and running npm script uploadCartridge

````
$ git clone git@github.com:pikamachu/pika-cartridge-lib-lodash.git
$ cd pika-cartridge-lib-lodash
$ npm run uploadCartridge
````

### As npm library dependency on SFRA project

This library can be added to an existing SFRA project using

````
$ npm i cartridge_lib_lodash
````

This option is recommended for develop environments using [vscode](https://code.visualstudio.com/) + [Prophet Debugger](https://marketplace.visualstudio.com/items?itemName=SqrTT.prophet)

The Prophet Debugger Extension should be set with this configuration on user settings.json
````
"extension.prophet.upload.enabled": true,
"extension.prophet.ignore.list": ["\\.git", "\\.zip$"],
````

## Usage

This cartridge library is a babel transpilation to ES5 with some minor changes in order to be usable as a standard SFRA cartridge.

Lodash modules can be loaded using require cartridge as a standard SFRA script.

````
// lodash modules can be loaded separately using
var _array = require('*/cartridge/scripts/lib/lodash/array');
var _chain = require('*/cartridge/scripts/lib/lodash/chain');
var _collection = require('*/cartridge/scripts/lib/lodash/collection');
var _date = require('*/cartridge/scripts/lib/lodash/date');
var _function = require('*/cartridge/scripts/lib/lodash/function');
var _lang = require('*/cartridge/scripts/lib/lodash/lang');
var _math = require('*/cartridge/scripts/lib/lodash/math');
var _number = require('*/cartridge/scripts/lib/lodash/number');
var _object = require('*/cartridge/scripts/lib/lodash/object');
var _string = require('*/cartridge/scripts/lib/lodash/string');
var _support = require('*/cartridge/scripts/lib/lodash/support');
var _utility = require('*/cartridge/scripts/lib/lodash/utility');
````

See [lodash docs](https://lodash.com/docs/3.10.1) documentation for module usage.
