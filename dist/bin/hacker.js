#!/usr/bin/env node


'use strict';

var iojs = require('is-iojs');
var engine = iojs ? 'io.js' : 'node.js';

console.log('Hello ' + engine);
