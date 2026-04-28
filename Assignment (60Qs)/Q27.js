function countProperties(obj) {
  if (obj == null) return 0;
  return Object.keys(obj).length;
}

console.log(countProperties({ a: 1, b: 2 }));
