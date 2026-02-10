import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { passive } from "../messages/passive.js";
import { serious } from "../messages/serious.js";

// export async function printResults(results, mode = "passive") {
export async function printResults(
  results,
  mode = "passive",
  animationsEnabled = false,
) {

  if (results.length === 0) {
    const message = "✅ Congratulations you did good!";

    if (animationsEnabled) {
      const animation = chalkAnimation.rainbow(message, 5);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      animation.stop();
    } else {
      console.log(chalk.green(message));
    }

    return;
  }

  const header = mode === "serious" ? serious.header() : passive.header();

  // Start animation
  if (animationsEnabled) {
    const anim = chalkAnimation.rainbow(header);
    await new Promise((r) => setTimeout(r, 2000));
    anim.stop();
  } else {
    console.log(chalk.yellowBright(header));
  }

  console.log("");

  results.forEach((result) => {
    const message =
      mode === "serious" ? result.seriousMessage : result.passiveMessage;

    const coloredMessage =
      mode === "serious"
        ? chalk.cyanBright(message)
        : chalk.hex("#39FF14")(message);

    console.log(coloredMessage);
  });
}
