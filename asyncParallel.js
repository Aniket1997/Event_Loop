const async = require('async');
const downloadFiles = (filename,delay,isRejected)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isRejected)
            {
                reject(`${filename}, something went wrong`);
            }else{
                resolve(`${filename}, downloaded succefully in ${delay}s`)
            }
        }, delay);
    })
}

const files = ['file_1', 'file_2', 'file_3'];
const delays = [2000, 3000, 1000];
const isRejected = [false, false, false];

// Map files, delays, and isRejected into a single array of objects
const mappedObject = files.map((file, index) => ({
    file,
    delay: delays[index],
    isRejected: isRejected[index],
}));

// Create an array of functions for async.series
const expObject = mappedObject.map((el) => {
    return (callback) => {
        downloadFiles(el.file, el.delay, el.isRejected)
            .then((result) => callback(null, result))
            .catch((err) => callback(err));
    };
});

// Execute the functions in series
async.parallel(expObject, (err, results) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("All files processed:", results);
    }
});

//give output concurrently but, if any error present in the task will give error in the output
