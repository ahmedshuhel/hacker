import program from 'commander';
import bundler from './commands/bundler';

class Aurelia {
  constructor() {
    this.commands = [];
    this.name = 'Aurelia CLI tool';
    this.config= {};
    bundler(program, this);
  }

  bundle(config) {
    this.config['bundle'] = config;
  }

  run(argv){
    program.parse(argv);
  }
}

export var inst = new Aurelia();
