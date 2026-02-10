// src/analysers/variableStyle.js

function detectStyle(name) {
  if (/^[a-z][a-zA-Z0-9]*$/.test(name)) return "camelCase";
  if (/^[A-Z][a-zA-Z0-9]*$/.test(name)) return "PascalCase";
  if (/^[a-z][a-z0-9_]*$/.test(name)) return "snake_case";
  return "other";
}

// Returns a single result summarizing variable style consistency
export function checkVariableStyle(code) {
  const variableRegex = /\b(?:let|const|var)\s+([a-zA-Z0-9_]+)/g;
  const matches = [...code.matchAll(variableRegex)];

  const styleCounts = { camelCase: 0, PascalCase: 0, snake_case: 0, other: 0 };

  for (const match of matches) {
    const name = match[1];
    const style = detectStyle(name);
    styleCounts[style]++;
  }

  // Determine dominant style
  const dominantStyle = Object.entries(styleCounts)
    .filter(([style, count]) => count > 0)
    .sort((a, b) => b[1] - a[1])[0]?.[0];

  // Only report if there is a dominant style and more than 1 style is used
  const differentStylesUsed = Object.values(styleCounts).filter(
    (c) => c > 0,
  ).length;

  if (!dominantStyle || differentStylesUsed <= 1) return [];

  // Return a single summary result
  return [
    {
      type: "variableStyle",
      dominantStyle,
    },
  ];
}
