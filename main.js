#!/usr/bin/env node

'use strict';

var path = require('path');
var System = require('systemjs');
var config = require('./config.js');

System.config({
 baseURL: 'file:' + path.resolve(__dirname, './')
});

System.import('src/cli');
