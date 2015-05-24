#!/usr/bin/env node

var Liftoff = require('liftoff');
var argv = require('minimist')(process.argv.slice(2));
var logger = require('winston');

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
  logger.info('Requiring external module: %s', name);
});

require("babel/register");

cli.launch({
  cwd: argv.cwd,
  configPath: argv.Aureliafile,
  require: argv.require
}, handleCommands);


function handleCommands(env) {
  var aurelia;
  console.log(env);

  if (process.cwd() !== env.cwd) {
    process.chdir(env.cwd);
    logger.info('Working directory changed to: %s', env.cwd);
  }

  if (!env.configPath) {
    logger.log('warn', 'Aureliafile not found');
  } else {
    require(env.configPath);
    logger.info('Using Aureliafile: %s', env.configPath);
  }

  if (!env.modulePath) {
    logger.log('warn', 'Local aurelia installation not found');
    logger.log('warn', 'Using global installation');
    aurelia = require('./index');
  } else {
    aurelia = require(env.modulePath);
  }

  process.nextTick(function() {
    aurelia.logger = logger;
    aurelia.run(process.argv);
  });
}
