import chalk from 'chalk'

export function printResults(results, mode = "passive") {
  if (results.length === 0) {
    console.log(chalk.green("✅ Congratulations you did good!"));
    return;
  }

  const grouped = {};
  
  results.forEach((result) => {
    const message = mode === "serious" ? result.seriousMessage : result.passiveMessage;
    console.log(chalk.cyanBright(`⚠️ ${message}`));
  });
}
