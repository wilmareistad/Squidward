export const passive = {
  tooLongFile: (filename, lines) =>
    `File ${filename} has ${lines} rows, can you not do better? Maybe use a function...`,

  badVariableName: (varName, line) =>
    `Line ${line}: Should I understand what "${varName}" means?? Come on do better!`,

  duplicateCode: (lines) =>
    `I’ve seen this code before… at lines ${lines.join(", ")}. Maybe DRY it up a bit?`,
};
