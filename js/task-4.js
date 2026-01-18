const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email;
  const password = event.target.elements.password;
  if (!email.value.trim() || !password.value) {
    alert("All form fields must be filled in");
  }
  const newObj = { email: email.value.trim(), password: password.value.trim() };
  console.log(newObj);
  loginForm.reset();
});
