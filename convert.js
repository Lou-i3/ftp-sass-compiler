// Modules
const ftp = require("basic-ftp");
const fs = require('fs');
var sass = require('sass');

// Local
const localPath = './files/';
const localPathSASS = localPath + "sass/";
const localPathCSS = localPath + "css/";


console.log('\n # # # convert.js # # # ');

console.log('Converting to css and writing file style.css');
sassEncoding();

console.log(' # # # END convert.js # # # ');

function sassEncoding() {

  try {
    var result = sass.renderSync({  file: localPathSASS + 'style.scss',
                                    outFile: localPathCSS + 'style.css',
                                    outputStyle: 'expanded',
                                });

    // No errors during the compilation, write this result on the disk
    console.log('Converted to css');
    try {
      fs.writeFileSync(localPathCSS + 'style.css', result.css);
      console.log(`file '${localPathCSS}style.css' written on disk`);
    } catch (err) {
      console.log('Error while writing file');
      throw err;
    }
  } catch (err) {
    console.log('Error while converting to css');
    throw err;
  }

}
