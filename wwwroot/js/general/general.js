// перенаправить на страницу
function redirect(url) {
    window.location.replace(url);
}

// проверить токен авторизации
function checkToken() {
    var token = sessionStorage.getItem("tokenKey");

    if (token === null || token === undefined)
        return false;
    else
        return true;
}