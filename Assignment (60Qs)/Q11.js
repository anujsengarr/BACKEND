// ### 11. Remove falsy values
// **Task:** Remove false, 0, '', null, undefined, NaN.
// **Use:** `filter(Boolean)`
// **Input:** [0,1,false,2,'',3,null] → Output: [1,2,3]
// **Hint:** Show alternative: `filter(x => !!x)`.
// ---

const arr9 = [0,1,false,2,'',3,null];
const cleaned = arr9.filter(Boolean);
console.log(cleaned);