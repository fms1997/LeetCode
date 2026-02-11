const checkIfPangram = (sentence) => {
  const letters = new Set(sentence);
  return letters.size === 26;
};



console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
// true

console.log(checkIfPangram("hello world"));
// false
