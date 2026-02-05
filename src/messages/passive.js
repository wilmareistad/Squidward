export const passive = {
  header: () => `⚠️ You are not really good, look what I found:`,

  tooLongFile: (filename, lines) =>
    `File ${filename} has ${lines} rows, do it better.. Use a function!`,

  badVariableName: (varName, line) =>
    `Line ${line}: has a bad variablename "${varName}"`,

  duplicateCode: (lines) =>
    `I’ve seen this code before… at lines ${lines.join(", ")}. Maybe DRY it up a bit?`,
};
