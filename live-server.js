const liveServer = require('live-server');
var params = {
  port: 8080, 
  host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP. 
  root: "./", 
  open: false,  
  ignore: 'node_modules',
};
liveServer.start(params);