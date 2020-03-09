function rotateY(theta) {
  theta = Math.PI * theta / 180;
  var cos = Math.cos(theta);
  var sin = Math.sin(theta);
  return new Float32Array([
    cos, 0, -sin, 0,
    0, 1, 0, 0,
    sin, 0, cos, 0,
    0, 0, 0, 1
  ])
}

export { rotateY }