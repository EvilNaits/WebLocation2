document.getElementById("form-registration").addEventListener("submit", formRegistration);

function formRegistration(event) {
    event.preventDefault();
    let element = document.getElementById("form-registration");
    let name = element.name.value;
    let surname = element.surname.value;
    let phone = element.phone.value;
    let password = element.password.value;
    let email = element.login.value;
    let error;
    console.log(name);

    if (email == "" || password == "" || name =="" || surname=="" || phone=="")
    {
        error = "Заполните все поля!";
    }
    else if (email.length <=1) {
        error = "Введите корректный Email-адрес!";
    }
    else if (password.length <= 6) {
        error = "Длина пароля не должна быть меньше 6 символов!";
    }
    else if (name.length<=2 || name.length>20) {
        error = "Введите корректное имя!";
    }
    else if (surname.length <=2 || name.length>30) {
        error = "Введите корректную фамилию!";
    }
    else if (phone.length<=5 && phone.length >13) {
        error = "Введите корректный номер телефона!";
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