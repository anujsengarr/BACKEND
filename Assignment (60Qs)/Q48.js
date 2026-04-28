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

function userSummaries(users, orders) {
  const map = orders.reduce((m, o) => ((m[o.userId] = m[o.userId] || { count: 0, sum: 0 }), m[o.userId].count += 1, m[o.userId].sum += o.total, m), {});
  return users.map(u => {
    const stats = map[u.id] || { count: 0, sum: 0 };
    return { userId: u.id, name: u.name, totalOrders: stats.count, totalSpent: stats.sum };
  });
}

console.log(userSummaries(users, orders));
