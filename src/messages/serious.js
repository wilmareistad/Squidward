export const serious = {
  header: () => `⚠️ Found problems:`, 

  tooLongFile: (filename, lines) => 
    `File "${filename}" is too long (${lines} lines). Consider breaking it up.`,

  badVariableName: (varName, line) =>
    `Line ${line}: Variable "${varName}" is unclear and should be renamed`,

  duplicateCode: (lines) =>
    `Duplicate code found at lines: ${lines.join(", ")}. Use DRY code.`,

   checkCssSelectors: (ratio, total, classes) =>
    `CSS-analys: ${classes} of ${total} selectors (${Math.round(ratio * 100)}%) is class-selectors. This may indicate excessive use of classes.`
};
