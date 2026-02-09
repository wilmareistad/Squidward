export const passive = {
  header: () => `⚠️ You are not really good, look what I found:`,

  tooLongFile: (filename, lines) =>
    `File ${filename} has ${lines} rows, do it better.. Use a function!`,

  badVariableName: (varName, line, reason) => {
    let reasonText = "";
    if (reason === "bad name") reasonText = "Come on, pick a proper name!";
    else if (reason === "naming convention")
      reasonText = "Use camelCase or snake_case, seriously.";

    return `Line ${line}: Should I understand what "${varName}" means?? ${reasonText}`;
  },

  duplicateCode: (lines) =>
    `I’ve seen this code before… at lines ${lines.join(", ")}. Maybe DRY it up a bit?`,

  checkCssSelectors: (ratio) =>
    `${Math.round(ratio * 100)}% of the selectors are class selectors. Maybe a little too many?`

};
