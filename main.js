#!/usr/bin/env node

var Liftoff = require('liftoff');
var argv = require('minimist')(process.argv.slice(2));

process.env.INIT_CWD = process.cwd();

const cli = new Liftoff({
  name: 'hacker',
  configName: 'Aureliafile'
});


var failed = false;
process.once('exit', function(code) {
  if (code === 0 && failed) {
    process.exit(1);
  }
});

var cliPackage = require('./package');
var versionFlag = argv.v || argv.version;

cli.on('require', function(name) {
  console.log('Requiring extrnal module');
});


cli.launch({
  cwd: argv.cwd,
  configPath: argv.gulpfile,
  require: argv.require
}, handleCommands);


function handleCommands(env) {
  if (process.cwd() !== env.cwd) {
    process.chdir(env.cwd);
    console.log('working directory changed to ' + env.cwd);
  }

  if (!env.modulePath) {
    console.log('Local aurelia not found in')
    process.exit(1);
  }

  require("babel/register");

  require(env.configPath);

  console.log('using aureliafile ' + env.configPath);

  var aurelia = require(env.modulePath).inst;

  process.nextTick(function() {
    aurelia.run(process.argv);
  });

}
