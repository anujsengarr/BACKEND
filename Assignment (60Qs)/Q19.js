function uniqueSortedSet(arr) {
  if (!Array.isArray(arr)) return [];
  return Array.from(new Set(arr)).sort((a, b) => a - b);
}

function uniqueSortedReduce(arr) {
  if (!Array.isArray(arr)) return [];
  const seen = arr.reduce((acc, v) => (acc[v] = true, acc), {});
  return Object.keys(seen).map(Number).sort((a, b) => a - b);
}

console.log(uniqueSortedSet([3, 1, 2, 3, 2]));
console.log(uniqueSortedReduce([3, 1, 2, 3, 2]));
