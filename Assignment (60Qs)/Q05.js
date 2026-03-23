// ### 5. Reverse an array (manual)
// **Task:** Produce reversed array without `.reverse()`. Return new array (immutable).
// **Use:** loop or `reduce`
// **Input:** [1,2,3] → Output: [3,2,1]
// **Hint:** Build new array by pushing from end or unshift (inefficient).
// ---

const arr3 = [1,2,3];
const reversed = [];
for (let i = arr3.length - 1; i >= 0; i--) {
    reversed.push(arr3[i]);
}
console.log(reversed);
const rev2 = arr3.reduce((acc,v)=>[v,...acc],[]);
console.log(rev2);