async function newFormHandler(event) {
  event.preventDefault();

  const user_name = document.querySelector("#name").value;
  const user_email = document.querySelector("#email").value;
  const user_age = document.querySelector("#number").value;
  const user_gender = document.querySelector("#dropdown2").value;
  const user_shape = document.querySelector("#dropdown").value;
  const additionalC = document.querySelector("textarea-one").value;

  const response = await fetch(`/api/user`, {
    method: "POST",
    body: JSON.stringify({
      user_name,
      user_email,
      user_age,
      user_gender,
      user_shape,
      additionalC,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to register");
  }
}

document
  .querySelector(".survey-form")
  .addEventListener("submit", newFormHandler);
