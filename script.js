const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

/* Toggle Forms */

loginBtn.addEventListener("click", () => {
  loginForm.classList.add("active-form");
  registerForm.classList.remove("active-form");

  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
  registerForm.classList.add("active-form");
  loginForm.classList.remove("active-form");

  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
});

/* Validation Functions */

function showError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
}

function clearError(input) {
  const error = input.nextElementSibling;
  error.innerText = "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Login Validation */

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");

  let valid = true;

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    valid = false;
  } else if (!validateEmail(email.value)) {
    showError(email, "Enter valid email");
    valid = false;
  } else {
    clearError(email);
  }

  if (password.value.trim() === "") {
    showError(password, "Password is required");
    valid = false;
  } else if (password.value.length < 6) {
    showError(password, "Minimum 6 characters");
    valid = false;
  } else {
    clearError(password);
  }

  if (valid) {
    alert("Login Successful!");
    loginForm.reset();
  }
});

/* Register Validation */

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("registerName");
  const email = document.getElementById("registerEmail");
  const password = document.getElementById("registerPassword");

  let valid = true;

  if (name.value.trim() === "") {
    showError(name, "Name is required");
    valid = false;
  } else {
    clearError(name);
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    valid = false;
  } else if (!validateEmail(email.value)) {
    showError(email, "Enter valid email");
    valid = false;
  } else {
    clearError(email);
  }

  if (password.value.trim() === "") {
    showError(password, "Password is required");
    valid = false;
  } else if (password.value.length < 6) {
    showError(password, "Minimum 6 characters");
    valid = false;
  } else {
    clearError(password);
  }

  if (valid) {
    alert("Registration Successful!");
    registerForm.reset();
  }
});