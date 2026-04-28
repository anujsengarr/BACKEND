const ordersBase = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending' },
  { id: 3, userId: 1, total: 200, status: 'completed' },
  { id: 4, userId: 3, total: 700, status: 'completed' }
];

function weightedLTV(orders) {
  const weight = { completed: 1.0, pending: 0.5 };
  return orders.reduce((m, o) => (m[o.userId] = (m[o.userId] || 0) + o.total * (weight[o.status] || 0), m), {});
}

console.log(weightedLTV(ordersBase));
