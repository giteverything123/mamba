function setMatrix(matrixName, setFormat, matrix) {
  var gl = this.gl;
  var program = this.program;
  var m = gl.getUniformLocation(program, matrixName);
  switch(setFormat) {
    case 3:
      gl.uniformMatrix3fv(m, false, matrix);
      break;
    case 4:
      gl.uniformMatrix4fv(m, false, matrix);
      break;
    default:
      console.log('setFormat这个参数应该传3或者4')
  }
}

export default setMatrix;