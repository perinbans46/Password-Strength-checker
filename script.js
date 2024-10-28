function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthIndicator = document.getElementById("strengthIndicator");
    const strengthText = document.getElementById("strengthText");
    let strength = 0;

    if (password.length >= 6) strength++; // Length check
    if (/[A-Z]/.test(password)) strength++; // Uppercase letter check
    if (/[0-9]/.test(password)) strength++; // Number check
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Special character check

    // Update strength indicator width and color
    strengthIndicator.style.width = `${strength * 25}%`;
    strengthText.style.opacity = 1;

    // Set color and text based on strength
    if (strength === 0) {
        strengthIndicator.style.backgroundColor = "#ddd";
        strengthText.textContent = "Strength: Too Short";
    } else if (strength === 1) {
        strengthIndicator.style.backgroundColor = "#ff4d4d";
        strengthText.textContent = "Strength: Weak";
    } else if (strength === 2) {
        strengthIndicator.style.backgroundColor = "#ffb84d";
        strengthText.textContent = "Strength: Fair";
    } else if (strength === 3) {
        strengthIndicator.style.backgroundColor = "#4da6ff";
        strengthText.textContent = "Strength: Good";
    } else if (strength === 4) {
        strengthIndicator.style.backgroundColor = "#4dff88";
        strengthText.textContent = "Strength: Strong";
    }
}
