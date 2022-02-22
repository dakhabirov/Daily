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
        fetch("https://localhost:44346/api/account/generatetoken", {
            method: "POST",
            body: formData
        })
        .then((response) => {
            // получаем данные с сервера
            response.json()
                .then(data => {
                    // если сервер вернул ошибку
                    if (!response.ok) {
                        console.log('Error: ', response.status, data.errorText);
                    }
                    else {
                        // сохраняем в хранилище sessionStorage токен доступа
                        sessionStorage.setItem("tokenKey", data.tokenKey);
                        // перенаправляем на главную страницу
                        redirect("https://localhost:44346/html/home/index.html");
                    }
                });
        });
    };

    setToken(username, password);
}

// добавляем обработчик события для кнопки
document.getElementById("submitLogin").addEventListener("click", Authorization);