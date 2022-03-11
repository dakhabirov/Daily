if (!checkToken())
    redirect("https://localhost:44346/html/account/login.html");

const token = getToken();

// получить все заметки
function getNotes() {
    // отправляем запрос на сервер
    fetch("https://localhost:44346/api/notes", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token  // передаем токен доступа в заголовке
        }
    })
    .then((response) => {
        if (response.ok === true) {
            // получаем данные с сервера
            response.json()
                .then(data => {
                    if (response.ok) {
                        var ol = document.getElementById("list");
                        data.forEach(noteContent => {
                            var li = document.createElement("li");
                            // добавляем полученные элементы в список
                            li.appendChild(document.createTextNode(noteContent));
                            ol.appendChild(li);
                        });
                    }
                    else {
                        console.log('Error: ', response.status, data.errorText);    // если сервер вернул ошибку
                        alert(data.errorText);
                    }
                });
        }
        else
            console.log("Status: ", response.status);
    })
}

function createNote() {
    var content = document.getElementById("contentNote").value;

    fetch("https://localhost:44346/api/notes", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,  // передаем токен доступа в заголовке
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: content
        })
    });
}

function deleteNote() {
    
}

getNotes();

document.getElementById("submitCreate").addEventListener("click", createNote);
document.getElementById("submitDelete").addEventListener("click", deleteNote);
document.getElementById("buttonExit").addEventListener("click", () => exitAccount());