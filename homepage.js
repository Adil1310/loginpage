if (!localStorage.getItem("currentUser")) {
    window.location.href = 'index.html'
}

getCurrentUser()
getOtherUsers()

function getCurrentUser() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    let nameEl = document.querySelector("#name")
    nameEl.textContent = currentUser.name
    let surnameEl = document.querySelector("#surname")
    surnameEl.textContent = currentUser.surname
    let ageEl = document.querySelector("#age")
    ageEl.textContent = currentUser.age
}

function searchBtn(){

    }


function logOut() {
    localStorage.removeItem("currentUser")
    window.location.href = 'index.html'
}

function deleteAcc() {
    let users = JSON.parse(localStorage.getItem("users"))
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    localStorage.setItem("users", JSON.stringify(
        users.filter(user => user.email != currentUser.email)
    ))
    logOut()
}

function getOtherUsers() {
    let users = JSON.parse(localStorage.getItem("users"), function (key, value) {
        if (key == "password") return undefined;
        return value;
    })
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let otherUsers = users.filter(user => user.email != currentUser.email);

    let listElements = document.querySelector(".user-list")
    otherUsers.forEach((element, index) => {
        listElements.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>${element.surname}</td>
            <td>${element.age}</td>
            <td>${element.email}</td>
        </tr>`
    });
}

function editProfile(){
    
}