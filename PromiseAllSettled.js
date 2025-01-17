const downloadFile = require('./downloadFileModule');

const files = [
    downloadFile('file_1.pdf',2000),
    downloadFile('file_2.pdf',1000,false),
    downloadFile('file_3.pdf',3000,false),
]

Promise.allSettled(files).then((res)=>console.log(res)).catch((err)=>console.log(err));
//output
// [
//     { status: 'fulfilled', value: 'file_1.pdf, Downloaded' },
//     { status: 'rejected', reason: 'file_2.pdf, something went wrong' },
//     { status: 'rejected', reason: 'file_3.pdf, something went wrong' }
//   ]
//Promise.allSettled is a method that takes an array 
//of promises and returns a single promise that resolves 
// with an array of objects describing the outcome (fulfilled or rejected) of each promise,
//  regardless of whether they succeed or fail.
