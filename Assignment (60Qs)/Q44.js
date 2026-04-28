const users = [
  { id: 1, name: 'Aman', age: 22, isActive: true },
  { id: 2, name: 'Riya', age: 17, isActive: false },
  { id: 3, name: 'Rahul', age: 25, isActive: true },
  { id: 4, name: 'Neha', age: 19, isActive: false }
];

function searchUsersByName(users, query) {
  const q = String(query).toLowerCase();
  return users.filter(u => u.name.toLowerCase().includes(q));
}

console.log(searchUsersByName(users, 'am'));
