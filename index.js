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

    const loginFormat = /^[a-z0-9_-]{5,25}$/i;

    loginError.textContent = '';
    if (login.value == 0 || login.value == undefined) {
        loginError.textContent = 'Укажите желаемый логин';
        count++;
    } else if (!loginFormat.test(login.value)) {
        loginError.textContent = 'Логин может состоять из латинских букв и цифр, а его длина должна быть от 5 до 25 символов';
        count++;
    }
}

function checkPassword() {
    const password = document.querySelector('.password-block__input');
    const passwordError = document.querySelector('.password-block_error');

    const passwordRepeat = document.querySelector('.password-block__repeat');
    const passwordRepeatError = document.querySelector('.password-block__repeat-error');

    const passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,50}$/;

    passwordError.textContent = '';

    if (password.value == 0 || password.value == undefined) {
        passwordError.textContent = 'Укажите пароль';
        count++;
    } else if (!passwordFormat.test(password.value)) {
        passwordError.textContent = 'Пароль должен содержать буквы, цифры и символы. Длина пароля должна быть от 8 до 50';
        count++;
    }

    if (passwordRepeat.value !== password.value) {
        passwordRepeatError.textContent = 'Пароли должны совпадать';
        count++;
    }
}

function submitForm() {
    if (count === 0) {
        alert(`Добро пожаловать, ${userName}!`);
    } else count = 0;
}
