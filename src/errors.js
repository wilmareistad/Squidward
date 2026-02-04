export function handleError(message, exitCode = 1) {
  console.error(`${message}`);
  process.exit(exitCode);
}
