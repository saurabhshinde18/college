function validateForm() {
    let isValid = true;

    let firstName = document.getElementById("firstName").value.trim();
    let firstNameError = document.getElementById("firstNameError");
    if (!/^[A-Za-z]{6,}$/.test(firstName)) {
        firstNameError.textContent = "First Name must be at least 6 letters.";
        isValid = false;
    } else {
        firstNameError.textContent = "";
    }

    let lastName = document.getElementById("lastName").value.trim();
    let lastNameError = document.getElementById("lastNameError");
    if (lastName === "") {
        lastNameError.textContent = "Last Name cannot be empty.";
        isValid = false;
    } else {
        lastNameError.textContent = "";
    }

    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format (e.g., name@domain.com).";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    let mobile = document.getElementById("mobile").value.trim();
    let mobileError = document.getElementById("mobileError");
    let mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        mobileError.textContent = "Mobile number must be 10 digits.";
        isValid = false;
    } else {
        mobileError.textContent = "";
    }

    let address = document.getElementById("address").value.trim();
    let addressError = document.getElementById("addressError");
    if (address === "") {
        addressError.textContent = "Address cannot be empty.";
        isValid = false;
    } else {
        addressError.textContent = "";
    }

    return isValid;
}
