function rangeInclusive(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number' || start > end) return [];
  const res = [];
  for (let i = start; i <= end; i++) res.push(i);
  return res;
}

console.log(rangeInclusive(3, 6));
