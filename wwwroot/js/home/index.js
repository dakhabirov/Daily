if (!checkToken())
    redirect("https://localhost:44346/html/account/login.html");

function exitAccount() {
    deleteToken();
    redirect("https://localhost:44346/html/account/login.html");
}

document.getElementById("buttonNotes").addEventListener("click", () => redirect("https://localhost:44346/html/notes/index.html"));

document.getElementById("buttonExit").addEventListener("click", exitAccount);