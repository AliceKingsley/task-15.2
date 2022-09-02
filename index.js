const button = document.querySelector('button');
let count = 0;
let userName;
let dataForm = {};

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

    if (!name.value) {
        nameError.textContent = 'Укажите имя';
        count++;
    } else {
        userName = name.value;
        dataForm.userName = userName;
        
        return userName;
    }
}

function checkSurname() {
    const surname = document.querySelector('.surname-block__input');
    const surnameError = document.querySelector('.surname-block_error');

    surnameError.textContent = '';

    if (!surname.value) {
        surnameError.textContent = 'Укажите фамилию';
        count++;
    } else {
        dataForm.surName = surname.value;
    }
}

function checkSex() {
    const sex = document.querySelectorAll('.sex-block__input');
    const sexError = document.querySelector('.sex-block_error');

    sexError.textContent = '';

    if (sex[0].checked == false && sex[1].checked == false) {
        sexError.textContent = 'Укажите ваш пол';
        count++;
    } else {
        sex[0].checked ? dataForm.gender = "Женский" : dataForm.gender = "Мужской";
    }
}

function checkLogin() {
    const login = document.querySelector('.login-block__input');
    const loginError = document.querySelector('.login-block__error');

    const loginFormat = /^[a-z0-9_-]{5,25}$/i;

    loginError.textContent = '';
    if (!login.value) {
        loginError.textContent = 'Укажите желаемый логин';
        count++;
    } else if (!loginFormat.test(login.value)) {
        loginError.textContent = 'Логин может состоять из латинских букв и цифр, а его длина должна быть от 5 до 25 символов';
        count++;
    } else {
        dataForm.login = login.value;
    }
}

function checkPassword() {
    const password = document.querySelector('.password-block__input');
    const passwordError = document.querySelector('.password-block_error');

    const passwordRepeat = document.querySelector('.password-block__repeat');
    const passwordRepeatError = document.querySelector('.password-block__repeat-error');

    const passwordFormat = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,50}/g;

    passwordError.textContent = '';

    if (!password.value) { 
        passwordError.textContent = 'Укажите пароль';
        count++;
    } else if (!passwordFormat.test(password.value)) {
        passwordError.textContent = 'Пароль должен содержать буквы, цифры и символы. Длина пароля должна быть от 8 до 50';
        count++;
    } else {
        dataForm.password = password.value;
    }

    if (passwordRepeat.value !== password.value) {
        passwordRepeatError.textContent = 'Пароли должны совпадать';
        count++;
    }
}

async function submitForm() {
    if (count === 0) {
        alert(`Добро пожаловать, ${userName}!`);
        console.log(dataForm);

        let response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dataForm)
        });
        
        let result = await response.json();
        console.log(result);

    } else count = 0;
}