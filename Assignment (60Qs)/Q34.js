function isEmptyObject(obj) {
  if (obj == null) return true;
  return Object.keys(obj).length === 0;
}

console.log(isEmptyObject({}));
