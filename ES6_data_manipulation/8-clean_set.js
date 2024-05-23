export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }

  const substrings = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      const substring = value.slice(startString.length);
      substrings.push(substring);
    }
  }

  return substrings.join('-');
}
