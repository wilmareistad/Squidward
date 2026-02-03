export function checkFileLength(code, maxLines = 200) {
  const results = [];

  const lines = code.split("\n").length;

  if (lines > maxLines) {
    results.push({
      type: "length",
      lines,
      max: maxLines,
    });
  }
  return results;
}
