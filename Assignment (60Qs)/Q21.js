function printKeyValues(obj) {
  for (const k in obj) console.log(k, obj[k]);
}

printKeyValues({ name: 'Aman', age: 22 });
