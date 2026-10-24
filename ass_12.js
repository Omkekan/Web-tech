
function checkAll() {
    // window.alert("helllo");
    let uname = document.myform.fname.value;
    let regname = "^[a-zA-Z ]{3,20}$";

    let ucont = document.myform.fcont.value;
    let regcont = "^[0-9 ]{10,12}$";

    let uemail = document.myform.femail.value;
    let regemail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

    let upass = document.myform.fpass.value;
    let regpass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*!]).{8,}$";


    let uedu = document.myform.edu;
    let ucourse = document.myform.course.value;
//name
    if (uname == "") {
        window.alert("fullname is required");
        document.myform.fname.focus();
        return false
    }
    if (!uname.match(regname)) {
        window.alert("fullname must contain min-3 and max-20 character not digit");
        document.myform.fname.focus();
        return false
    }
//contact
    if (ucont == "") {
        window.alert("Contact is required");
        document.myform.fcont.focus();
        return false
    }
    if (!ucont.match(regcont)) {
        window.alert("contact must contain min-10 and max-12 digit");
        document.myform.fcont.focus();
        return false
    }
//email
    if (uemail == "") {
        window.alert("Email is required");
        document.myform.femail.focus();
        return false
    }
    if (!uemail.match(regemail)) {
        window.alert("Email must properly entered");
        document.myform.femail.focus();
        return false
    }
//password
    if (upass == "") {
        window.alert("Password is required");
        document.myform.fpass.focus();
        return false
    }
    if (!upass.match(regpass)) {
        window.alert("Password is week.");
        document.myform.fpass.focus();
        return false
    }

    if (uedu[0].checked == false && uedu[1].checked == false && uedu[2].checked == false && uedu[3].checked == false) {
        window.alert("Select Your Qualification");
        document.myform.fname.focus();
        return false
    }
    if (ucourse == "") {
        window.alert("course is required");
        document.myform.course.focus();
        return false
    }
}