export const passive = {
  header: () => `⚠️ Well, look what I stumbled upon…`,

  tooLongFile: (filename, lines) =>
    `File ${filename} has ${lines} lines. Did you write a novel instead of code? Try using a function!`,

  badVariableName: (varName, line, reason) => {
    let reasonText = "";
    if (reason === "bad name") reasonText = "";
    else if (reason === "naming convention")
      reasonText = "CamelCase or snake_case called… they’re waiting for you.";

    const extraShade = [
      `Are we naming "${varName}" randomly now?`,
      `Hmm… interesting choice of a name: "${varName}", not impressed.`,
      `"${varName}"? I guess that's fine… if you hate yourself.`,
    ];

    const randomShade =
      extraShade[Math.floor(Math.random() * extraShade.length)];

    return `Line ${line}: ${reasonText} ${randomShade}`;
  },

  duplicateCode: (lines) =>
    `Déjà vu! Lines ${lines.join(", ")} are suspiciously similar. Ever heard of DRY?`,

  checkCssSelectors: (ratio) =>
    `${Math.round(ratio * 100)}% of your selectors are classes. Whoa… are we overclassing everything?`,

  badVariableStyle: (name, expected, actual) =>
    `Variable "${name}" uses ${actual}, but most variables are ${expected}.`,

  badVariableStyleSummary: (dominantStyle) =>
    `Most of your variables use ${dominantStyle}. Maybe be consistent and stick to it?`,
};
