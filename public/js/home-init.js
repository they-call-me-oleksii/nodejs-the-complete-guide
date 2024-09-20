const userForm = document.querySelector(".add-user-form");

if (userForm) {
  userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userData = {};
    const formData = new FormData(userForm);
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    formData.forEach((value, name) => {
      userData[name] = value;
    });

    fetch("/create-user", {
      method: "POST",
      body: JSON.stringify(userData),
      headers,
    }).catch((error) => console.error("Error:", error));
  });
}
