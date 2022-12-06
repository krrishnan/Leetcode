/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const checkIsIsomorphic = (s, t) => {
  const store = {};
  keys = s.split("");
  values = t.split("");

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = values[i];

    if (store[key] && value !== store[key]) return false;
    store[key] = value;
  }
  return true;
};

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
  const valuea = checkIsIsomorphic(s, t);
  const valueb = checkIsIsomorphic(t, s);

  return valuea && valueb;
};