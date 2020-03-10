function mult(mat1, mat2) {
  var x0 = mat1[0], y0 = mat2[0],
      x1 = mat1[1], y1 = mat2[1],
      x2 = mat1[2], y2 = mat2[2],
      x3 = mat1[3], y3 = mat2[3],
      x4 = mat1[4], y4 = mat2[4],
      x5 = mat1[5], y5 = mat2[5],
      x6 = mat1[6], y6 = mat2[6],
      x7 = mat1[7], y7 = mat2[7],
      x8 = mat1[8], y8 = mat2[8],
      x9 = mat1[9], y9 = mat2[9],
      x10 = mat1[10], y10 = mat2[10],
      x11 = mat1[11], y11 = mat2[11],
      x12 = mat1[12], y12 = mat2[12],
      x13 = mat1[13], y13 = mat2[13],
      x14 = mat1[14], y14 = mat2[14],
      x15 = mat1[15], y15 = mat2[15];
  var m0 = x0 * y0 + x1 * y4 + x2 * y8 + x3 * y12,
      m1 = x4 * y0 + x5 * y4 + x6 * y8 + x7 * y12,
      m2 = x8 * y0 + x9 * y4 + x10 * y8 + x11 * y12,
      m3 = x12 * y0 + x13 * y4 + x14 * y8 + x15 * y12,
      m4 = x0 * y1 + x1 * y5 + x2 * y9 + x3 * y13,
      m5 = x4 * y1 + x5 * y5 + x6 * y9 + x7 * y13,
      m6 = x8 * y1 + x9 * y5 + x10 * y9 + x11 * y13,
      m7 = x12 * y1 + x13 * y5 + x14 * y9 + x15 * y13,
      m8 = x0 * y2 + x1 * y6 + x2 * y10 + x3 * y14,
      m9 = x4 * y2 + x5 * y6 + x6 * y10 + x7 * y14,
      m10 = x8 * y2 + x9 * y6 + x10 * y10 + x11 * y14,
      m11 = x12 * y2 + x13 * y6 + x14 * y10 + x15 * y14,
      m12 = x0 * y3 + x1 * y7 + x2 * y11 + x3 * y15,
      m13 = x4 * y3 + x5 * y7 + x6 * y11 + x7 * y15,
      m14 = x8 * y3 + x9 * y7 + x10 * y11 + x11 * y15,
      m15 = x12 * y3 + x13 * y7 + x14 * y11 + x15 * y15;
  return new Float32Array([
    m0, m4, m8, m12,
    m1, m5, m9, m13,
    m2, m6, m10, m14,
    m3, m7, m11, m15
  ]);
}

export default mult;