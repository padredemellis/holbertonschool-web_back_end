export default function hasValuesFromArray(set, array) {
  for (const a of array) {
    if (!set.has(a)) {
      return false;
    }
  }
  return true;
}
