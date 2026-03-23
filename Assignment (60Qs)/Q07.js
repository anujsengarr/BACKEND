// ### 7. Count element frequency (generic)
// **Task:** Return an object mapping value → count.
// **Use:** `reduce` or loop
// **Input:** ['a','b','a','c'] → Output: { a:2, b:1, c:1 }
// **Hint:** Works for numbers/strings — stringify if needed.
// ---

const arr5 = ['a','b','a','c'];
const freq = arr5.reduce((acc,v)=>{acc[v]=(acc[v]||0)+1;return acc;},{});
console.log(freq);