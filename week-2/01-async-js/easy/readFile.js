let fs = require("fs");
function readBigFile() {
  return new Promise((resolve) => {
    fs.readFile("testFile.txt", "utf-8", (err, data) => {
      console.log(data);
      resolve("\n\n\nData read Successfully\n\n\n");
    });
  });
}

function cb(text){
    console.log(text)
}

readBigFile().then(cb)


// async function main(){
//     let value = await  readBigFile();
//     cb("\n\n\nData read Successfully\n\n\n")

// }

// main()