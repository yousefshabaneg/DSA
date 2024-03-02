// Characters frequencies: [ASCII LETTERS ONLY]
// ex: 'internet' --> {i: 1, n: 2, t: 2, e: 2, r: 1}

function getCharactersFrequencies(word: string) {
  const frequencies: any = {};
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!frequencies[char]) {
      frequencies[char] = 1;
    } else {
      frequencies[char]++;
    }
  }

  return frequencies;
}

console.log(getCharactersFrequencies("internet"));
