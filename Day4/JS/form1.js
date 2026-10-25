function checkAll() {
    let uname = document.myform.fname.value;
    let regname = "^[a-zA-Z ]{3,20}$";

    let uemail = document.myform.uemail.value;
    let regemail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

    let upass=document.myform.pass.value;
    let regpass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let uedu = document.myform.edu;
    let ucourse = document.myform.course.value;

    //Name
    if (uname == "") {
        window.alert("Full name is required");
        document.myform.fname.focus();
        return false;
    }
    if (!uname.match(regname)) {
        window.alert("Name should contain only character between 3 and 20!!!!")
        document.myform.fname.focus();
        return false;
    }

    //Email
    if (uemail == "") {
        window.alert("Email is required");
        document.myform.fname.focus();
        return false;
    }
    if (!uemail.match(regemail)) {
        window.alert("Email should contain only character @.com!!!!")
        document.myform.fname.focus();
        return false;
    }

    //password
    if (upass == "") {
        window.alert("Password  is required");
        document.myform.fname.focus();
        return false;
    }
    if (!upass.match(regpass)) {
        window.alert("Password should contain atleat one Symbol special character , uppercase,lowercase character!!!!")
        document.myform.fname.focus();
        return false;
    }

    //Checkbox
    if (uedu[0].checked == false && uedu[1].checked == false && uedu[2].checked == false && uedu[3].checked == false) {
        window.alert("Select Your qualification");
        document.myform.fname.focus();
        return false;
    }

    //Drop-down
    if (ucourse == "") {
        window.alert("Course is required");
        document.myform.fname.focus();
        return false;
    }
}