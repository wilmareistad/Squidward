import readline from "readline";
import chalk from "chalk";

export async function askForAnimations() {
  const readAnswer = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await new Promise((resolve) => {
    readAnswer.question(
      chalk.bgMagenta.white("Do you want to enable neon animations? ⚠️ Can flash (Y/n): "),
      resolve
    );
    console.log()
  });

  readAnswer.close();

  const enabled = answer.toLowerCase() !== "n";

  return enabled;
}
