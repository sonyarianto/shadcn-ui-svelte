#!/usr/bin/env node

import { Command } from 'commander';
import { init } from './commands/init.js';
import { add } from './commands/add.js';
import { build } from './commands/build.js';
import { list } from './commands/list.js';

const program = new Command();

program
  .name('shadcn-ui-svelte')
  .description('CLI for shadcn/ui Svelte components')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize shadcn/ui in your project')
  .action(init);

program
  .command('add')
  .description('Add components to your project')
  .argument('[components...]', 'components to add')
  .option('-o, --overwrite', 'overwrite existing files')
  .option('-a, --all', 'add all components')
  .action(add);

program
  .command('build')
  .description('Build registry from components')
  .action(build);

program
  .command('list')
  .description('List available components')
  .action(list);

program.parse();
