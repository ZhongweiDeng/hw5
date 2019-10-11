function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (var i = 1; i <= 400; i = i + 5) {
    line(i, 0, i, i*2);
  }
}
