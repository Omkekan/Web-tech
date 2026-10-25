"use strict";
async function getUser() {
    try {
        // const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await fetch("http://localhost:4040/products");
        const user = await result.json();
        console.log(user);
    }
    catch (error) {
        console.log(error);
    }
}
getUser();
