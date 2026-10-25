class Teacher {
    pid;
    pname;
    pcontact;
    pstatus;
    constructor(_id, _name, _contact, _status) {
        this.pid = _id;
        this.pname = _name;
        this.pcontact = _contact;
        this.pstatus = _status;
    }
    personDetails() {
        return `Id:${this.pid} Name:${this.pname} Contact:${this.pcontact} Status:${this.pstatus}`;
    }
}
let TeacherObj = new Teacher(101, "Ajinkya", 856888, "Single");
console.log(TeacherObj.personDetails());
export {};
