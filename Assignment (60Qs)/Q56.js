const usersBase = [
  { id: 1, name: 'Aman', age: 22, isActive: true },
  { id: 2, name: 'Riya', age: 17, isActive: false },
  { id: 3, name: 'Rahul', age: 25, isActive: true },
  { id: 4, name: 'Neha', age: 19, isActive: false }
];

function activeAdults(users) {
  return users.filter(u => u.isActive === true && u.age >= 18).map(u => u.name);
}

console.log(activeAdults(usersBase));
