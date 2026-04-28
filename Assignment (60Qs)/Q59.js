const usersBase = [
  { id: 1, name: 'Aman', age: 22, isActive: true },
  { id: 2, name: 'Riya', age: 17, isActive: false },
  { id: 3, name: 'Rahul', age: 25, isActive: true },
  { id: 4, name: 'Neha', age: 19, isActive: false }
];

const ordersBase = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending' },
  { id: 3, userId: 1, total: 200, status: 'completed' },
  { id: 4, userId: 3, total: 700, status: 'completed' }
];

function topKUsersBySpending(users, orders, k) {
  const totals = orders.reduce((m, o) => (m[o.userId] = (m[o.userId] || 0) + o.total, m), {});
  return Object.entries(totals).map(([id, total]) => ({ id: Number(id), total })).sort((a, b) => b.total - a.total).slice(0, k).map(x => (users.find(u => u.id === x.id) || {}).name).filter(Boolean);
}

console.log(topKUsersBySpending(usersBase, ordersBase, 2));
