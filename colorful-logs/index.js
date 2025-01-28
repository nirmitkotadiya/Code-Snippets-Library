import chalk from 'chalk';

console.log(chalk.green('This is a green text!'));
console.log(chalk.blue.bold('This is a bold blue text!'));
console.log(chalk.red.bgWhite('This is red text on a white background!'));
console.log(chalk.yellow('This is a yellow text with a style!'));

console.log(chalk.green('Success!') + ' ' + chalk.red('Error!'));
