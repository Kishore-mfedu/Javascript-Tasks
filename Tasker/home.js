// Function to add red border to input fields with errors
function addErrorBorder(element) {
  element.style.border = "1px solid red";
}

// Function to remove red border from input fields
function removeErrorBorder(element) {
  element.style.border = ""; // Reset to default border
}

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const checkboxError = document.getElementById("checkboxError");
const signInButton = document.getElementById("sign_in");

signInButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission

  emailError.textContent = ""; // Clear previous error messages
  passwordError.textContent = "";
  checkboxError.textContent = "";
  removeErrorBorder(emailInput);
  removeErrorBorder(passwordInput);

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Retrieve the stored login data from local storage
  const storedLoginData = JSON.parse(localStorage.getItem("loginData")) || [];

  // Check if the entered email and password match any of the stored data
  const matchingData = storedLoginData.find(
    (data) => data.email === email && data.password === password
  );

  // Check if the entered email exists in the stored data
  const emailExists = storedLoginData.some((data) => data.email === email);

  let isValid = true; // Initialize isValid variable

  if (!email.trim()) {
    emailError.textContent = "Email is required";
    addErrorBorder(emailInput);
    isValid = false;
  }

  if (!password.trim()) {
    passwordError.textContent = "Password is required";
    addErrorBorder(passwordInput);
    isValid = false;
  }

  if (!document.querySelector('input[type="checkbox"]').checked) {
    checkboxError.textContent = "Are you Remember me??";
    isValid = false;
  }

  if (isValid) {
    if (matchingData) {
      localStorage.setItem("homeEmail", email.trim());
      localStorage.setItem("homePassword", password.trim());
      window.location.href = "./task.html"; // Redirect to task.html directly
    } else {
      if (!emailExists) {
        emailError.textContent = "Invalid email";
        passwordError.textContent = ""; // Clear password error message
        addErrorBorder(emailInput);
        removeErrorBorder(passwordInput);
      } else {
        emailError.textContent = "";
        passwordError.textContent = "Incorrect password";
        removeErrorBorder(emailInput);
        addErrorBorder(passwordInput);
      }
    }
  }

});
