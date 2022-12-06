/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const sKeys = s.split("");

  let lastIndex = -1;

  for (let i = 0; i < sKeys.length; i++) {
    console.log("T", t);
    const index = t.indexOf(sKeys[i]);
    if (index < 0) return false;

    lastIndex = index;
    t = t
      .split("")
      .splice(lastIndex + 1)
      .join("");
  }
  return true;
};