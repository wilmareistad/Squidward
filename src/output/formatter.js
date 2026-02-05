import chalk from "chalk";
import { passive } from "../messages/passive.js";
import { serious } from "../messages/serious.js";

export function printResults(results, mode = "passive") {
  if (results.length === 0) {
    console.log(chalk.green("✅ Congratulations you did good!"));
    return;
  }

  const header = mode === "serious" ? serious.header() : passive.header();
  console.log(chalk.yellowBright(header));
  console.log("");

  results.forEach((result) => {
    const message =
      mode === "serious" ? result.seriousMessage : result.passiveMessage;
    console.log(chalk.cyanBright(`⚠️ ${message}`));
  });
}
