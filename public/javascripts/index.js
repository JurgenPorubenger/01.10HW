
console.log("Alive!");


document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    // получаем данные формы
    let way = document.querySelector(".inp").value;

    // let tick = JSON.stringify({way: way});
    console.log(way);

    let xhr = new XMLHttpRequest();
    // посылаем запрос на адрес "/users"
    xhr.open("POST", "/users", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", function () {
        //получаем и парсим ответ сервера
        let receivedUser = JSON.parse(xhr.response);
        // console.log("receivedUser.userName, "-", receivedUser.userAge");   // смотрим ответ сервера
    });
    xhr.send();
});