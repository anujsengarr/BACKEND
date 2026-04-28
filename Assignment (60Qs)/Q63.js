const usersBase = [
  { id: 1, name: 'Aman' },
  { id: 2, name: 'Riya' }
];

function escapeCsvCell(value) {
  const s = String(value);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

function usersToCSV(users) {
  const header = 'id,name';
  const lines = users.map(u => `${escapeCsvCell(u.id)},${escapeCsvCell(u.name)}`);
  return header + '\n' + lines.join('\n') + '\n';
}

console.log(usersToCSV(usersBase));
