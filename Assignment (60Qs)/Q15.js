function slidingWindowSums(arr, k) {
  if (!Array.isArray(arr) || k <= 0 || k > arr.length) return [];
  const res = [];
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  res.push(sum);
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    res.push(sum);
  }
  return res;
}

console.log(slidingWindowSums([1, 2, 3, 4], 2));
