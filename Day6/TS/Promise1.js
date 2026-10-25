"use strict";
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data recieved successfully !");
        }, 2000);
    });
}
;
// getData().then((val)=>{
//     console.log(val);
// }).catch((error)=>{
// })
async function displayData() {
    try {
        let result = await getData();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}
displayData();
