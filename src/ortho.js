function ortho(left, right, bottom, top, near, far) {
  return new Float32Array([
    2 / (right - left), 0, 0, 0,
    0, 2 / (top - bottom), 0, 0,
    0, 0, 2 / (near - far), 0,
    (right + left) / (left - right), (top + bottom) / (bottom - top), (far + near) / (near - far), 1.0 
  ]);
}

export default ortho;