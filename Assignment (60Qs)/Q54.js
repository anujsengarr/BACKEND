const existingOrders = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending' }
];

const incomingOrders = [
  { id: 1, userId: 1, total: 600, status: 'completed' },
  { id: 3, userId: 3, total: 150, status: 'pending' }
];

function upsertOrders(existing, incoming) {
  const map = {};
  existing.forEach(o => map[o.id] = o);
  incoming.forEach(o => map[o.id] = o);
  return Object.values(map).sort((a, b) => a.id - b.id);
}

console.log(upsertOrders(existingOrders, incomingOrders));
