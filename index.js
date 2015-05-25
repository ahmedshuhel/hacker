var aurelia, DEV_ENV = parseInt(process.env.AURELIA_CLI_DEV_ENV, 10);

if (DEV_ENV) {
  aurelia = require('./src');
  console.log('Proudly from src: ' + DEV_ENV);
} else {
  aurelia = require('./dist');
  console.log('Proudly from dist');
}

module.exports = aurelia;
