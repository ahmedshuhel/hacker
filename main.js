#!/usr/bin/env node

const Liftoff = require('liftoff');

require("babel/register");

const app = new Liftoff({
  name: 'aurelia',
  configName: 'Aureliafile'
});

app.launch({ }, function(env) {
  console.log('my environment is:', env);
  console.log('my liftoff config is:', this);
  require('./src/cli');
});
