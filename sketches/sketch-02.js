const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

      //Centre of the canvas
    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;

    const radius = width * 0.25;

    let x, y;
    let num = 40;
   
    for (let i = 0; i < num; i++) {
      let newAngle = math.degToRad(360 / num) * i;

      x = cx + radius * Math.sin(newAngle);
      y = cy + radius * Math.cos(newAngle);

      context.save();

      context.translate(x ,y);
      context.rotate(-newAngle);
      context.scale(random.range(.5,2), random.range(.5,2));
      context.fillStyle = "black";

      context.beginPath();
      context.rect(-w * 0.5 ,random.range(0, -h *0.5) ,w ,h)
      context.fill();
      context.stroke();

      context.restore();

      context.save();

      context.translate(cx, cy);
      context.rotate(-newAngle);

      context.lineWidth = random.range(1,15);

      context.beginPath();
      context.arc(0, 0, radius * random.range(.5,1.5), newAngle * random.range(1,-8), -newAngle * random.range(1,5));
      context.stroke();
      context.restore();
    }
    
  };
};

canvasSketch(sketch, settings);
