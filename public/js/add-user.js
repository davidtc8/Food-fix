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

  // console.log('\n\n dody and response', body, response.json())

  if (response.ok) {
    document.location.replace("/calculator");
  } else {
    alert("Failed to register");
  }


}

document
  .querySelector("#personal-info")
  .addEventListener("submit", newFormHandler);
