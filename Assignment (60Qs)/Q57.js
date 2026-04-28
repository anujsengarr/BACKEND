const usersBase = [
  { id: 1, name: 'Aman', age: 22, isActive: true },
  { id: 2, name: 'Riya', age: 17, isActive: false },
  { id: 3, name: 'Rahul', age: 25, isActive: true },
  { id: 4, name: 'Neha', age: 19, isActive: false }
];

function ageHistogram(users) {
  return users.reduce((acc, u) => {
    if (u.age < 18) acc['<18'] = (acc['<18'] || 0) + 1;
    else if (u.age <= 24) acc['18-24'] = (acc['18-24'] || 0) + 1;
    else acc['25+'] = (acc['25+'] || 0) + 1;
    return acc;
  }, {});
}

console.log(ageHistogram(usersBase));
