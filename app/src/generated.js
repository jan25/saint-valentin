import generatedLetters from './generated_letters.json';

let letters = new Map();

// Parse unicode chars
function sanitise(s) {
  return s.replace(/\\u(\w\w\w\w)/g, function(a,b) {
    var charcode = parseInt(b, 16);
    return String.fromCharCode(charcode);
  });
}

for (let l of generatedLetters) {
  const [prefix] = Object.keys(l);
  letters.set(
    sanitise(prefix),
    sanitise(l[prefix])
  );
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