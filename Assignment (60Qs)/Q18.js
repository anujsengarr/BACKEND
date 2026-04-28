function countMatching(arr, predicate) {
  if (!Array.isArray(arr) || typeof predicate !== 'function') return 0;
  return arr.reduce((count, v) => count + (predicate(v) ? 1 : 0), 0);
}

console.log(countMatching([5, 12, 8, 20], x => x > 10));
