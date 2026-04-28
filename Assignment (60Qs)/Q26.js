function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

console.log(deepClone({ a: { b: 2 } }));
