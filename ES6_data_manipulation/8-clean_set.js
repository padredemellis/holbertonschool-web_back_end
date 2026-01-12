export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  for (const a of set) {
    if (typeof a === 'string' && a.startsWith(startString)) {
      result.push(a.substring(startString.length));
    }
  }

  return result.join('-');
}
