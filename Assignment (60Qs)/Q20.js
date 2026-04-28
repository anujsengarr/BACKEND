function indexMap(arr) {
  if (!Array.isArray(arr)) return {};
  return arr.reduce((acc, v, i) => (acc[i] = v, acc), {});
}

console.log(indexMap(['a', 'b']));
