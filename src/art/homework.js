import { makeNoise3D } from "fast-simplex-noise";
import { hsl, gray } from "../color.js";

let n = makeNoise3D();

/**
 * I call this shade function once for every pixel in the image, and 
 * set the color equal to whatever you return.
 * 
 * I call it 30 times a second so you can animate things
 * 
 * @param x - The x position in the image, from 0 (left) to 1 (right)
 * @param y - The y position in the image, from 0 (top) to 1 (bottom)
 * @param t - The time passed, in seconds
 * @returns The RGB color to display at the x,y location at time t
 */
//The background is set a green color
function shade(x, y, t) {
    return [0.27,0.57,0.38];
}

/**
 * I call this draw function 30 times per second.
 * @param ctx - The 2d drawing context
 * @param t -The time in seconds
 */
function draw(ctx, t) {
    //See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'white';

//To draw the Santa's hat
    ctx.beginPath();

  // Point A
  ctx.moveTo(185, 150);
  
  // Point B
  ctx.lineTo(95, 150);
  
  // Point C
  ctx.lineTo(135, 25);
  
  // Join C & A
  ctx.closePath()
  ctx.strokeStyle = "Black"
  ctx.stroke(); 
  ctx.fillStyle = 'Red'
  ctx.fill();
  
  //Santa's fllufy white ball at the end of his hat
  ctx.beginPath();
  ctx.arc(148, 23, 12, 0, 2*Math.PI);
  ctx.fillStyle = 'White'
  ctx.fill();
  ctx.strokeStyle = "Black"
  ctx.stroke(); 

  //The semi circle that is the Santa's face
  ctx.beginPath();
ctx.arc(140, 150, 45, 0, Math.PI);
ctx.fillStyle = 'Pink'
ctx.fill();

//The eyes are made by two small circles
ctx.beginPath();
ctx.arc(120, 160, 5, 0, 2*Math.PI);
ctx.fillStyle = 'Black'
ctx.fill();


ctx.beginPath();
ctx.arc(160, 160, 5, 0, 2*Math.PI);
ctx.fillStyle = 'Black'
ctx.fill();

//The grin on the face is by a white semi circle with a black outline
ctx.beginPath();
ctx.arc(140, 170, 15, 0, Math.PI);
ctx.strokeStyle = "Black"
ctx.stroke(); 
ctx.fillStyle = ' White'
ctx.fill();


//Santa's body is made of a red rectangle
ctx.fillStyle = 'Red';
ctx.fillRect(110, 195, 60, 70);
ctx.strokeRect(110, 195, 60, 70);


//Santa's beard is an inverted white triangle with a black outline
ctx.beginPath();
  
// Point A
ctx.moveTo(160, 194);

// Point B
ctx.lineTo(120, 194);

// Point C
ctx.lineTo(140, 240);

// Join C & A
ctx.closePath()
ctx.strokeStyle = "Black"
ctx.stroke(); 
ctx.fillStyle = 'White'
ctx.fill();

}


export default { name: "My Homework", shade, draw }

