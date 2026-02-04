export function checkVariableNames(code) {
  const results = [];

  const badVar = /\b(var|let|const)\s+(x|temp|o)\b/g; //b=word boundary, hela ord.

  let match;
  while ((match = badVar.exec(code)) !== null) {
    const line = code.slice(0, match.index).split("\n").length;

    results.push({
      type: "naming",
      name: match[2],
      declaration: match[1], // var, let or const
      index: match.index,
      line: line,
    });
  }

  return results;
}
