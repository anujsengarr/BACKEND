const orders = [
  { id: 1, userId: 1, total: 500, status: 'completed' },
  { id: 2, userId: 2, total: 300, status: 'pending' },
  { id: 3, userId: 1, total: 200, status: 'completed' },
  { id: 4, userId: 3, total: 700, status: 'completed' }
];

function addTaxAndGrandTotal(orders) {
  return orders.map(o => {
    const tax = Number((o.total * 0.18).toFixed(2));
    const grandTotal = Number((o.total + tax).toFixed(2));
    return { ...o, tax, grandTotal };
  });
}

console.log(addTaxAndGrandTotal(orders));
