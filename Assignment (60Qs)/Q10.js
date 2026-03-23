// ### 10. Chunk array into size n
// **Task:** Split into subarrays of length `n`.
// **Use:** loop (increment by n) or `reduce`
// **Input:** [1,2,3,4,5], n=2 → Output: [[1,2],[3,4],[5]]
// **Hint:** Last chunk can be smaller.
// ---

const arr8 = [1,2,3,4,5];
const n = 2;
const chunks = [];
for (let i = 0; i < arr8.length; i += n) {
    chunks.push(arr8.slice(i, i + n));
}
console.log(chunks);