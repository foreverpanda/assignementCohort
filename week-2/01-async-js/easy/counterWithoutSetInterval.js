let counter = 0;

// function sleep() {
//   counter++;

//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       resolve(counter);
//     }, 1000);
//   });
// }

// function cb(counter) {
//   console.log(counter);
//   sleep().then(cb);
// }
// sleep().then(cb);

function sleep(counter) {
  const sleeping = new Promise(function (resolve) {
    setTimeout(() => {
      console.log(counter);
      console.log("Reached the timeout end")
      resolve()
    }, 1000);
  });

  return sleeping;
}

async function main() {
  await sleep(counter);
 counter++;
  main();
}

main();


// agar hum setTimeout jo lagaya hai usme resolve nahi krenge to control back to main() nahi aayega aur program wahi pe terminate ho jaayega after printing one counter value;