/**
 * @param {string} s
 * @return {string}
 */
const updateResult = (stack, result) => {
  let subString = "";
  let count = "";
  while (stack[stack.length - 1] !== "[") {
    subString = stack.pop() + subString;
  }
  stack.pop();
  while (!isNaN(stack[stack.length - 1])) {
    count = stack.pop() + count;
  }
  const decodedString = subString.repeat(count).split("");
  stack = stack.concat(decodedString);
  return stack;
};
var decodeString = function(s) {
    let stack = [];
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const CHAR = s[i];
    const isSubStringEnd = CHAR === "]";
    if (!isSubStringEnd) stack.push(CHAR);
    if (isSubStringEnd) stack = updateResult(stack, result);
  }
  return stack.reduce((acc, char) => acc + char);
};