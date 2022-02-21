function Authorization(){
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;
    
    setToken(username, password);
    
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
        // получаем данные с сервера
        .then((response) => {
            return response.json()
        })
        // возвращаем данные
        .then((data) => {
            console.log(data.tokenKey);
            // сохраняем в хранилище sessionStorage токен доступа
            sessionStorage.setItem("tokenKey", data.tokenKey);
            redirect("https://localhost:44346/html/home/index.html");
        })
        .catch(error => console.error('Error:', error));
    };

}

// добавляем обработчик события для кнопки
document.getElementById("submitLogin").addEventListener("click", Authorization);