function setAttr(attrName, attrArr, number, format, stride, offset) {
  var gl = this.gl;
  var attr = gl.getAttribLocation(this.program, attrName);
  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, attrArr, gl.STATIC_DRAW);
  gl.vertexAttribPointer(attr, number, format, false, stride, offset);
  gl.enableVertexAttribArray(attr);
}

export default setAttr;