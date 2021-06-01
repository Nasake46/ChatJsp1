export function getMessage(token) {

    return new Promise(function (resolve) {
        fetch("https://api.edu.etherial.dev/apijsv2/messages", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }).then(function (response) {
            
            response.json().then(function (json) {
                resolve(json)
            })
        })
    })
}

export function getToken(email, password) {

    return new Promise(function (resolve) {
        fetch("https://api.edu.etherial.dev/apijsv2/auth", {
            method: "POST",
            body: "email=" + email +"&password=" + password,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(function (response) {

            response.json().then(function (json) {
                resolve(json)
            })
        })
    })
}

export function createMessage(content, token) {

    return new Promise(function (resolve) {
        fetch("https://api.edu.etherial.dev/apijsv2/messages", {
            method: "POST",
            body: "message=" + content,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : "Bearer " + token,
            }
        }).then(function (response) {

            response.json().then(function (json) {
                resolve(json)
            })

        })
    })

}