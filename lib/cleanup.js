
// Modules
const fs = require('fs');

class Cleanup {
  constructor(filesFolder = __dirname ) {

    this.localPath = filesFolder + '/files/';
    this.localPathCSS = this.localPath + "css/";
  }

  deleteFiles() {
    // Checks if /files/ exists and deletes it
    console.log(` - - - Deleting ${this.localPath} - - - `);
    try {
      // Try to access /files/
      fs.accessSync(this.localPath, fs.F_OK);
      console.log(`${this.localPath} found`);

      // Folder exists so let's delete it
      try {
        fs.rmdirSync(this.localPath, {recursive: true} );
        console.log(`${this.localPath} deleted`);

      } catch (err) {
        console.log(`Couldn't delete ${this.localPath}`);
        throw err;
      }

    } catch (err) {
      // Folder does not exist so ok
      console.log(`${this.localPath} does not exist`);
      //console.log(err);
    }
  }

  createFiles() {
    // Checks if /files/css/min/ exists and creates it
    console.log(` - - - Creating ${this.localPathCSS}/min/ - - - `);
    if ( !fs.existsSync( this.localPath ) ) {
      // Creating /files/
      fs.mkdirSync( this.localPath );
      console.log(`${this.localPath} created.`);
      // Creating /files/CSS/
      fs.mkdirSync( this.localPathCSS );
      console.log(`${this.localPathCSS} created.`)
      // Creating /files/CSS/min/
      fs.mkdirSync(this.localPathCSS+'min/');
      console.log(`${this.localPathCSS}min/ created.`)
    } else {
      this.deleteFiles();
      this.createFiles();
    }

  }

}

module.exports = Cleanup;
