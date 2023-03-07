document.getElementById("form-authorization").addEventListener("submit", formAuthorization );

function formAuthorization(event) {
    event.preventDefault();
    let element = document.getElementById("form-authorization");
    let password = element.password.value;
    let email = element.login.value;
    let error;

    if (email == "" || password == "" )
    {
        error = "Заполните все поля!";
    }
    else if (email.length <=1) {
        error = "Введите корректный Email-адрес!";
    }
    else if (password.length <= 6) {
        error = "Длина пароля не должна быть меньше 6 символов!";
    }
    else {
        error = "";
    }
    if(error != "") {
        document.getElementById("error").innerHTML = error;
        return false;
    }
    else {
        document.getElementById("error").innerHTML = error;
    }
}