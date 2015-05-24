import program from 'commander';
import bundler from './commands/bundler';

class Aurelia {
  constructor() {
    this.commands = new Map();

    this.name = 'Aurelia CLI tool';
    this.config= {};

    initializeBuiltInCommands(); 
  }

  command(...args){

    let command;
    let commandName = args[0];

    if(typeof args[1] === 'function'){
      command = args[1];
    }

  }

  initializeBuiltInCommands(){
    var bundle = new Bundler(program, this.config);
    this.commands.add(bundle.name, bundle);
  }

  run(argv){
    initializeLocalCommands();
    program.parse(argv);
  }
}

var inst = new Aurelia();

export default inst;
