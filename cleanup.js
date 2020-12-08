// Modules
const fs = require('fs');

// Local
const localPath = './files/';
const localPathSASS = localPath + "sass/";
const localPathCSS = localPath + "css/";


console.log('\n # # # cleanup.js # # # ');

console.log('Cleaning the folders');
cleanFolder();

console.log('Making sure CSS folder exists');
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

  // Make sur CSS folder present
  console.log(`\n ~ ~ ~ Deleting & Creating:  ~ ~ ~ \n\tCSS folder ${localPathCSS}`)
  try {
    fs.accessSync(localPathCSS + 'style.css', fs.F_OK);
    console.log(`file ${localPathCSS}style.css exists already.`);
    console.log("Let's deleted it");

    //file exists
    try {
      fs.unlinkSync(localPathCSS + 'style.css');
      console.log(`successfully deleted ${localPathCSS}style.css`);
    } catch (err) {
      console.log(err);
    }

  } catch (err) {
    console.log(`file ${localPathCSS}style.css does not exist.`);
  }
}

function cssFolder(){
  if (!fs.existsSync(localPathCSS)){
    fs.mkdirSync(localPathCSS);
  }
}
