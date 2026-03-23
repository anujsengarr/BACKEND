// ### 8. Flatten 1-level nested array
// **Task:** Flatten only one nesting level: [1,[2,3],4] -> [1,2,3,4]
// **Use:** loop or `reduce` + spread
// **Input:** [1, [2,3], 4] → Output: [1,2,3,4]
// **Hint:** If element is array, append its elements.
// ---

const arr6 = [1,[2,3],4];
const flat = arr6.reduce((acc,v)=>Array.isArray(v)?[...acc,...v]:[...acc,v],[]);
console.log(flat);