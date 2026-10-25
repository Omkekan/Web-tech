import prompt from "prompt";

prompt.start();

prompt.get(['username', 'password'], function (err, result) {
    //
    // Log the results.
    //

    console.log("Enter Username :");
    console.log('  username: ' + result.username);
    console.log("Enter Passwprd :");
    console.log('  Password: ' + result.password);
});
