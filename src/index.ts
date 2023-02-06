import { Command } from 'commander';
import figlet from 'figlet';
import fs from 'fs';

const program = new Command();

//name of program
console.log(figlet.textSync('Sammmmy Sam Sam'));
program
    .version('0.0.1')
    .description('a program to do some s**t');


program
    .command('makeDirectory')
    .argument('name', 'name of directory to create')
    .description('Create a directory with provided name')
    .alias('m')
    .action((name: string)=>{fs.mkdirSync(name)})

program
    .parse(process.argv);

