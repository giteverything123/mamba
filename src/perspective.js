function perspective(fovy, aspect, near, far) {
  var top = near * Math.tan(Math.PI * fovy / 180);
  var right = top * aspect;
  return new Float32Array([
    near / right, 0, 0, 0,
    0, near / top, 0, 0,
    0, 0, (near-far) / (far - near), -1,
    0, 0, 2 * far * near / (near - far), 0
  ]);
}

return perspective;