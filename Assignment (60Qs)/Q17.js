function removeAtIndex(arr, i) {
  if (!Array.isArray(arr)) return [];
  if (typeof i !== 'number' || i < 0 || i >= arr.length) return arr.slice();
  return arr.slice(0, i).concat(arr.slice(i + 1));
}

console.log(removeAtIndex([1, 2, 3], 1));
