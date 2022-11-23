#!/usr/bin/env node
import { findQuest } from './src/findQuest.js';
import {
  FIND_HELP_MESSAGE, 
  MAIN_HELP_MESSAGE, 
  TEST_HELP_MESSAGE, 
  SUBMIT_HELP_MESSAGE, 
  UPDATE_HELP_MESSAGE,
  TITLE, 
  WRONG_DIRECTORY_MESSAGE 
} from './src/utils/messages.js';
import { runTests } from './src/runTests.js';
import { mainPath } from './src/utils/navigation.js';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { runSolution } from './src/runSolution.js';
import { submitQuest } from './src/submitQuest.js';
import { updateQuestplay } from './src/updateQuestplay.js';

const commands = process.argv.slice(2);

if (!process.cwd().startsWith(mainPath())) {
  console.log(TITLE);
  console.log(WRONG_DIRECTORY_MESSAGE);
  process.exit(1);
}

if (commands.length == 0) {
  console.log(TITLE);
  console.log(MAIN_HELP_MESSAGE);
  process.exit(0);
}

switch (commands[0]) {

  case '--help':
    console.log(MAIN_HELP_MESSAGE);
    break;

  case 'test':

    if (commands.includes("--help")) {
      console.log(TEST_HELP_MESSAGE);
      process.exit(0);
    }
    const partIndex = commands[1];

    if ((partIndex != undefined && !Number.isInteger(Number(partIndex)))
        || commands.length > 3) {
      console.log(chalk.red("\nERROR: Unrecognized parameter(s)"));
      console.log(TEST_HELP_MESSAGE);
      process.exit(1);
    }

    await runTests(commands[1]);
    break;

  case 'find':

    if (commands.includes("--help")) {
      console.log(FIND_HELP_MESSAGE);
      process.exit(0);
    }

    if (commands.length > 2) {
      console.log(chalk.red("\nERROR: Unrecognized parameter(s)"));
      console.log(FIND_HELP_MESSAGE);
      process.exit(1);
    }

    let searchQuery;
    if (commands.length < 2) {
      const answers = await inquirer.prompt({
        name: 'query',
        type: 'input',
        message: 'Find a quest:'
      });

      searchQuery = answers.query.toLowerCase().trim().replace(" ", "-");
    } else {
      searchQuery = commands[1];
    }

    findQuest(searchQuery);

    break;

  case 'solution':
    runSolution();
    break;
    
  case 'submit':
    
    if (commands.includes("--help")) {
      console.log(SUBMIT_HELP_MESSAGE);
      process.exit(0);
    }

    if (commands.length > 1 && commands[1] != "--set-upstream") {
      console.log(chalk.red("\nERROR: Unrecognized parameter(s)"));
      console.log(SUBMIT_HELP_MESSAGE);
      process.exit(1);
    }

    const isSetUpstream = (commands[1] == "--set-upstream");
    submitQuest(isSetUpstream);
    break;

  case 'update':

    if (commands.includes("--help")) {
      console.log(UPDATE_HELP_MESSAGE);
      process.exit(0);
    }

    if (commands.length > 1) {
      console.log(chalk.red("\nERROR: Unrecognized parameter(s)"));
      console.log(UPDATE_HELP_MESSAGE);
      process.exit(1);
    }
    
    updateQuestplay()
    break;

  default:
    console.log(chalk.red('\nERROR: Unrecognized command'));
    console.log(MAIN_HELP_MESSAGE);

    break;

}
