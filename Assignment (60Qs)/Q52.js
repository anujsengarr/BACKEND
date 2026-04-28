const orders = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending' },
  { id: 3, userId: 1, total: 200, status: 'completed' },
  { id: 4, userId: 3, total: 700, status: 'completed' }
];

function increaseCompletedTotals(orders, percent) {
  const factor = 1 + percent / 100;
  return orders.map(o => o.status === 'completed' ? { ...o, total: Math.round(o.total * factor * 100) / 100 } : o);
}

console.log(increaseCompletedTotals(orders, 10));
