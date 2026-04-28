function renameFullName(obj) {
  const { fullName, ...rest } = obj;
  return { name: fullName, ...rest };
}

console.log(renameFullName({ fullName: 'A', age: 20 }));
