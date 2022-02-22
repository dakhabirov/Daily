if (!checkToken())
    redirect("https://localhost:44346/html/account/login.html");

function insertNote() {

}

function deleteNote() {
    
}

document.getElementById("submitInsert").addEventListener("click", insertNote);
document.getElementById("submitDelete").addEventListener("click", deleteNote);
document.getElementById("buttonExit").addEventListener("click", () => exitAccount());