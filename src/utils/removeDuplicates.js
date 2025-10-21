/**
 * Removes all duplicates from a given value.
 * If the value is a string, it is split into an array of characters.
 * If the value is an object, it is treated as an array.
 * If the value is of any other type, a TypeError is thrown.
 * @param {object|string} value - The value to remove duplicates from
 * @returns {object|string} The value with all duplicates removed. If the original value was a string, the returned value is a string. If the original value was an object, the returned value is an array.
 * @throws {TypeError} If the value is of any type other than string or object
 */
export function removeDuplicates(value) {
  let a;
  let type = typeof value;
  switch (type) {
    case "string":
      a = value.split("");
      break;
    case "object":
      a = value;
      break;
    default:
      throw new TypeError("Value must be of type string or object");
  }

  for (let i = a.length - 1; i > 0; i--) {
    let elem = a[i];
    for (let j = i - 1; j >= 0; j--) {
      if (elem == a[j]) {
        a.splice(j, 1);
      }
    }
  }
  return type === "object" ? a : a.join("");
}
