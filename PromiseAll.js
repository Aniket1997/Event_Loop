const downloadFile = (filename, delay, isRejected = false) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isRejected) {
                reject(`${filename}, something went wrong`);
            } else {
                resolve(`${filename} downloaded`);
            }
        }, delay);
    });

const files = [
    downloadFile("File1", 1000, true), // May reject
    downloadFile("File2", 2000),       // Resolves
    downloadFile("File3", 1500),       // Resolves
];

Promise.all(files)
    .then((results) => {
        console.log("All files downloaded:", results);
    })
    .catch((error) => {
        console.error("Error downloading files:", error);
    });
