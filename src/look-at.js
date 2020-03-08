import normalize from './normalize';
import cross from './cross';
function lookAt(eye, at , up) {
  var vpn = [at[0] - eye[0], at[1] - eye[1], at[2] -eye[2]];
  var n = normalize(vpn);
  var u = normalize(cross(up, n));
  var v = normalize(cross(n, u));
  var x = eye[0], y = eye[1], z = eye[2];
  return new Float32Array([
    u[0], v[0], n[0], 0,
    u[1], v[1], n[1], 0,
    u[2], v[2], n[2], 0,
    -x * u[0] - y * u[1] - z * u[2],
    -x * v[0] - y * v[1] - z * v[2],
    -x * n[0] - y * n[1] - z * n[2],
    1.0
  ]);
}

export default lookAt;