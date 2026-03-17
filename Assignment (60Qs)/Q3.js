// ### 3. Maximum value without Math.max
// **Task:** Find largest number by scanning once.
// **Use:** loop or `reduce`
// **Input:** [5, 1, 9, 3] → Output: 9
// **Hint:** Initialize `max` to `-Infinity` or first element.
// ---

const arr1 = [5,1,9,3];
let max = -Infinity;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) max = arr1[i];
}
console.log(max);
const maxVal = arr1.reduce((m,v)=>v>m?v:m,-Infinity);
console.log(maxVal);