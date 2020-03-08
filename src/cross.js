function cross(arr1, arr2) {
  var a1 = arr1[0], a2 = arr1[1], a3 = arr1[2],
      b1 = arr2[0], b2 = arr2[1], b3 = arr2[2];
  return [
    a2 * b3 - a3 * b2,
    a3 * b1 - a1 * b3,
    a1 * b2 - a2 * b1
  ]
}

export default cross;