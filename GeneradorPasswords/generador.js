
function generatePassword() {
    const length = document.getElementById("lengthSlider").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?/";

    let allChars = "";
    if (includeUppercase) allChars += upper;
    if (includeLowercase) allChars += lower;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    document.getElementById("password").textContent = password;
    updateStrength(password);
}

function updateStrength(password) {
    const bars = document.querySelectorAll(".bar");
    const strength = Math.min(password.length / 5, 4);

    bars.forEach((bar, index) => {
        bar.style.background = index < strength ? "#00ff99" : "#555";
    });
}

function copyPassword() {
    const passwordText = document.getElementById("password").textContent;
    navigator.clipboard.writeText(passwordText);
    alert("Password copied!");
}

document.getElementById("lengthSlider").addEventListener("input", function () {
    document.getElementById("lengthValue").textContent = this.value;
});