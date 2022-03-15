if (checkToken())
    deleteToken();

function Login() {
    let username = document.getElementById("usernameLogin").value;
    let password = document.getElementById("passwordLogin").value;

    // формируем объект для отправки
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    // отправляем запрос на сервер
    fetch("/api/account/buildtoken", {
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
                    redirect("/");
                }
            });
    });
}

document.getElementById("submitLogin").addEventListener("click", Login);