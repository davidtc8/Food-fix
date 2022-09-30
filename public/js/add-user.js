newFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector("#name").value.trim();
  const user_email = document.querySelector("#email").value.trim();
  const user_password = document.querySelector("#password").value.trim();


  const response = await fetch(`/api/user/`, {
    method: "POST",
    body: JSON.stringify({
      user_name,
      user_email,
      user_password
    }),
    headers: {
      "Content-Type": "application/json"
    },
  });


  if (response.ok) {
    document.location.replace("http://localhost:3001/calculator");
  } else {
    alert("Failed to register");
  }


  // document.location.assign('http://localhost:3001/calculator')


}

document
  .querySelector("#personal-form")
  .addEventListener("submit", newFormHandler);
