if (!checkToken())
    redirect("https://localhost:44346/html/account/login.html");

// получить все заметки
function getNotes() {
    // отправляем запрос на сервер
    fetch("https://localhost:44346/api/note", {
        method: "GET"
    })
    .then((response) => {
        // получаем данные с сервера
        response.json()
            .then(data => {
                // если сервер вернул ошибку
                if (!response.ok) {
                    console.log('Error: ', response.status, data.errorText);
                    alert(data.errorText);
                }
                else {
                    var ol = document.getElementById("list");
                    data.forEach(note => {
                        var li = document.createElement("li");
                        // добавляем полученные элементы в список
                        li.appendChild(document.createTextNode(note.content));
                        ol.appendChild(li);
                    });
                }
            });
    })
}

function createNote() {
    
}

function deleteNote() {
    
}

getNotes();

document.getElementById("submitCreate").addEventListener("click", createNote);
document.getElementById("submitDelete").addEventListener("click", deleteNote);
document.getElementById("buttonExit").addEventListener("click", () => exitAccount());