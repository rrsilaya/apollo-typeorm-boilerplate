import chalk from 'chalk';

export const log = (message : String, type = 'ERROR', isError = false) => {
  const timestamp = new Date();

  const INDICATION = isError ? chalk.bold.bgRed : chalk.bold.bgGreen.black;

  console.log(
    INDICATION(` ${type} `),
    message,
    chalk.blue.underline(timestamp.toString())
  );
}