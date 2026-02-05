// Kontrollera variabelnamn: både "dåliga namn" och camelCase/snake_case
export function checkVariableNames(code) {
  const results = [];

  const lines = code.split("\n");

  const varRegex = /\b(var|let|const)\s+([a-zA-Z_][a-zA-Z0-9_]*)\b/;
  const badNames = ["x", "temp", "o"];

  lines.forEach((lineText, index) => {
    const lineNumber = index + 1;
    const trimmed = lineText.trim();

    // Hoppa över tomma rader och kommentarer
    if (!trimmed || trimmed.startsWith("//")) return;

    const match = varRegex.exec(lineText);
    if (!match) return;

    const declaration = match[1];
    const name = match[2];

    // 1️⃣ Dåliga variabelnamn
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

    // 2️⃣ camelCase eller snake_case
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
