let insides = 0;
let outsides = 0;
const samples = 1000000;

let points = [];
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < samples; i++) {
    const x = Math.random() * 2 - 1.0;
    const y = Math.random() * 2 - 1.0;
    const c = Math.sqrt(x * x + y * y);
    const px = map(x, -1.0, 1.0, 0, 400);
    const py = map(y, -1.0, 1.0, 0, 400);

    points.push({ x, y, px, py, c });

    if (c <= 1) {
      insides++;
    } else {
      outsides++;
    }
  }
  const ratio = insides / (insides + outsides);
  console.log(`insides: ${insides}, outsides: ${outsides}`);
  console.log(`ratio * 4: ${4 * ratio}`);
  console.log(`Pi: ${Math.PI}`);
}

function draw() {
  background(220);

  if (samples > 100000) {
    console.log('too many samples! Skipping rendering');
    return;
  }

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    if (p.c <= 1) {
      stroke("purple");
    } else {
      stroke("green");
    }

    point(p.px, p.py);
  }
  noLoop();
}
