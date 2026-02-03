import chalk from 'chalk'

export function printResults(results, mode = "passive") {
  if (results.length === 0) {
    console.log(chalk.green("Congratulations you did good!"));
    return;
  }

  results.forEach((r) => {
    const message = mode === "serious" ? r.seriousMessage : r.passiveMessage;
    console.log(chalk.cyanBright(message));
  });
}
