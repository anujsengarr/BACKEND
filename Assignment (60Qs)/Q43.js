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

function paginate(array, page, limit) {
  const totalItems = array.length;
  const totalPages = Math.ceil(totalItems / limit) || 1;
  const p = Math.max(1, Math.min(page, totalPages));
  const start = (p - 1) * limit;
  const data = array.slice(start, start + limit);
  return { page: p, totalPages, data };
}

console.log(paginate(orders, 1, 2));
