if (!checkToken())
    redirect("https://localhost:44346/html/account/login.html");

function exitAccount() {
    deleteToken();
    redirect("https://localhost:44346/html/account/login.html");
}

// добавляем обработчик события для кнопки
document.getElementById("submitExit").addEventListener("click", exitAccount);