const header =document.getElementById('header')
const title =document.getElementById('title')
const userNameInput =document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const singInBtn =document.getElementById('singInBtn')
const mainContainer = document.getElementById('mainContainer')

const renderUser = function (user){
    mainContainer.innerHTML =''
    const firstName = document.createElement('h2')
    firstName.innerText =`first name ${user.firstName}`
    const lastName = document.createElement('h2')
    lastName.innerText =`first name ${user.lastName}`

    const lastlogin = document.createElement('h2')
    lastlogin.innerText =`lastlogin${user.lastlogin}`

mainContainer.append(firstName,lastName,lastlogin)
}



const submit = function (){
    const userName =userNameInput.value
    const password =passwordInput.value
    const user = school.singIn(userName, password)
    userNameInput.value =''
    passwordInput.value = ''
    if(user.err){
        alert(user.msg)
    }else{
        renderUser(user)
    }
}













// const user = {
//     firstName : "Khadeeja",
//     last : "Sameer",
//     dob : "1/1/2001"

// }
// header.innerHTML = `
// <h1> Welcom Mrs.${user.firstName} ${user.last}</h1>
// <h2> your birth date in our databases is ${user.dob}</h2>

// `
// const renderUser = function (firstName,last){
// header.innerHTML = `
// <h1>Welcom Mr.${firstName} ${last}</h1>
// `
// }