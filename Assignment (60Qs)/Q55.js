const usersBase = [
  { id: 1, name: 'Aman', age: 22, isActive: true },
  { id: 2, name: 'Riya', age: 17, isActive: false },
  { id: 3, name: 'Rahul', age: 25, isActive: true },
  { id: 4, name: 'Neha', age: 19, isActive: false }
];

function groupByActivity(users) {
  return users.reduce((acc, u) => ((u.isActive ? acc.active : acc.inactive).push(u), acc), { active: [], inactive: [] });
}

console.log(groupByActivity(usersBase));
