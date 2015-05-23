export default function registerCommand(program, aurelia) {
  program.command('bundle')
    .alias('b')
    .description('Create a new bundle based on the configuration in Aureliafile.js')
    .option('-a --add <path>', "Add system.js path to files or file to bundle")
    .option('-r --remove <remove_path>', 'Remove file path or file from bundle')
    .option('-l, --list', 'List paths and files included in bundle')
    .action(function(options) {
      console.log(options);
      console.log(aurelia.config);
    });
}
