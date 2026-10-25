function checkAll() {
    let uemail = document.myform.uemail.value;
    let regemail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";

    let upass = document.myform.pass.value;
    let regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let umob=document.myform.unum.value;
    let regmob="^[0-9]{10}$";

    let ugender=document.myform.gender;

     //Email
    if (uemail == "") {
        window.alert("Email is required");
        return false;
    }
    if (!uemail.match(regemail)) {
        window.alert("Email should contain only character and  @.com!!!!")
        return false;
    }

    //password
    if (upass == "") {
        window.alert("Password  is required");
        return false;
    }
    if (!upass.match(regpass)) {
        window.alert("Password should contain atleat one Symbol special character , uppercase,lowercase character!!!!")
        return false;
    }
    if(umob==""){
        window.alert("Mobile number is required");
        return false;
    }
    if(!umob.match(regmob)){
        window.alert("Mobile number should contain only 10 digit!!!!");
        return false;
    }

    if(ugender[0].checked==false && ugender[1].checked==false){
        window.alert("Please Select Your Gender!");
        return false;
    }

}