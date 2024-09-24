//file read , data store in vairable clean write

let data;
let filteredData = "";
const fs = require("fs");

function fileReadingFn(fileName) {
  return new Promise((resolve) => {
    fs.readFile(fileName, "utf-8", (err, content) => {
      if (!err) {
        data = content;
        resolve("File Read Successfully, Cleaning File");
      }
    });
  });
}

function fileWritingFn(fileName, newData) {
  return new Promise((resolve) => {
    fs.writeFile(fileName, newData, (err, content) => {
      if (!err) {
        resolve("File has been cleaned");
      }
    });
  });
}

async function cleaner() {
  await fileReadingFn("./file.txt");
  console.log("Fetched file : ", data);
  removeSpace(data);
  console.log("Filered Data : ", filteredData);
  fileWritingFn("./file.txt", filteredData);
}

cleaner();

function charCheck(data) {
  let ch = data.charCodeAt(0);
  if (
    (ch >= 97 && ch <= 122) ||
    (ch >= 65 && ch <= 90) ||
    (ch >= 48 && ch <= 57)
  ) {
    return true;
  } else {
    return false;
  }
}

function removeSpace(data) {
  for (let i = 0; i < data.length; i++) {
    if (charCheck(data[i])) {
      filteredData = filteredData.concat(data[i]);

      if (data[i + 1] === " ") {
        filteredData = filteredData.concat(" ");
      }
    } else {
      continue;
    }
  }
}
