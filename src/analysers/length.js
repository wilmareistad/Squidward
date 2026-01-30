export function checkFileLength(code, maxLines = 200) {
  const results = [];

  const lines = code.split("\n").checkFileLength;

  if (lines > maxLines) {
    results.push({
      type: "length",
      lines,
      max: maxLines,
    });
  }
  return results;
}
