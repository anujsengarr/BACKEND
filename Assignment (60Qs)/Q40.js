const users = [
  { id: 1, name: 'Aman', age: 22, isActive: true },
  { id: 2, name: 'Riya', age: 17, isActive: false },
  { id: 3, name: 'Rahul', age: 25, isActive: true },
  { id: 4, name: 'Neha', age: 19, isActive: false }
];

const orders = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending' },
  { id: 3, userId: 1, total: 200, status: 'completed' },
  { id: 4, userId: 3, total: 700, status: 'completed' }
];

function averageOrderPerUser(orders) {
  const acc = orders.reduce((m, o) => ((m[o.userId] = m[o.userId] || { sum: 0, count: 0 }), m[o.userId].sum += o.total, m[o.userId].count += 1, m), {});
  const res = {};
  for (const userId in acc) res[userId] = acc[userId].sum / acc[userId].count;
  return res;
}

console.log(averageOrderPerUser(orders));
