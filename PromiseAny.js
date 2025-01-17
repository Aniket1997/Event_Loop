const downloadFile = require('./downloadFileModule');
 
 const file = [
     downloadFile('file_1.pdf',3004),
     downloadFile('file_2.pdf',1004,true), // this will come
     downloadFile('file_3.pdf',2004),
 ]
 
 Promise.any(file).then((res)=>console.log(res)).catch(err=>console.log(err));

//check the resolve or reject 