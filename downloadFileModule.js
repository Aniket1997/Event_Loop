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

module.exports = downloadFile;