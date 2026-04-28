function extractNameRole(obj) {
  const { name, role = 'user' } = obj;
  return { name, role };
}

console.log(extractNameRole({ name: 'A' }));
