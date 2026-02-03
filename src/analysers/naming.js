export function getVariableNames(code) {
  const results = [];

  const badVar = /\b(var|let|const)\s+(x|temp|data)\b/g; //b=word boundary, hela ord.

  let match;
  while ((match = badVar.exec(code)) !== null) {
    results.push({
      type: "naming",
      name: match[2], // variabelnamnet
      declaration: match[1], // var, let eller const
      index: match.index,
    });
  }

  return results;
}
