const keys = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm"
]

let distance = new Map();

function* chars() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < keys[i].length; ++j) {
      yield [i, j, keys[i][j]];
    }
  }
}

for (let a of chars()) {
  const [ax, ay, ac] = a;
  for (let b of chars()) {
    const [bx, by, bc] = b;
    distance[`${ac}:${bc}`] = Math.abs(ax - bx) + Math.abs(ay - by);
  }
}

export default function getDistance(a, b) {
  let dist = 10;
  if (distance.has(`${a}:${b}`)) {
    dist = distance.get(`${a}:${b}`);
  }
  return dist;
}