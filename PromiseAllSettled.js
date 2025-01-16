const downloadFiles = (fileName,delay,isRejected=true)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isRejected)
            {
                resolve(`${fileName}, Downloaded`)
            }else{
                reject(`${fileName}, something went wrong`)
            }
        },delay)
    })
}

const files = [
    downloadFiles('file_1.pdf',2000),
    downloadFiles('file_2.pdf',1000,false),
    downloadFiles('file_3.pdf',3000,false),
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
