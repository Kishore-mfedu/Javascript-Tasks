function validate() {
  var user = document.getElementById("username");
  var pass = document.getElementById("password");
  var outputDiv = document.getElementById("output");
  var isValid = true;

  if (
    user.value.length < 4 &&
    (pass.value.length < 6 || pass.value.length > 12)
  ) {
    outputDiv.textContent =
      "Username should contain at least 4 letters and password should be between 6-12 characters.";
    user.style.borderColor = "red";
    pass.style.borderColor = "red";
    isValid = false;
  } else if (user.value.length < 4) {
    outputDiv.textContent = "Username should contain at least 4 letters.";
    user.style.borderColor = "red";
    isValid = false;
  } else if (pass.value.length < 6 || pass.value.length > 12) {
    outputDiv.textContent = "Password should be between 6-12 characters.";
    pass.style.borderColor = "red";
    isValid = false;
  } else {
    outputDiv.textContent = "Login Successfully!!";
    user.style.borderColor = "";
    pass.style.borderColor = "";
    outputDiv.style.color = "green";
  }
}
