import program from 'commander';
import glob from 'glob';
import Command from './commands/bundler';

class Aurelia {
  constructor() {
    this.commands = new Map();
    this.name = 'Aurelia CLI tool';
    this.config = {};
    this.logger = {};
    this._initializeBuiltInCommands(); 
  }

  command(...args) {
    if (typeof args[0] === 'string') {
      let commandId = args[0];
      let config = args[1];
      this.commands[commandId].commandConfig = config;
      console.log('sdfsdf');
      return;
    }

    if (typeof args[0] === 'function') {
      let Cmd = args[0];
      let c = new Cmd(program, this.config, this.logger);
      this.commands[c.commandId()] = c;
      return;
    }
  }

  _initializeBuiltInCommands() {
    console.log(Command);

    let cmd = new Command(program, this.config, this.logger);
    this.commands[cmd.commandId] = cmd;
  }

  run(argv) {
    console.log('sdfsdf');
    program.parse(argv);
  }
}

var inst = new Aurelia();

export default inst;
