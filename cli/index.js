#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');

program
  .name('openhuman-cli')
  .description('Explore OpenHuman profiles')
  .version('0.1.0');

program
  .command('explore')
  .description('Explore profiles by tag')
  .option('--tag <tag>', 'Tag to search for')
  .action((options) => {
    const profilePath = path.join(__dirname, '../openhuman/human.json');
    if (!fs.existsSync(profilePath)) {
      console.error('No human.json found.');
      process.exit(1);
    }
    const profile = JSON.parse(fs.readFileSync(profilePath, 'utf-8'));
    if (options.tag) {
      if (profile.tags && profile.tags.includes(options.tag)) {
        console.log(profile);
      } else {
        console.log(`No profile found with tag: ${options.tag}`);
      }
    } else {
      console.log(profile);
    }
  });

program.parse(process.argv); 