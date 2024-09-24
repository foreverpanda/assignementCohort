const fs = require("fs");

function writeingIntoFile(data) {
  return new Promise((resolve) => {
    fs.writeFile("testFile.txt", data, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
      resolve();
    });
  });
}




async function main(){

     writeingIntoFile("kaise ho bhaiyua");
    


}

main()