const hidePassword = document.getElementById("passwordContent");
const eyeLogo = document.getElementById("eye");

let logInButton = document.getElementById("logInButton");
let logInContainer = document.getElementById("logInContainer");
let homePage = document.getElementById("homePage");
let errorMsg = document.getElementById("error-message");
let emailContent = document.getElementById("emailContent");
let passContent = document.getElementById("passwordContent");

let condition = false;
function toggle() {
    if (condition) {
        hidePassword.setAttribute("type", "password");
        eyeLogo.style.color = '#4d4d4d';
        condition = false;
    } else {
        hidePassword.setAttribute("type", "text");
        condition = true;
        eyeLogo.style.color = "red";
    }
}

logInButton.addEventListener("click", () => {
    let myEmail = emailContent.value;
    let myPassword = passwordContent.value;
    let emailAdd = myEmail.endsWith("@gmail.com");
    if (myEmail === '' && myPassword === '') {
        errorMsg.textContent = 'Please enter your Email and Password😥';
    } else if (myEmail !== '' && myPassword === '') {
        errorMsg.textContent = 'Please enter your Password🙂';
    } else if (myEmail === '' && myPassword !== '') {
        errorMsg.textContent = 'Please enter your Email🥲'
    } else if (myEmail !== '' && myPassword !== '' && emailAdd) {
        // logInContainer.classList.add("d-none");
        // homePage.classList.hide('d-block')
        window.location = 'homePage.html'
        sessionStorage.setItem("email", myEmail);
        sessionStorage.setItem("password", myPassword);
    }

});