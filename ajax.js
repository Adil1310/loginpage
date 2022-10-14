let colors = [];

getColors();

function getColors() {
    let xhr = new XMLHttpRequest(); //создаем XML объект


    //метод к которому идет присвоение функции
    xhr.onreadystatechange = function () { //функция пред состояния для смены состояния
        if (this.readyState == 4 && this.status == 200) {
            JSON.parse(xhr.response).data.forEach(element => {
                colors.push(element);
            });
            makeColorBlocks();
        }

    };

    xhr.open("GET", "https://reqres.in/api/unknown", true); //редактируем запрос, выбираем метод
    xhr.send(); //отправляем запрос
}

function makeColorBlocks() {
    let elColors = document.querySelector(".colors");
    colors.forEach(element => {
        elColors.innerHTML += `
            <div class="color" style="background-color:${element.color}"
            onclick="changeColor()"></div>
        `
    })
}
function changeColor() {
    let elColorSpace = document.querySelector(".color-space");
    elColorSpace.style.backgroundColor = event.path[0].style.backgroundColor;
}