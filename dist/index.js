"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const fs_1 = __importDefault(require("fs"));
const program = new commander_1.Command();
//name of program
console.log(figlet_1.default.textSync('Sammmmy Sam Sam'));
program
    .version('0.0.1')
    .description('a program to do some s**t');
program
    .command('makeDirectory')
    .argument('name', 'name of directory to create')
    .description('Create a directory with provided name')
    .alias('m')
    .action((name) => { fs_1.default.mkdirSync(name); });
program
    .parse(process.argv);
//# sourceMappingURL=index.js.map