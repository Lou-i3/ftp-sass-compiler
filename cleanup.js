// Modules
const fs = require('fs');

// Local
const localPath = './files/';
const localPathSASS = localPath + "sass/";
const localPathCSS = localPath + "css/";


console.log('\n # # # cleanup.js # # # ');

console.log('Cleaning the folders');
cleanFolder();

console.log('Creating CSS folder');
cssFolder();

console.log(' # # # END cleanup.js # # # ');

function cleanFolder(){

  // Deleting SASS Folder
  console.log(`\n ~ ~ ~ Checking & Deleting:  ~ ~ ~ \n\tSASS folder ${localPathSASS}`)
  try {
    fs.accessSync(localPathSASS, fs.F_OK);
    console.log(`${localPathSASS} already exists`);
    //Folder exists so let's delete it
    try {
      fs.rmdirSync(localPathSASS, {recursive: true} );

      console.log(`${localPathSASS} is deleted!`);
    } catch (err) {
      console.log(`Couldn't delete ${localPathSASS}`);
      throw err;
    }

  } catch (err) {
    // Folder does not exist so ok
    console.log(`${localPathSASS} does not exist`);
    //console.log(err);
  }

  // Deleting CSS Folder
  console.log(`\n ~ ~ ~ Checking & Deleting:  ~ ~ ~ \n\tCSS folder ${localPathCSS}`)
  try {
    fs.accessSync(localPathCSS, fs.F_OK);
    console.log(`${localPathCSS} already exists`);
    //Folder exists so let's delete it
    try {
      fs.rmdirSync(localPathCSS, {recursive: true} );

      console.log(`${localPathCSS} is deleted!`);
    } catch (err) {
      console.log(`Couldn't delete ${localPathCSS}`);
      throw err;
    }

  } catch (err) {
    // Folder does not exist so ok
    console.log(`${localPathCSS} does not exist`);
  }
}

function cssFolder(){
  if (!fs.existsSync(localPathCSS)){
    fs.mkdirSync(localPathCSS);
    console.log(`${localPathCSS} created.`)
    fs.mkdirSync(localPathCSS+'min/');
    console.log(`${localPathCSS}min/ created.`)
  }
}
