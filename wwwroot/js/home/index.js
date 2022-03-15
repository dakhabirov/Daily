if (!checkToken())
    redirect("/html/account/login.html");

document.getElementById("buttonNotes").addEventListener("click", () => redirect("/html/notes/index.html"));

document.getElementById("buttonExit").addEventListener("click", () => exitAccount());