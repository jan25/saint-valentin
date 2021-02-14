import generatedLetters from './generated_letters.json';

let letters = new Map();

for (let l of generatedLetters) {
  const [prefix] = Object.keys(l);
  letters.set(prefix, l[prefix]);
}

const prefixes = Array.from(letters.keys());
export function getPrefixes() {
  return prefixes;
}

export function getRandomPrefix() {
  return prefixes[parseInt(Math.random() * (prefixes.length + 1))];
}

export function getGenerated(prefix) {
  return letters.get(prefix);
}