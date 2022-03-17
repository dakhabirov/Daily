if (!checkToken())
    redirect("/html/account/login.html");

function openMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

document.getElementById("buttonToggle").addEventListener("click", () => openMenu());
document.getElementById("buttonExit").addEventListener("click", () => deleteToken());