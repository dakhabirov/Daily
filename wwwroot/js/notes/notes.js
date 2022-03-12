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
                        let ol = document.getElementById("list");

                        // добавляем полученные элементы в список
                        for (let i = 0; i < data.notesContent.length; i++)
                        {
                            let li = document.createElement("li");
                            // добавляем текст заметки
                            li.appendChild(document.createTextNode(data.notesContent[i]));
                            ol.appendChild(li);
                            // добавляем кнопку удаления
                            let submitDelete = document.createElement("input");
                            submitDelete.type = "submit";
                            submitDelete.value = "Удалить";
                            submitDelete.addEventListener("click", () => { deleteNote(data.notesId[i]) });
                            ol.appendChild(submitDelete);
                        }
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
    let content = document.getElementById("contentNote").value;

    fetch("https://localhost:44346/api/notes", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: content
        })
    });
}

function deleteNote(noteId) {
    fetch("https://localhost:44346/api/notes?id=" + noteId, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token,
        }
    });
}

getNotes();

document.getElementById("submitCreate").addEventListener("click", createNote);
document.getElementById("buttonExit").addEventListener("click", () => exitAccount());