export const passive = {
  tooLongFile: (filename, lines) =>
    `File ${filename} has ${lines} rows, can you not do better? Maybe use a function...`,

  badVariableName: (varName) =>
    `Should I understand what "${varName}" means?? Come on do better!`
};
