// 3 rader är lagom så att man inte får falska positiva
export function checkDuplicates(code, blockSize = 3) {
  const rawLines = code.split("\n");

  // Vi jämför block utan tomma rader
  const lines = [];
  // lineNumbers mappar varje rad tillbaka till ursprunglig radnummer
  const lineNumbers = [];

  rawLines.forEach((line, index) => {
    if (line.trim()) {
      // ignorera tomma rader
      lines.push(line.trim()); // spara raden för jämförelse
      lineNumbers.push(index + 1); // spara originalradnumret
    }
  });

  const seen = new Map(); // lagrar redan sedda kodblock
  const results = []; // här sparar vi alla dupliceringsvarningar

  for (let i = 0; i <= lines.length - blockSize; i++) {
    const block = lines.slice(i, i + blockSize).join("\n");

    if (seen.has(block)) {
      const firstIndex = seen.get(block);
      const firstLine = lineNumbers[firstIndex]; // original radnummer

      const alreadyReported = results.some((r) => r.lines[0] === firstLine);

      if (!alreadyReported) {
        results.push({
          type: "duplication",
          lines: [firstLine, lineNumbers[i]], // originalradnummer för båda blocken
        });
      }
    } else {
      seen.set(block, i);
    }
  }

  return results;
}
