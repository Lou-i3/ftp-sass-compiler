// Modules
const ftp = require("basic-ftp");
const fs = require('fs');

// Config
const configFile = 'config.txt';
config = new Object();
getCongig();

// Local
const localPath = __dirname + '/files/';
const localPathSASS = localPath + "sass/";
const localPathCSS = localPath + "css/";

// Remote
const remotePath = "www/wp-content/themes/" + config.themeFolder + "/assets/";
const remotePathSASS = remotePath + "sass/";
const remotePathCSS = remotePath + "css/";



console.log('\n # # # download.js # # # ');

console.log('Downloading the files');
ftpConnection('down');

console.log(' # # # END download.js # # # ');

async function ftpConnection(action) {

  const client = new ftp.Client();
  client.ftp.verbose = false;
  try {
    await client.access({
      host: config.host,
      user: config.user,
      password: config.password,
      //secure: true
    })
    //console.log(await client.list())
    //await client.uploadFrom("README.md", "README_FTP.md")
    //await client.list("www/wp-content/themes/valensi-patrimoine/test-ftp/sass/")

    if (action == 'down') {
      await client.downloadToDir(localPathSASS, remotePathSASS)
      console.log('Files downloaded');

    }
    if (action == 'up') {
      await client.uploadFromDir(localPathCSS, remotePathCSS)
      console.log('Files uploaded');
    }
  } catch (err) {
    console.log(err)
  }
  client.close()
}

function getCongig() {
  try {
    // read contents of the file
    const data = fs.readFileSync(configFile, 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    lines.forEach( (line) => {
      if ( line.includes('host: ') ) {
        config.host = line.replace('host: ', '');
      }
      if ( line.includes('user: ') ) {
        config.user = line.replace('user: ', '');
      }
      if ( line.includes('password: ') ) {
        config.password = line.replace('password: ', '');
      }
      if ( line.includes('theme: ') ) {
        config.themeFolder = line.replace('theme: ', '');
      }
    });
  } catch (err) {
    console.error(err);
  }
}
