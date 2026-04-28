function mergeShallow(a, b) {
  return { ...a, ...b };
}

const a = { x: 1, nested: { z: 1 } };
const b = { y: 2, nested: { y: 2 } };
console.log(mergeShallow(a, b));
