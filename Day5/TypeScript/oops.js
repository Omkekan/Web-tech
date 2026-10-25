class Student {
    //data members of class
    stdId = 101;
    stdName = "Ajinkya";
    stdContact = 352567;
    stdadhar = 23365;
    gender = "male";
    //create constructor
    constructor(_id, _name, _contact, _gender) {
        this.stdId = _id;
        this.stdName = _name;
        this.stdContact = _contact;
        this.gender = _gender;
    }
    //member function
    studentDetails() {
        return `Id:${this.stdId} Name:${this.stdName} Contact:${this.stdContact} Adhar:${this.stdadhar} Gender:${this.gender}`;
    }
}
// let obj=new Student(102,"Raman",65557);
// // console.log(obj.stdName);
// console.log(obj.studentDetails());
// let obj1=new Student(201,"Chaman",12345);
// console.log(obj1.studentDetails());
// let obj2=new Student(301,"Daman",698745);
// console.log(obj2.studentDetails());
//Inheritance
export default class Result extends Student {
    phy = 0;
    chem = 0;
    maths = 0;
    constructor(_id, _name, _contact, _gender, _phy, _chem, _math) {
        super(_id, _name, _contact, _gender);
        this.phy = _phy;
        this.chem = _chem;
        this.maths = _math;
    }
    total() {
        return this.chem + this.maths + this.phy;
    }
    studentDetails() {
        return `Gender:${this.gender} ID:${this.stdId} Name:${this.stdName} Contact:${this.stdContact} Physics:${this.phy} Chemistry:${this.chem} Maths:${this.maths} Total:${this.total()}`;
    }
}
// let resultObj=new Result(101,"Ajinkya",743333,87,95,96);
// console.log(resultObj.studentDetails())
