class User{
    constructor(firstName,lastName,userName,password,age) {
        this.firstName = firstName
        this.lastName = lastName
        this.userName = userName
        this.password = password
        this.age = age
        this.isLoggedIn = false 
        this.lastLoggedIn = 0 
        this.isActive = true
        this._id =Date.naw 
    }
singIn(password) {
if(this.isActive){
    if(password ===  this.password){
    this.isLoggedIn = true 
    this.lastLoggedIn = Date.now ()
    return this
}else {
    return{err: true, msg: 'wrong password'}
}
 } else{
    alert ('this shit has been deleted')
}
}

singOut (){
    this.isLoggedIn = false 
}
getLastLoggedIn () {
    const date = new Date(this.lastLoggedIn)
    console.log(date);
    return date.toLocaleTimeString()
}
deactivateUser(){
    this.isActive = false
}
reactivateUser(){
    this.isActive = true
    alert ('Welcom Back'+this.firstName)
}

}


class Teacher extends User {
    constructor(firstName,lastName,userName,password,age,subject, salary){
        super(firstName,lastName,userName,password,age)
        this.subject = subject
        this.salary = salary
        this.workHours = 0
        
    }

    giveMark (){

    }
}
class Studens extends User {

    constructor(firstName,lastName,userName,password,age,classnum,grade){
    super (firstName,lastName,userName,password,age)
    this.classnum =classnum
    this.grade = grade
}

}

class School {

    constructor(name) {
        this.name = name
        this.grades = {}
        this.teachers = []
        this.students =[]

    }
    registerStudent (firstName,lastName,userName,password,age,grade){
        const student = new Studens (firstName,lastName,userName,password,age,grade)
        this.students.push(student)
    }

    hireTeacher(firstName,lastName,userName,password,age,subject, salary){

        const teacher = new Teacher (firstName,lastName,userName,password,age,subject, salary)
        this.teachers.push(teacher)
    }
singIn(userName,password){
    const teacher = this.teachers.find(t => t.userName == userName)
    const student =this.students.find(s=>s.userName == userName)
    if(teacher) {
        return teacher.singIn(password)
    }
    if (student){
        return student.singIn(password)
    }
    return {err:true,msg:'cannt find user'}
}


}





const school = new School ('America House')
school.hireTeacher('Adam','Muna','adammuna06','qweqwe',15,'P.E')
school.registerStudent('hanin','farhat','haninFarhat','qweqwe',16,'10th')


console.log(school);
