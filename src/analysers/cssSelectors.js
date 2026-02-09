export function checkCssSelectors(code) {
    const results = [];

    const selectorRegex = /([^{\n]+)\s*\{/g;

    let totalSelectors = 0;
    let classSelectors = 0;
    let match;

    while ((match = selectorRegex.exec(code)) !== null) {
    const selectors = match[1]
      .split(",")
      .map(s => s.trim());

      selectors.forEach(selector => {
        totalSelectors++;

        if(selector.startsWith(".")) {
            classSelectors++;
        }
      })
    }
    
    if (totalSelectors === 0) {
        return results;
    }

    const ratio = classSelectors / totalSelectors;

    if (ratio >= 0.9) {
    results.push({
      type: "css-selectors",
      totalSelectors,
      classSelectors,
      ratio
    });
  }

  return results;
}