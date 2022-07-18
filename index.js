const button = document.querySelector('button');
let count = 0;
let userName;

button.addEventListener("click", checkName);
button.addEventListener("click", checkSurname);
button.addEventListener("click", checkSex);
button.addEventListener("click", checkLogin);
button.addEventListener("click", checkPassword);
button.addEventListener("click", submitForm);

function checkName() {
    const name = document.querySelector('.name-block__input');
    const nameError = document.querySelector('.name-block_error');

    nameError.textContent = '';

    if (name.value == 0 || name.value == undefined) {
        nameError.textContent = 'Укажите имя';
        count++;
    } else {
        userName = name.value;
        return userName;
    }
}

function checkSurname() {
    const surname = document.querySelector('.surname-block__input');
    const surnameError = document.querySelector('.surname-block_error');

    surnameError.textContent = '';

    if (surname.value == 0 || surname.value == undefined) {
        surnameError.textContent = 'Укажите фамилию';
        count++;
    }
}

function checkSex() {
    const sex = document.querySelectorAll('.sex-block__input');
    const sexError = document.querySelector('.sex-block_error');

    sexError.textContent = '';

    if (sex[0].checked == false && sex[1].checked == false) {
        sexError.textContent = 'Укажите ваш пол';
        count++;
    }
}

function checkLogin() {
    const login = document.querySelector('.login-block__input');
    const loginError = document.querySelector('.login-block__error');

    loginError.textContent = '';

    if (login.value == 0 || login.value == undefined) {
        loginError.textContent = 'Укажите желаемый логин';
        count++;
    } else if (login.value.length < 5 || login.value.length > 15) {
        loginError.textContent = 'Длина логина должна быть от 5 до 15 символов';
        count++;
    }
}

function checkPassword() {
    const password = document.querySelector('.password-block__input');
    const passwordError = document.querySelector('.password-block_error');

    passwordError.textContent = '';

    if (password.value == 0 || password.value == undefined) {
        passwordError.textContent = 'Укажите пароль';
        count++;
    } else if (password.value.length < 8 || password.value.length > 50) {
        passwordError.textContent = 'Длина пароля должна быть от 8 до 50 символов';
        count++;
    }
}

function submitForm() {
    console.log(count);
    if (count === 0) {
        alert(`Добро пожаловать, ${userName}!`);
    } else count = 0;
}
