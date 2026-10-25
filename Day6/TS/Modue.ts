import IPerson from "./person.js";

class Teacher implements IPerson{
    pid:number;
    pname: string;
    pcontact: number;
    pstatus: string;

    constructor(_id:number,_name:string,_contact:number,_status:string){
        this.pid=_id;
        this.pname=_name;
        this.pcontact=_contact;
        this.pstatus=_status;
    }
    personDetails(){
        return `Id:${this.pid} Name:${this.pname} Contact:${this.pcontact} Status:${this.pstatus}`
    }
}

let TeacherObj=new Teacher(101,"Ajinkya",856888,"Single");
console.log(TeacherObj.personDetails());