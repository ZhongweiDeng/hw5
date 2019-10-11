function setup() {
  createCanvas(500, 400);
  noFill()
}

function draw() {
  
  for (var x = 40; x < width; x += 100) {
    for (var y = 20; y <= 80; y += 20) {
      rectMode(CENTER); // Set rectMode to CENTER
      rect(x, 200, y, y)
    }
  }
}
