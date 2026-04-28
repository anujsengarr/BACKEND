const usersBase = [
  { id: 1, name: 'Aman' },
  { id: 2, name: 'Riya' },
  { id: 3, name: 'Rahul' }
];

const preferences = [
  { userId: 1, theme: 'dark' }
];

function mergePreferences(users, preferences, defaults = { theme: 'light' }) {
  const map = Object.fromEntries((preferences || []).map(p => [p.userId, p]));
  return users.map(u => ({ ...u, preferences: { ...defaults, ...(map[u.id] || {}) } }));
}

console.log(mergePreferences(usersBase, preferences));
