// var cvs = document.createElement('canvas');
// cvs.width = 300;
// cvs.height = 200;
// document.body.appendChild(cvs);
// var Mamba = new mamba();
var canvasId = 0;
function createCanvas(width, height) {
  var cvs = document.createElement('canvas');
  cvs.width = width;
  cvs.height = height;
  document.body.appendChild(cvs);
  this.canvas = cvs;
  this.canvas.id = 'manba-' + canvasId;
  canvasId++;
  return cvs;
}

export default createCanvas;