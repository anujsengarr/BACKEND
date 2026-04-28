function addRoleAdmin(obj) {
  return { ...obj, role: 'admin' };
}

console.log(addRoleAdmin({ name: 'Aman' }));
