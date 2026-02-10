// Check variable names: both "bad names" and camelCase/snake_case.
export function checkVariableNames(code) {
  const results = [];

  const lines = code.split("\n");

  const varRegex = /\b(var|let|const)\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/;
  const badNames = ["x", "temp", "o"];

  lines.forEach((lineText, index) => {
    const lineNumber = index + 1;
    const trimmed = lineText.trim();

    // Ignores empty rows and commentaries
    if (!trimmed || trimmed.startsWith("//")) return;

    const match = varRegex.exec(lineText);
    if (!match) return;

    const declaration = match[1];
    const name = match[2];

    // 1️⃣ Bad variable names
    if (badNames.includes(name)) {
      results.push({
        type: "naming",
        name,
        declaration,
        line: lineNumber,
        reason: "bad name",
      });
      return;
    }

    // 2️⃣ camelCase or snake_case
    const camelCase = /^[a-z][a-zA-Z0-9]*$/;
    const snake_case = /^[a-z][a-z0-9_]*$/;

    if (!camelCase.test(name) && !snake_case.test(name)) {
      results.push({
        type: "naming",
        name,
        declaration,
        line: lineNumber,
        reason: "naming convention",
      });
    }
  });

  return results;
}
