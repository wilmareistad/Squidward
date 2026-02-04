export const serious = {
  tooLongFile: (filename, lines) =>
    `Filen ${filename} har ${lines} rader, vilket överskrider maxgränsen!`,

    badVariableName: (varName, line) =>
    `Line ${line}: It is hard to understand "${varName}", use another name`
};

