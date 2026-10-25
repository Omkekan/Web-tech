function replaceText() {

    let message = document.getElementById("message").value;

    let oldText = document.getElementById("oldText").value;

    let newText = document.getElementById("newText").value;

    if (oldText == "") {
        alert("Enter old text");
        return;
    }

    let result = message.replace(oldText, newText);

    document.getElementById("message").value = result;
}


function replaceAllText() {

    let message = document.getElementById("message").value;

    let oldText = document.getElementById("oldText").value;

    let newText = document.getElementById("newText").value;

    if (oldText == "") {
        alert("Enter old text");
        return;
    }

    let result = message.replaceAll(oldText, newText);

    document.getElementById("message").value = result;
}