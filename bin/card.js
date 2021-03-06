#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const os = require('os');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}
// Text + chalk definitions
const data = {
  'name': chalk.white('天猪TZ'),
  'handle': chalk.cyan('atian25'),
  'work': chalk.white('Staff Frontend Engineer at Alibaba'),
  'location': chalk.white('GuangZhou, China'),
  'twitter': chalk.cyan('https://twitter.com/atian25'),
  'github': chalk.cyan('https://github.com/atian25'),
  'zhihu': chalk.cyan('https://www.zhihu.com/people/liuyong25'),
  'web': chalk.cyan('https://github.com/atian25/blog'),
  'weibo': chalk.cyan('https://weibo.com/liuyong25'),
  'npx': chalk.green('npx atian25'),

  'labelWork': chalk.white.bold('      Work:'),
  'labelLocation': chalk.white.bold('  Location:'),

  'labelTwitter': chalk.blue.bold('   Twitter:'),
  'labelGitHub': chalk.blue.bold('    GitHub:'),
  'labelZhihu': chalk.blue.bold('     Zhihu:'),
  'labelWeb': chalk.blue.bold('       Web:'),
  'labelWeibo': chalk.blue.bold('     Weibo:'),
  'labelCard': chalk.white.bold('      Card:'),
}

// Actual strings we're going to output
const newline = os.EOL;
const heading = `                 ${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const location = `${data.labelLocation}  ${data.location}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const zhihu = `${data.labelZhihu}  ${data.zhihu}`;
const weibo = `${data.labelWeibo}  ${data.weibo}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline
  + working + newline
  + location + newline + newline
  + githubing + newline
  // + webing + newline
  + zhihu + newline
  + weibo + newline
  + twittering + newline + newline
  + carding;

console.log(chalk.green(boxen(output, options)));
