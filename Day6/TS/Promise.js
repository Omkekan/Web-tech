"use strict";
const myFunction = (data) => {
    console.log(`Result is:${data}`);
};
const myPromise = new Promise((resolve, reject) => {
    let result = true;
    if (!result) {
        // console.log("Done ");
        resolve("Done");
    }
    else {
        // console.log("Not Done yet");
        reject("Not Done yet");
    }
});
myPromise.then((val) => {
    // console.log(val)
    myFunction(val);
}).catch((error) => {
    // console.log(error)
    myFunction(error);
});
// console.log(myPromise);
