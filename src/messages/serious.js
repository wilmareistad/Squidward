export const serious = {
  header: () => `⚠️ Found problems:`, 

  tooLongFile: (filename, lines) => 
    `File "${filename}" is too long (${lines} lines). Consider breaking it up.`,

  badVariableName: (varName, line) =>
    `Line ${line}: Variable "${varName}" is unclear and should be renamed`,

  duplicateCode: (lines) =>
    `Duplicate code found at lines: ${lines.join(", ")}. Use DRY code.`
};
