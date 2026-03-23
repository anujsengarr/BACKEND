// ### 12. Find index of first occurrence (manual)
// **Task:** Implement `indexOf` manually (return -1 if not found).
// **Use:** loop
// **Input:** ['a','b','c'], 'b' → Output: 1
// **Hint:** Compare with `===`.
// ---

const arr10 = ['a','b','c'];
const target = 'b';
let index = -1;
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] === target) {
        index = i;
        break;
    }
}
console.log(index);