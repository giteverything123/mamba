if(process.env.NODE_ENV === 'production'){
  module.exports = require('./dist/mamba.min.js');
} else {
  module.exports = require('./dist/mamba.js');
}