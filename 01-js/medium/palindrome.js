/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

//charCodeAt(0) likhna jaruri hai kyuki javascript khud se hi ASCII code mai convert nahi krta hai data ko wo, as a string hi trea krega while comparison agar hum ascii se compare kr rahe hai to ye work nahi krega until we are converting it to ascii code on our own

// function checkalpha(ch) {
//   const code = ch.charCodeAt(0);  
//   return (
//     (code >= 65 && code <= 90) || // A-Z
//     (code >= 97 && code <= 122) || // a-z
//     (code >= 48 && code <= 57) // 0-9
//   );
// }

function checkalpha(arg) {
  let ch = arg;
  // console.log(ch);
  if (
    (ch >= "A" && ch <= "Z") || // A-Z
    (ch >= "a" && ch <= "z") || // a-z
    (ch >= "0" && ch <= "9") // 0-9
  ) {
    return true;
  }
  return false;
}

function isPalindrome(mstr) {
  const str = mstr.toLowerCase().trim();

  let i = 0,
    j = str.length - 1;
  console.log("Working on", str);

  while (i <= j) {
    if (!checkalpha(str[i])) {
      i++;
    } else if (!checkalpha(str[j])) {
      j--;
    } else if (str[i] == str[j]) {
      i++;
      j--;
    } else if (str[i] != str[j]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
