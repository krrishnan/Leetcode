/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bullCount = 0;
  let cowCount = 0;
  //ACount
  for (let i = 0; i < secret.length; ) {
    const AChar = secret.charAt(i);
    const isBullFound = guess.charAt(i) === AChar;
    if (!isBullFound) {
      i++;
      continue;
    }
    bullCount++;
    secret = secret.slice(0, i) + secret.slice(i + 1);
    guess = guess.slice(0, i) + guess.slice(i + 1);
  }

  //BCount
  for (let i = 0; i < secret.length; ) {
    const BChar = secret.charAt(i);
    const BCharIndexInGuess = guess.indexOf(BChar);
    const isCowFound = BCharIndexInGuess >= 0;

    if (!isCowFound) {
      i++;
      continue;
    }
    cowCount++;
    secret = secret.slice(0, i) + secret.slice(i + 1);
    guess =
      guess.slice(0, BCharIndexInGuess) + guess.slice(BCharIndexInGuess + 1);
  }

  return `${bullCount}A${cowCount}B`;
};