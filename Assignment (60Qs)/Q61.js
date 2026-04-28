const ordersWithProducts = [
  { id: 1, products: [{ productId: 5, qty: 2 }, { productId: 6, qty: 1 }] },
  { id: 2, products: [{ productId: 7, qty: 3 }] }
];

function normalizeProducts(orders) {
  return orders.flatMap(o => (o.products || []).map(p => ({ orderId: o.id, productId: p.productId, qty: p.qty })));
}

console.log(normalizeProducts(ordersWithProducts));
