function render(num) {
  var gl = this.gl;
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER);
  gl.drawArrays( gl.TRIANGLES, 0, num);
}

export default render;