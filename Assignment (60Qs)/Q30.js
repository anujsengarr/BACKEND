function omit(obj, keys) {
  return Object.keys(obj).reduce((acc, k) => (keys.includes(k) ? acc : (acc[k] = obj[k], acc)), {});
}

console.log(omit({ user: 'A', password: 'x' }, ['password']));
