export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const result = [];
  for (const a of set) {
    if (a.startsWith(startString)) {
      result.push(a.substring(startString.length));
    }
  }
  return result.join('-');
}
