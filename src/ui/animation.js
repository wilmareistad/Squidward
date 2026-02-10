import readline from "readline";
import chalkAnimation from "chalk-animation";

export async function askForAnimations() {

    const readAnswer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    const answer = await new Promise(resolve => 
        readAnswer.question(
            'Do you want to enable neon animations? ⚠️ Can flash (Y/n): ',
            resolve
        )
    );

    readAnswer.close();

    const enabled = answer.toLowerCase() !== "n";

    if (enabled) {
    const neon = chalkAnimation.neon("✨ Squidward is analysing... ✨");
    setTimeout(() => neon.stop(), 3000);
  }

  return enabled;
}
