function mult(mat1, mat2) {
  var x0 = mat1[0], y0 = mat2[0],
      x1 = mat1[4], y1 = mat2[4],
      x2 = mat1[8], y2 = mat2[8],
      x3 = mat1[12], y3 = mat2[12],
      x4 = mat1[1], y4 = mat2[1],
      x5 = mat1[5], y5 = mat2[5],
      x6 = mat1[9], y6 = mat2[9],
      x7 = mat1[13], y7 = mat2[13],
      x8 = mat1[2], y8 = mat2[2],
      x9 = mat1[6], y9 = mat2[6],
      x10 = mat1[10], y10 = mat2[10],
      x11 = mat1[14], y11 = mat2[14],
      x12 = mat1[3], y12 = mat2[3],
      x13 = mat1[7], y13 = mat2[7],
      x14 = mat1[11], y14 = mat2[11],
      x15 = mat1[15], y15 = mat2[15];
  var m0 = y0 * x0 + y4 * x1 + y8 * x2 + y12 * x3,
      m1 = y0 * x4 + y4 * x5 + y8 * x6 + y12 * x7,
      m2 = y0 * x8 + y4 * x9 + y8 * x10 + y12 * x11,
      m3 = y0 * x12 + y4 * x13 + y8 * x14 + y12 * x15,
      m4 = y1 * x0 + y5 * x1 + y9 * x2 + y13 * x3,
      m5 = y1 * x4 + y5 * x5 + y9 * x6 + y13 * x7,
      m6 = y1 * x8 + y5 * x9 + y9 * x10 + y13 * x11,
      m7 = y1 * x12 + y5 * x13 + y9 * x14 + y13 * x15,
      m8 = y2 * x0 + y6 * x1 + y10 * x2 + y14 * x3,
      m9 = y2 * x4 + y6 * x5 + y10 * x6 + y14 * x7,
      m10 = y2 * x8 + y6 * x9 + y10 * x10 + y14 * x11,
      m11 = y2 * x12 + y6 * x13 + y10 * x14 + y14 * x15,
      m12 = y3 * x0 + y7 * x1 + y11 * x2 + y15 * x3,
      m13 = y3 * x4 + y7 * x5 + y11 * x6 + y15 * x7,
      m14 = y3 * x8 + y7 * x9 + y11 * x10 + y15 * x11,
      m15 = y3 * x12 + y7 * x13 + y11 * x14 + y15 * x15;
  return new Float32Array([
    m0, m4, m8, m12,
    m1, m5, m9, m13,
    m2, m6, m10, m14,
    m3, m7, m11, m15
  ]);
}

export default mult;