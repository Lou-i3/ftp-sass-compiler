
// Cleanup class
const Cleanup = require('./lib/cleanup.js');
let clean = new Cleanup(__dirname);

// Convert class
const Convert = require('./lib/convert.js');
let sass = new Convert(__dirname);

// Ftp class
const Ftp = require('./lib/ftp.js');
let ftp = new Ftp(__dirname);


// Execution
clean.deleteFiles();
clean.createFiles();

ftp.download().then(()=>{
  sass.sassEncoding('compressed')
}).then( () => {
  sass.sassEncoding('expanded')
}).then( () => {
  ftp.upload();
});
