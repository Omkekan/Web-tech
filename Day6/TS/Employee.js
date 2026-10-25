"use strict";
class Employee {
    empId;
    empName;
    empPost;
    empSalary;
    constructor(_empId, _empName, _empPost, _empSalary) {
        this.empId = _empId;
        this.empName = _empName;
        this.empPost = _empPost;
        this.empSalary = _empSalary;
    }
    set _setId(_id) {
        this.empId = _id;
    }
    get _getId() {
        return this.empId;
    }
    set _setName(_name) {
        this.empName = _name;
    }
    get _getName() {
        return this.empName;
    }
    set _setPost(_post) {
        this.empPost = _post;
    }
    get _getPost() {
        return this.empPost;
    }
    set _setSalary(_salary) {
        this.empSalary = _salary;
    }
    get _getSalary() {
        return this.empSalary;
    }
    employeeDetails() {
        return `Id:${this.empId} Name:${this.empName} Post:${this.empPost} Salary:${this.empSalary}`;
    }
}
let obj1 = new Employee(1, "Ajinkya", "CEO", 565669);
let obj2 = new Employee(2, "dsfv", "WatchMan", 38535);
let obj3 = new Employee(3, "vcxzs", "Peon", 3535);
console.log(obj1.employeeDetails());
console.log(obj2.employeeDetails());
console.log(obj3.employeeDetails());
obj1._setId = 666;
console.log(obj1._getId);
obj1._setName = "Titan";
console.log(obj1._getName);
obj1._setPost = "Peon";
console.log(obj1._getPost);
obj1._setSalary = 666399;
console.log(obj1._getSalary);
