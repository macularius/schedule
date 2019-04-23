var path = require('path');
 
module.exports = {
  entry: './application/kernel/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  }
};
 