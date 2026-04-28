const orders = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending' },
  { id: 3, userId: 1, total: 200, status: 'completed' },
  { id: 4, userId: 3, total: 700, status: 'completed' }
];

function percentContributionPerUser(orders) {
  const totals = orders.reduce((m, o) => (m[o.userId] = (m[o.userId] || 0) + o.total, m), {});
  const grand = Object.values(totals).reduce((s, v) => s + v, 0) || 0;
  const res = {};
  for (const id in totals) res[id] = Number(((totals[id] / grand) * 100).toFixed(2));
  return res;
}

console.log(percentContributionPerUser(orders));
