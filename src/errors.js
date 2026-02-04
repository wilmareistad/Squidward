import chalk from "chalk";

export function handleError(message, exitCode = 1) {
  console.error(chalk.red(`${message}`));
  process.exit(exitCode);
}
