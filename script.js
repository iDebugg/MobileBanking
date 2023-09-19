const signIn = () => {
    window.location.href = "signIn.html"
}
const signUp = () => {
    window.location.href = "signUp.html"
}
let allUsers = []

const signUpBtn = () => {
    let user = {
        firstName: registerName.value,
        lastName: registerUsername.value,
        email: registerEmail.value,
        password: registerPassword.value,
        repassowrd: registerRepeatPassword.value
    }
    allUsers.push(user)
    localStorage.setItem("key", JSON.stringify(allUsers))
    window.location.href = "signIn.html"

}



// const eee = () => {

//     for (let index = 0; index < allUsers.length; index++) {
//         disc.innerHTML += `
//         <h1>my name is ${allUsers[index].firstName}</h1>
//         <h1>my name is ${allUsers[index].lastName}</h1>
//         <h1>my name is ${allUsers[index].email}</h1>
//         <h1>my name is ${allUsers[index].password}</h1>
//         `
//     }
// }