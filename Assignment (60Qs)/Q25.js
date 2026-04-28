function invertObject(obj) {
  return Object.entries(obj).reduce((acc, [k, v]) => (acc[v] = k, acc), {});
}

console.log(invertObject({ a: 1, b: 2 }));
