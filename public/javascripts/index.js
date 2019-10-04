
console.log("Alive!");


document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    // получаем данные формы
    let way = document.getElementsByClassName("inp").value;
    console.log(way);
    fetch(' /users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: "ggaga",
    })
        .then((response)=> response.json())
        .then(result=> console.log(result))
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
                // if (response.status !== 200) {
                //     console.log('Looks like there was a problem. Status Code: ' +
                //         response.status);
                //     return;
                // }

                // Examine the text in the response
                // response.json().then(function(data) {
                //     console.log(data);
                // });
            }
        );


    // let xhr = new XMLHttpRequest();
    // // посылаем запрос на адрес "/users"
    // xhr.open("POST", "/users", true);
    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.addEventListener("load", function () {
    //     //получаем и парсим ответ сервера
    //     let receivedUser = JSON.parse(xhr.response);
    //     // console.log("receivedUser.userName, "-", receivedUser.userAge");   // смотрим ответ сервера
    // });
    // xhr.send();
