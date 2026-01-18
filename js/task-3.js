const inputUser = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
inputUser.addEventListener("input", (event) => {
  if (!event.target.value.trim()) {
    return (userName.textContent = "Anonymous");
  }
  return (userName.textContent = event.target.value.trim());
});
