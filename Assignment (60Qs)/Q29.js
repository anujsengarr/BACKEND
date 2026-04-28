function pick(obj, keys) {
  return keys.reduce((acc, k) => (k in obj ? (acc[k] = obj[k]) : 0, acc), {});
}

console.log(pick({ id: 1, name: 'A', email: 'a@x' }, ['id', 'email']));
