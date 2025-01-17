const downloadFile = require('./downloadFileModule');

const file = [
    downloadFile('file_1.pdf',3004,),
    downloadFile('file_2.pdf',1004,true), // this will come first
    downloadFile('file_3.pdf',2004),
]

Promise.race(file).then((res)=>console.log(res)).catch(err=>console.log(err));

//output
//file_2.pdf, downloaded successfully

//Promise.race is a method that takes an array of promises and 
//returns a single promise that resolves or rejects as soon as 
//the first promise in the array settles (either fulfills or rejects), with its value or reason.
//only check the timing