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

//=============================================================================

let colors = [];

getColors()

function getColors() {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            JSON.parse(xhr.response).data.forEach(element => {
                colors.push(element);
            });
            makeColorBlocks();
        }
    };
    xhr.open("GET", "https://reqres.in/api/unknown", true);
    xhr.send();
}

function makeColorBlocks() {
    let elColors = document.querySelector(".colors");
    colors.forEach(element => {
        elColors.innerHTML += `<option value="${element.color}" style="background-color:${element.color}" onchange="changeColor()">${element.color}</option>`
    })
}
function changeColor(getColor) {
    let elColorSpace = document.querySelector("body");
    selectColor = getColor.value;
    elColorSpace.style.background = selectColor;
}

//=============================================================================

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