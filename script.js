const fullName = document.querySelector(".name");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const textarea = document.querySelector("textarea");
const submit = document.querySelector(".button");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");
let validName = document.querySelector(".name_error");
let validPhone = document.querySelector(".phone_error");
let validEmail = document.querySelector(".email_error");
let validTextarea = document.querySelector(".textarea_error");
let validation = document.querySelector(".validation_error");
let body = document.body;

document.addEventListener("DOMContentLoaded", () => {
    let themeColor = localStorage.getItem("theme");
    let displayMoon = localStorage.getItem("moon");
    let displaySun = localStorage.getItem("sun");
    body.classList.add(themeColor);
    moon.style.display = displayMoon;
    sun.style.display = displaySun;
});

function changeTheme() {
    body.classList.toggle("dark_theme");
    if (body.classList.contains("dark_theme")) {
        moon.style.display = "none";
        sun.style.display = "block";
        localStorage.setItem("theme", "dark_theme");
        localStorage.setItem("moon",  "none");
        localStorage.setItem("sun", "block");

    } else {
        moon.style.display = "block";
        sun.style.display = "none";
        localStorage.setItem("theme", "");
        localStorage.setItem("moon", "block");
        localStorage.setItem("sun", "none");
    };
};

fullName.addEventListener("keyup", validateName);

function validateName() {
    let fullNameValue = fullName.value;
    if (fullNameValue.length == 0) {
        validName.textContent = "Full name is required";
        validName.style.display = "block";
        validName.classList.remove("validation_confirmed");
        return false;
    } else if (!fullNameValue.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        validName.textContent = "Full name is required";
        validName.style.display = "block";
        validName.classList.remove("validation_confirmed");
        return false;
    } else if (fullNameValue.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        validName.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        validName.classList.add("validation_confirmed");
        return true;
    };
};

phone.addEventListener("keyup", validatePhone);

function validatePhone() {
    let phoneValue = phone.value;
    if (phoneValue.length == 0) {
        validPhone.textContent = "Phone no is required";
        validPhone.style.display = "block";
        validPhone.classList.remove("validation_confirmed");
        return false;
    } else if (!phoneValue.match(/^[0-9]{9}$/)) {
        validPhone.textContent = "Phone no must be 9 digits";
        validPhone.style.display = "block";
        validPhone.classList.remove("validation_confirmed");
        return false;
    } else if (phoneValue.match(/^[0-9]{9}$/)) {
        validPhone.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        validPhone.classList.add("validation_confirmed");
        return true;
    };
};

email.addEventListener("keyup", validateEmail);

function validateEmail() {
    let emailValue = email.value;
    if (emailValue.length == 0) {
        validEmail.textContent = "Email is required";
        validEmail.style.display = "block";
        validEmail.classList.remove("validation_confirmed");
        return false;
    } else if (!emailValue.match(/^[A-Za-z]+[._]*[A-Za-z]+[0-9]*[@]+[A-Za-z]+[.]+[A-Za-z]{2,4}$/)) {
        validEmail.textContent = "Email invalid";
        validEmail.style.display = "block";
        validEmail.classList.remove("validation_confirmed");
        return false;
    } else if (emailValue.match(/^[A-Za-z]+[._]*[A-Za-z]+[0-9]*[@]+[A-Za-z]+[.]+[A-Za-z]{2,4}$/)) {
        validEmail.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        validEmail.classList.add("validation_confirmed");
        return true;
    };
};

textarea.addEventListener("keyup", validateTextarea);

function validateTextarea() {
    let textareaValue = textarea.value;
    console.log(textareaValue);
    let textareaLength = 30;
    let left = textareaLength - textareaValue.length;
    if (textareaValue.length == 0) {
        validTextarea.textContent = "Message is required";
        validTextarea.style.display = "block";
        validTextarea.classList.remove("validation_confirmed");
        return false;
    } else if (left > 0) {
        validTextarea.textContent = `${left} more characters required.`;
        validTextarea.style.display = "block";
        validTextarea.classList.remove("validation_confirmed");
        return false;
    } else {
        validTextarea.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        validTextarea.classList.add("validation_confirmed");
        return true;
    };
};

submit.addEventListener("click", validateForm);

function validateForm(event) {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateTextarea()) {
        event.preventDefault();
        validation.style.display = "block";
        setTimeout(() => {
            validation.style.display = "none";
        }, 3000);
        return false;
    };
};

moon.addEventListener("click", changeTheme);
sun.addEventListener("click", changeTheme);







// else if(textareaValue.match(/^[\S]+$/)){
//     validTextarea.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     validTextarea.classList.add("validation_confirmed");
//     return true;
// };





