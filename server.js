// const fs = require('fs');

// // Timers Phase
// setTimeout(() => {
//   console.log('1. setTimeout: Timers phase');
// }, 0);

// // Check Phase
// setImmediate(() => {
//   console.log('2. setImmediate: Check phase');
// });

// // I/O Callbacks Phase
// fs.readFile(__filename, () => {
//   console.log('3. fs.readFile: I/O callbacks phase');

//   setTimeout(() => {
//     console.log('4. setTimeout inside fs.readFile: Timers phase');
//   }, 0);

//   setImmediate(() => {
//     console.log('5. setImmediate inside fs.readFile: Check phase');
//   });

//   // Microtasks
//   Promise.resolve().then(() => {
//     console.log('6. Promise inside fs.readFile: Microtasks');
//   });

//   process.nextTick(() => {
//     console.log('7. process.nextTick inside fs.readFile: Microtasks');
//   });
// });

// // Microtasks
// Promise.resolve().then(() => {
//   console.log('8. Promise outside fs.readFile: Microtasks');
// });

// process.nextTick(() => {
//   console.log('9. process.nextTick outside fs.readFile: Microtasks');
// });

// console.log('10. Synchronous code: Main thread');

// //output
// // 10. Synchronous code: Main thread
// // 9. process.nextTick outside fs.readFile: Microtasks
// // 8. Promise outside fs.readFile: Microtasks
// // 1. setTimeout: Timers phase
// // 2. setImmediate: Check phase
// // 3. fs.readFile: I/O callbacks phase
// // 7. process.nextTick inside fs.readFile: Microtasks
// // 6. Promise inside fs.readFile: Microtasks
// // 4. setTimeout inside fs.readFile: Timers phase
// // 5. setImmediate inside fs.readFile: Check phase


// const fs = require('fs');

// Timers Phase
// setTimeout(() => {
//   console.log('1. setTimeout: Timers phase');

//   Promise.resolve().then(() => {
//     console.log('2. Promise inside setTimeout: Microtasks');
//   });

//   setImmediate(() => {
//     console.log('3. setImmediate inside setTimeout: Check phase');
//   });
// }, 0);

// // Check Phase
// setImmediate(() => {
//   console.log('4. setImmediate: Check phase');

//   process.nextTick(() => {
//     console.log('5. process.nextTick inside setImmediate: Microtasks');
//   });

//   setTimeout(() => {
//     console.log('6. setTimeout inside setImmediate: Timers phase');
//   }, 0);
// });

// // I/O Callbacks Phase
// fs.readFile(__filename, () => {
//   console.log('7. fs.readFile: I/O callbacks phase');

//   setTimeout(() => {
//     console.log('8. setTimeout inside fs.readFile: Timers phase');
//   }, 0);

//   setImmediate(() => {
//     console.log('9. setImmediate inside fs.readFile: Check phase');
//   });

//   // Microtasks
//   Promise.resolve().then(() => {
//     console.log('10. Promise inside fs.readFile: Microtasks');
//   });

//   process.nextTick(() => {
//     console.log('11. process.nextTick inside fs.readFile: Microtasks');
//   });
// });

// // Microtasks
// Promise.resolve().then(() => {
//   console.log('12. Promise outside fs.readFile: Microtasks');
// });

// process.nextTick(() => {
//   console.log('13. process.nextTick outside fs.readFile: Microtasks');
// });

// console.log('14. Synchronous code: Main thread');

// 14. Synchronous code: Main thread
// 13. process.nextTick outside fs.readFile: Microtasks
// 12. Promise outside fs.readFile: Microtasks
// 1. setTimeout: Timers phase
// 2. Promise inside setTimeout: Microtasks
// 3. setImmediate inside setTimeout: Check phase
// 4. setImmediate: Check phase
// 5. process.nextTick inside setImmediate: Microtasks
// 6. setTimeout inside setImmediate: Timers phase
// 7. fs.readFile: I/O callbacks phase
// 11. process.nextTick inside fs.readFile: Microtasks
// 10. Promise inside fs.readFile: Microtasks
// 9. setImmediate inside fs.readFile: Check phase
// 8. setTimeout inside fs.readFile: Timers phase


const fs = require('fs');

// Timers Phase
setTimeout(() => {
  console.log('1. setTimeout: Timers phase');

  process.nextTick(() => {
    console.log('2. process.nextTick inside setTimeout: Microtasks');
  });

  setImmediate(() => {
    console.log('3. setImmediate inside setTimeout: Check phase');
  });

  Promise.resolve().then(() => {
    console.log('4. Promise inside setTimeout: Microtasks');
  });
}, 0);

// Check Phase
setImmediate(() => {
  console.log('5. setImmediate: Check phase');

  setTimeout(() => {
    console.log('6. setTimeout inside setImmediate: Timers phase');
  }, 0);

  Promise.resolve().then(() => {
    console.log('7. Promise inside setImmediate: Microtasks');
  });

  process.nextTick(() => {
    console.log('8. process.nextTick inside setImmediate: Microtasks');
  });
});

// I/O Callbacks Phase
fs.readFile(__filename, () => {
  console.log('9. fs.readFile: I/O callbacks phase');

  setImmediate(() => {
    console.log('10. setImmediate inside fs.readFile: Check phase');
  });

  setTimeout(() => {
    console.log('11. setTimeout inside fs.readFile: Timers phase');
  }, 0);

  Promise.resolve().then(() => {
    console.log('12. Promise inside fs.readFile: Microtasks');
  });

  process.nextTick(() => {
    console.log('13. process.nextTick inside fs.readFile: Microtasks');
  });
});

// Microtasks
Promise.resolve().then(() => {
  console.log('14. Promise outside fs.readFile: Microtasks');
});

process.nextTick(() => {
  console.log('15. process.nextTick outside fs.readFile: Microtasks');
});

console.log('16. Synchronous code: Main thread');

// 16. Synchronous code: Main thread
// 15. process.nextTick outside fs.readFile: Microtasks
// 14. Promise outside fs.readFile: Microtasks
// 