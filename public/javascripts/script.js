
console.log("Alive!");


document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Click");

        // получаем данные формы
    let way = document.querySelector('#inputFrom').value;
    // let direction = JSON.stringify({way});
    let url = (way)?`/users?trip=${way}`: `/users`;
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({way}),
    })
        .then((response)=> response.json())
        .then(result=> console.log(result))
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });

    }
);



