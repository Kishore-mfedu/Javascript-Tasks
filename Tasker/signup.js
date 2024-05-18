

  // Function to validate email format
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Function to validate password strength based on character types
  function isStrongPassword(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@$%*?&]/.test(password);
    const passwordLength = password.length;
    

    if (passwordLength < 7) {
      return "Password is too small.";
    }

    // if (passwordLength >= 16) {
    //   return "Password is too big.";
    // }
    if (!hasDigit) {
          return "Password must contain at least one number.";
   }


    if (!password.trim()) {
      return "Password is required to sign up.";
    }

    if (hasUppercase && hasLowercase && !hasSpecialChar) {
      return "Password must contain at least one special character.";
    }

    if (hasUppercase && hasSpecialChar && !hasLowercase) {
      return "Password must contain at least one lowercase letter.";
    }

    if (hasLowercase && hasSpecialChar && !hasUppercase) {
      return "Password must contain at least one uppercase letter.";
    }

    if (hasUppercase && !hasLowercase && !hasSpecialChar) {
      return "Password must contain at least one lowercase letter and one special character.";
    }

    if (hasLowercase && !hasUppercase && !hasSpecialChar) {
      return "Password must contain at least one uppercase letter and one special character.";
    }

    if (hasSpecialChar && !hasUppercase && !hasLowercase) {
      return "Password must contain at least one uppercase letter and one lowercase letter.";
    }

    return true; // Password meets the criteria
  }

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
  const rememberMeCheckbox = document.querySelector(
    ".ck-box input[type='checkbox']"
  );
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const checkboxError = document.getElementById("checkboxError");
  const signUpButton = document.getElementById("sign_in");

  signUpButton.addEventListener("click", function () {
    emailError.textContent = ""; // Clear previous error messages
    passwordError.textContent = "";
    checkboxError.textContent = "";
    removeErrorBorder(emailInput);
    removeErrorBorder(passwordInput);

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const existingData = JSON.parse(localStorage.getItem("loginData")) || [];
    const emailExists = existingData.some((data) => data.email === email);

    if (emailExists) {
      emailError.textContent =
        "Email already exists. Please use a different email.";
      addErrorBorder(emailInput);
      return;
    }

    if (!email && !password) {
      emailError.textContent = "Email is required to sign up.";
      passwordError.textContent = "Password is required to sign up.";
      addErrorBorder(emailInput);
      addErrorBorder(passwordInput);
      return;
    }

    if (!email) {
      emailError.textContent = "Please enter a valid email address.";
      addErrorBorder(emailInput);
      return;
    }

    if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email format.";
      addErrorBorder(emailInput);
      return;
    }

    if (!password) {
      passwordError.textContent = "Password is required to sign up.";
      addErrorBorder(passwordInput);
      return;
    }

    const passwordValidation = isStrongPassword(password);
    if (passwordValidation !== true) {
      passwordError.textContent = passwordValidation;
      addErrorBorder(passwordInput);
      return;
    }

    if (!rememberMeCheckbox.checked) {
      checkboxError.textContent = "Are you remember me??";
      return;
    }

    // Store login data in local storage
    const loginData = {
      email: email,
      password: password,
    };

    let loginDataArray = JSON.parse(localStorage.getItem("loginData")) || [];
    loginDataArray.push(loginData);

    localStorage.setItem("loginData", JSON.stringify(loginDataArray));

    // Display all login data in the console
    console.log("All Login Data:");
    loginDataArray.forEach((data, index) => {
      console.log(
        `Login ${index + 1}: Email - ${data.email}, Password - ${data.password}`
      );
    });

    window.location.href = "./home.html";
  });
