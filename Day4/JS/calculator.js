function addition() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) + parseInt(num2);
    console.log(result);
    document.getElementById("h3").append(result);
}
function subtraction() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) - parseInt(num2);
    console.log(result);
    document.getElementById("h3").append(result);
}
function multiplication() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) * parseInt(num2);
    console.log(result);
    document.getElementById("h3").append(result);
}
function division() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) / parseInt(num2);
    console.log(result);
    document.getElementById("h3").append(result);
}