// ### 2. Sum of array (accumulator)
// **Task:** Compute total sum.
// **Use:** `for` loop then `reduce` refactor
// **Input:** [1,2,3,4]
// **Output:** 10
// ---
// **Hint:** Start with `total = 0`, add each element.

const arr = [1,2,3,4];
let total = 0;
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}
console.log(total);