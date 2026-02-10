// Checks the code in blocks of 3. This helps to reduce the amount of false positives.
export function checkDuplicates(code, blockSize = 3) {
  const rawLines = code.split("\n");

  // Compares blocks without empty lines.
  const lines = [];
  // LineNumbers maps every row back to the original row number.
  const lineNumbers = [];

  rawLines.forEach((line, index) => {
    if (line.trim()) {
      // ignores empty rows
      lines.push(line.trim()); // save the row for comparison.
      lineNumbers.push(index + 1); // save the original row number.
    }
  });

  const seen = new Map(); // Stores already seen code-blocks
  const results = []; // Here we store all dupication warnings.

  for (let i = 0; i <= lines.length - blockSize; i++) {
    const block = lines.slice(i, i + blockSize).join("\n");

    if (seen.has(block)) {
      const firstIndex = seen.get(block);
      const firstLine = lineNumbers[firstIndex]; // Original row-number.

      const alreadyReported = results.some((r) => r.lines[0] === firstLine);

      if (!alreadyReported) {
        results.push({
          type: "duplication",
          lines: [firstLine, lineNumbers[i]], // Original row-number for both blocks.
        });
      }
    } else {
      seen.set(block, i);
    }
  }

  return results;
}
