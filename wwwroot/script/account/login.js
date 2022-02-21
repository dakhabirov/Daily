var tokenKey = "accessToken";

// отправка запроса к API generatetoken для получения токена
async function getTokenAsync() {

    // получаем данные формы и формируем объект для отправки
    const formData = new FormData();
    formData.append("username", document.getElementById("usernameLogin").value);
    formData.append("password", document.getElementById("passwordLogin").value);

    // отправляем запрос на сервер
    const response = await fetch("https://localhost:44346/api/account/generatetoken", {
        method: "POST",
        body: formData
    });
    // получаем данные с сервера
    const data = await response.json();

    // если запрос прошел нормально
    if (response.ok === true) { 
        // выводим токен в консоль
        console.log(data.token);
    }
    else {
        // если произошла ошибка, из errorText получаем текст ошибки
        console.log("Error: ", response.status, data.errorText);
    }
};

// добавляем обработчик события для кнопки
document.getElementById("submitLogin").addEventListener("click", getTokenAsync);