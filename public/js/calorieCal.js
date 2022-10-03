//setting the prevent default functions for the forms-submit
$("#calorie-calculator").submit(function (e) {
  e.preventDefault();
  calcDailyCals();
});

$("#submitData").click(function (e) {
  e.preventDefault();
  addPlan();
});

$("#logout").click(function (e) {
  e.preventDefault();
  logout();
});


//The parseFloat() method parses an argument (converting it to a string first if needed)
//and returns a floating point number. I've used it here because val is multiplied by float number.
function calcDailyCals() {
  let age = parseInt($("#age").val());
  let sex = $('input[name="sex"]:checked').val();
  let weight = parseFloat($("#weight").val()) * 0.453592;
  let height = parseFloat($("#inches").val()) * 2.54;
  let activity = parseFloat($("#activity_level").val());
  let goal = parseInt($("#gain_loss_amount").val());

  let result;
  //remember that the values for "activity" are stored in the calorieCalculator.handlebars
  if (sex === "male") {
    result =
      (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) * activity;
  } else {
    result =
      (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * activity;
  }

  result = Math.round(result + goal);

  calcDailyMacros(result);

}


//function to calculate the daily macros
function calcDailyMacros(result) {
  let carbs = (result * 0.4) / 4;
  let protein = (result * 0.3) / 4;
  let fat = (result * 0.3) / 9;


  $("#carbsResult").html(Math.round(carbs));
  $("#proteinResult").html(Math.round(protein));
  $("#fatResult").html(Math.round(fat));

  calcCalsFromMacros(carbs, protein, fat);
}


function calcCalsFromMacros(carbs, protein, fat) {
  console.log("carbs, protein, fat", carbs, protein, fat);

  let calories = carbs * 4 + protein * 4 + fat * 9;

  $("#caloriesResult").html(Math.round(calories));

}


addPlan = async () => {

  const age = document.querySelector("#age").value;
  const gender = document.querySelector("#male").checked ? 'male' : 'female';
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#inches").value;
  const activity = document.querySelector("#activity_level").value;
  const goal = document.querySelector("#gain_loss_amount").value;


  const protein = document.querySelector("#proteinResult").innerHTML;
  const fat = document.querySelector("#fatResult").innerHTML;
  const carbs = document.querySelector("#carbsResult").innerHTML;
  const calories = document.querySelector("#caloriesResult").innerHTML;
  let user_id = 1;

  console.log('\n\n<<<------------->>>', age, gender, weight, height, activity, goal, protein, fat, carbs, calories)


  const response = await fetch(`/api/user/plan`, {
    method: "POST",
    body: JSON.stringify({
      age,
      gender,
      weight,
      height,
      activity,
      goal,
      protein,
      fat,
      carbs,
      calories,
      user_id,
    }),
    headers: {
      "Content-Type": "application/json"
    },
  });

  // console.log('\n\n dody and response', body, response.json())

  if (response.ok) {
    document.location.replace("/menu");
  } else {
    alert("Failed to register");
  }

}


logout = async () => {

  const response = await fetch('/api/user/logout', {
    method: 'POST'
  })

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Failed to register");
  }

}

document.querySelector('#logout').addEventListener("click", logout);