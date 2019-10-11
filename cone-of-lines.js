function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (var i = 10; i <= 400; i = i + 8) {
    line(200, 0, i, 400);
  }
}
