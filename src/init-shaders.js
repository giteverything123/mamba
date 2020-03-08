function initShaders(vertexShaderString, fragmentShaderString) {
  var vertShdr;
  var fragShdr;
  gl = this.gl;
  if (!vertexShaderString) {
    alert("未输入顶点着色器代码");
    return -1;
  } else {
    vertShdr = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShdr, vertexShaderString);
    gl.compileShader(vertShdr);
    if (!gl.getShaderParameter(vertShdr, gl.COMPILE_STATUS)) {
      var msg = "顶点着色器编译失败,错误信息如下:" +
        "<pre>" + gl.getShaderInfoLog(vertShdr) + "</pre>";
      alert(msg);
      return -1;
    }
  }

  if (!fragmentShaderString) {
    alert("未输入片元着色器代码");
    return -1;
  } else {
    fragShdr = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShdr, fragmentShaderString);
    gl.compileShader(fragShdr);
    if (!gl.getShaderParameter(fragShdr, gl.COMPILE_STATUS)) {
      var msg = "片元着色器编译失败,错误信息如下:" +
        "<pre>" + gl.getShaderInfoLog(fragShdr) + "</pre>";
      alert(msg);
      return -1;
    }
  }

  var program = gl.createProgram();
  gl.attachShader(program, vertShdr);
  gl.attachShader(program, fragShdr);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var msg = "着色程序链接失败,错误信息如下:" +
      "<pre>" + gl.getProgramInfoLog(program) + "</pre>";
    alert(msg);
    return -1;
  }
  gl.useProgram(program);
  this.program = program;
  return program;
}

export default initShaders;