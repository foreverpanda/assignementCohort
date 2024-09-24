/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(waitingTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(waitingTime);
    }, waitingTime[0] * 1000);
  });
}

function wait2(waitingTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(waitingTime); //resolve only takes one argument
    }, waitingTime[1] * 1000);
  });
}

function wait3(waitingTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, waitingTime[2] * 1000);
  });
}

async function calculateTime(t1, t2, t3) {
  let time1 = new Date();
  let prevTime = time1.getTime();
  await wait1([t1, t2, t3]).then(wait2).then(wait3);

  let time2 = new Date();
  let newTime = time2.getTime();
  return newTime - prevTime;
}

module.exports = calculateTime;
