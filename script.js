import * as API from './webservice.js'

 window.addEventListener("DOMContentLoaded", function () {

    let form1 = document.querySelector(".form-login")
    let form2 = document.querySelector(".form-send-message")
    let list = document.querySelector(".listMessage")
    form2.style.display = "none"

    form1.addEventListener("submit", function (event) {
        event.preventDefault()
        API.getToken(form1["email"].value, form1["password"].value).then(function (response) {
            console.log(response)
            if (response.data) {
                alertia("Vous êtes connecté !");
                localStorage.setItem("token", response.data.token)
                let token = localStorage.getItem("token")
                console.log(token)
                form1.style.display = "none"
                form2.style.display = "block"
                list.style.border = "solid";
                function readMessage() {
                    API.getMessage(token).then(function (response) {
                        response.data.forEach(element => {
                            let newDiv = document.createElement("div");
                            let newContent = element.nickname + " = " + element.message;
                            newDiv.innerText = newContent
                            list.appendChild(newDiv)
                        });
                    })
                }
                readMessage();
            } else {
                alertia("Le compte ou le mot de passe n'existe pas !", "danger");
            }
        })
  })

    form2.addEventListener("submit", function (event) {
        event.preventDefault() 
        let token = localStorage.token
        if (form2.message.value != "") {
            API.createMessage(form2.message.value, token).then(function (response) {
            })
        } else {
            alertia("Vous n'avez rien écrit !", "danger"); 
        }

    })

})