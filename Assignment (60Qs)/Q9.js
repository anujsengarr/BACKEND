// ### 9. Rotate array by k steps (right)
// **Task:** Rotate right by `k` positions; immutably return result.
// **Use:** slice + spread or loop
// **Input:** [1,2,3,4], k=1 → Output: [4,1,2,3]
// **Hint:** Normalize `k` with `k = k % length`.
// ---

const arr7 = [1,2,3,4];
let k = 1;
k = k % arr7.length;
const rotated = [...arr7.slice(-k), ...arr7.slice(0, arr7.length - k)];
console.log(rotated);