if (checkToken())
    deleteToken();

function Authorization(){
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;
        
    // отправить запрос к серверу для получения токена
    function setToken(username, password) {
        
        // формируем объект для отправки
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        // отправляем запрос на сервер
        fetch("https://localhost:44346/api/account/buildtoken", {
            method: "POST",
            body: formData
        })
        .then((response) => {
            // получаем данные с сервера
            response.json()
                .then(data => {
                    // если запрос прошел нормально
                    if (response.ok) {
                        // сохраняем в хранилище sessionStorage токен доступа
                        sessionStorage.setItem("tokenKey", data);
                        // перенаправляем на главную страницу
                        redirect("https://localhost:44346");
                    }
                });
        });
    };

    setToken(username, password);
}

document.getElementById("submitLogin").addEventListener("click", Authorization);