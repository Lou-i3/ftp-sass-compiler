// Modules
const ftp = require("basic-ftp");
const fs = require('fs');
var sass = require('sass');

// Local
const localPath = './files/';
const localPathSASS = localPath + "sass/";
const localPathCSS = localPath + "css/";


console.log('\n # # # convert.js # # # ');

console.log('Converting to css and writing expanded files');
sassEncoding('expanded');

console.log('Converting to css and writing compressed files');
sassEncoding('compressed');

console.log(' # # # END convert.js # # # ');

function sassEncoding(outputStyle) {
  if ( outputStyle == 'expanded' ) {
    pathCSS = localPathCSS + 'style.css';
  } else if ( outputStyle == 'compressed' ) {
    pathCSS = localPathCSS + 'min/style.min.css';
  }
  try {
    var result = sass.renderSync({  file: localPathSASS + 'style.scss',
                                    outFile: pathCSS,
                                    outputStyle: outputStyle,
                                    sourceMap: true,
                                });

    // No errors during the compilation, write this result on the disk
    console.log('Converted to css');
    try {
      fs.writeFileSync( pathCSS , result.css);
      fs.writeFileSync( pathCSS + '.map', result.map );
      console.log(`files '${pathCSS}' & '${pathCSS}.map' written on disk`);
    } catch (err) {
      console.log('Error while writing file');
      throw err;
    }
  } catch (err) {
    console.log('Error while converting to css');
    throw err;
  }

}
