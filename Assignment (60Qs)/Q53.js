const ordersBase = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending' },
  { id: 3, userId: 1, total: 200, status: 'completed' },
  { id: 4, userId: 3, total: 700, status: 'completed' }
];

function findInvalidOrders(orders) {
  return orders.filter(o => o == null || o.id == null || o.userId == null || o.total == null);
}

const ordersWithBroken = ordersBase.concat({ id: 5, total: 100 });
console.log(findInvalidOrders(ordersWithBroken));
