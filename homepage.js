if(!localStorage.getItem("currentUser")){
    window.location.href = 'index.html'
}

getCurrentUser()
function getCurrentUser() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    let nameEl = document.querySelector("#name")
    nameEl.textContent = currentUser.name
    let surnameEl = document.querySelector("#surname")
    surnameEl.textContent = currentUser.surname
    let ageEl = document.querySelector("#age")
    ageEl.textContent = currentUser.age
}

function logOut(){
    localStorage.removeItem("currentUser")
    window.location.href = 'index.html'
}

function deleteAcc(){
    let users = JSON.parse(localStorage.getItem("users"))
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    localStorage.setItem("users", JSON.stringify(
        users.filter(user => user.email != currentUser.email)
    ))
    logOut()
}

