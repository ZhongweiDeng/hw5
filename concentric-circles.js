function setup() {
  createCanvas(400, 400);
  noFill()
  strokeWeight(0.9)
}

function draw() {
  for (var i = 15; i <= 400; i = i + 9) {
    ellipse(200,200,i);
  }
}
