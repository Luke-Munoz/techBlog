const { sign } = require("crypto");

async function login(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim()

    if (username && password) {
        // make the routes for it to hit
        const response = await fetch('/', {
                method: 'post',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {}
            }),
            if (response.ok) {
                document.location.replace('/dashboard/');
            } else {
                alert(response.statusText);
            }
    }
}

async function signUp(event) {
    event.preventDefault();

    const username = document.querySelector('#username-sign').value.trim()
    const email = document.querySelector('#email-sign').value.trim()
    const password = document.querySelector('#password-sign').value.trim()

    if (username && email && password) {
        // make routes for it to hit
        const response = await fetch('', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {}
        });
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText)
        }
    }
}


document.querySelector('.log').addEventListener('submit', login);
document.querySelector('.sign').addEventListener('submit', signUp);