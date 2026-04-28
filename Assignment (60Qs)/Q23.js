function removePassword(obj) {
  const { password, ...rest } = obj;
  return rest;
}

console.log(removePassword({ name: 'A', password: 'x' }));
