const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  // const => elements: {email, password},= event.currentTarget;

   if (email.value === "" || password.value === "") {
    return alert("Не все поля были запонены!");
  }

  const inputForm = {
    email: loginForm.email.value,
    password: loginForm.password.value,
  };

  console.log(inputForm);

  loginForm.reset();
}

