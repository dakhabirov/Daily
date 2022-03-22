if (!checkToken())
    redirect("/html/account/login.html");

const token = getToken();

function buildNotesList(notesContent, notesId) {
    if (notesContent.length >= 1 && notesId.length >= 1 && notesContent.length == notesId.length)
    {
        let ol = document.getElementById("list");
        ol.innerHTML = "";

        for (let i = 0; i < notesContent.length; i++)
        {
            let li = document.createElement("li");
            // добавляем текст заметки
            li.appendChild(document.createTextNode(notesContent[i]));
            ol.appendChild(li);
            // добавляем кнопку удаления
            let submitDelete = document.createElement("input");
            submitDelete.type = "submit";
            submitDelete.value = "Удалить";
            submitDelete.addEventListener("click", () => {
                deleteNote(notesId[i]);
            });
            ol.appendChild(submitDelete);
        }
    }
}

// получить все заметки
function getNotes() {
    // отправляем запрос на сервер
    fetch("/api/notes", {
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
                        buildNotesList(data.notesContent, data.notesId);
                    }
                    else {
                        console.log("Error: ", response.status, data.errorText);    // если сервер вернул ошибку
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

    fetch("/api/notes", {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: content
        })
    })
    .then((response) => {
        if (response.ok) {
            getNotes();
            // очищаем текст ареа
            document.getElementById("contentNote").value = "";
        }
    });
}

function deleteNote(noteId) {
    fetch("/api/notes?id=" + noteId, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token,
        }
    })
    .then((response) => {
        if (response.ok) {
            getNotes();
        }
    });
}

getNotes();

document.getElementById("submitCreate").addEventListener("click", (e) => {
    e.preventDefault();
    createNote();
});
document.getElementById("buttonExit").addEventListener("click", () => {
    exitAccount()
});