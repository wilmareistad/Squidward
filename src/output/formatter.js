export function printResults(results, mode = "passive") {
  if (results.length === 0) {
    console.log("Congratulations you did good");
    return;
  }

  results.forEach((r) => {
    const message = mode === "serious" ? r.seriousMessage : r.passiveMessage;
    console.log(message);
  });
}
