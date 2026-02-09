export const serious = {
  header: () => `⚠️ Issues found in your code:`,

  tooLongFile: (filename, lines) =>
    `File "${filename}" is too long (${lines} lines). Consider breaking it up.`,

  badVariableName: (varName, line, reason) => {
    let reasonText = "";
    if (reason === "bad name")
      reasonText =
        "Choose a descriptive name that reflects the variable's purpose.";
    else if (reason === "naming convention")
      reasonText =
        "Variable names should follow camelCase or snake_case standard.";

    return `Line ${line}: Variable "${varName}" is unclear. ${reasonText}`;
  },

  duplicateCode: (lines) =>
    `Duplicate code found at lines: ${lines.join(", ")}. Use DRY code.`,

  checkCssSelectors: (ratio, total, classes) =>
    `CSS-analys: ${classes} of ${total} selectors (${Math.round(ratio * 100)}%) is class-selectors. This may indicate excessive use of classes.`,

  badVariableStyle: (name, expected, actual) =>
    `Variable "${name}" should be ${expected}, not ${actual}. Consistency matters!`,

  badVariableStyleSummary: (dominantStyle) =>
    `Most variables in this file are ${dominantStyle}. Please be consistent and follow that style.`,
};
