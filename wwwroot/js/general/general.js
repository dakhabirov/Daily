// перенаправить на страницу
function redirect(url) {
    location.href = url;
}

// проверить токен авторизации
function checkToken() {
    var token = sessionStorage.getItem("tokenKey");

    if (token === null || token === undefined)
        return false;
    else
        return true;
}

// получить токен авторизации
function getToken() {
    return sessionStorage.getItem("tokenKey");
}

// удалить токен авторизации
function deleteToken() {
    sessionStorage.removeItem("tokenKey");
}

function exitAccount() {
    deleteToken();
    redirect("/html/account/login.html");
}