if (!checkToken())
    redirect("https://localhost:44346/html/account/login.html");

// получить все заметки
function getNotes() {
    const token = getToken();

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
    
    const formData = new FormData();
    formData.append("Content", content);

    fetch("https://localhost:44346/api/notes", {
        method: "POST",
        body: formData
    })
    .then((response) => {
        alert(response);
    });
}

function deleteNote() {
    
}

getNotes();

document.getElementById("submitCreate").addEventListener("click", createNote);
document.getElementById("submitDelete").addEventListener("click", deleteNote);
document.getElementById("buttonExit").addEventListener("click", () => exitAccount());