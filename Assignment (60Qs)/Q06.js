// ### 6. Remove duplicates (preserve order)
// **Task:** Remove duplicates, keep first occurrence. NO `Set`.
// **Use:** loop + `includes` or object lookup
// **Input:** [1,2,2,3,1] → Output: [1,2,3]
// **Hint:** Maintain seen map `{}`.
// ---

const arr4 = [1,2,2,3,1];
const unique = [];
for (let i = 0; i < arr4.length; i++) {
    if (!unique.includes(arr4[i])) unique.push(arr4[i]);
}
console.log(unique);