newFormHandler = async (event) => {
  event.preventDefault();

  console.log('esat es la funcion')

  const user_name = document.querySelector("#name").value;
  const user_email = document.querySelector("#email").value;
  const user_password = document.querySelector("#password").value;


  // const response = await fetch(`/api/user`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     user_name,
  //     user_email,
  //     user_password
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  // if (response.ok) {
  //   document.location.replace("/");
  // } else {
  //   alert("Failed to register");
  // }


  document.location.assign('http://localhost:3001/calculator')


}

document
  .querySelector("#personal-form")
  .addEventListener("submit", newFormHandler);
