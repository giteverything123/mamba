function normalize(arr) {
  var a = arr[0], b = arr[1], c = arr[2], d = arr[3];
  var abc = Math.sqrt(a * a + b * b + c * c, 0.5);
  var aa = a / abc, bb = b / abc, cc = c / abc;
  if (d) {
    return [aa, bb, cc, d];
  } else {
    return [aa, bb, cc];
  }
}

export default normalize;