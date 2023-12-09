document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Realize aqui a lógica de verificação de login, por exemplo, fazer uma chamada AJAX para a API

    alert('Email: ' + email + ', Password: ' + password);
});