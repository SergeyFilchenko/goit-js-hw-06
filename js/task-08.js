const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  // const formElements = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Не все поля были запонены!");
  }

  const obj = {
    email: form.email.value,
    password: form.password.value,
  };

  console.log(obj);

  form.reset();
}



