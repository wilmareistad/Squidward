export function printResults(results, mode = "passive") {
  results.forEach(r => {
    const message = mode === "serious" ? r.seriousMessage : r.passiveMessage;
    console.log(message);
  });
}
