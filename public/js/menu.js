let addButtonArray = document.querySelectorAll('.add');
let sectionArray = document.querySelectorAll('h3');

let showCalories = document.querySelector('#showCalories');
let showProteins = document.querySelector('#showProteins');
let showFats = document.querySelector('#showFats');
let showCarbs = document.querySelector('#showCarbs');

let result;
let table;
selectedDishes = [];

let accCal = 0;
let accFat = 0;
let accCarbs = 0;
let accProt = 0;


window.onload = (e) => {
    document.querySelector('[data-mealtype="sides"]').click()

    userCount = JSON.parse(localStorage.getItem("userCount"));
    if (userCount == null || userCount) { userCount = [] }

}


const addMeal = async (e) => {

    userCount = JSON.parse(localStorage.getItem("userCount"));
    if (userCount == null) { userCount = [] }

    let referenceElement = e.target.parentElement

    let id = referenceElement.dataset['id'];
    let desc = referenceElement.dataset['name'];
    let qty = referenceElement.dataset['qty'];
    let unit = referenceElement.dataset['unit'];
    let cal = referenceElement.dataset['cal'];
    let protein = referenceElement.dataset['protein'];
    let fat = referenceElement.dataset['fat'];
    let carbs = referenceElement.dataset['carbs'];

    let type = referenceElement.dataset['mealtype'];


    const addedMeal = document.createElement('div');
    addedMeal.classList.add('selected-container');

    addedMeal.innerHTML += `
    <div class="selected-desc">${result[id - 1].name}</div>
    <div class="selected-qty">${result[id - 1].quantity} ${result[id - 1].Unit}</div>
    <div class="selected-cal">${cal}</div>
    <div class="selected-prot">${protein}</div>
    <div class="selected-fat">${fat}</div>
    <div class="selected-carbs">${carbs}</div>`;

    let targetText = '.selected-' + type;

    targetElement = document.querySelector(targetText);
    targetElement.appendChild(addedMeal);

    userLocalInfo = {
        accCal: result[id - 1].cal,
        accFat: result[id - 1].lipids,
        accCarbs: result[id - 1].carbohydrates,
        accProt: result[id - 1].proteins,
    };

    accCal += Number(result[id - 1].cal)
    accFat += Number(result[id - 1].lipids);
    accCarbs += Number(result[id - 1].carbohydrates);
    accProt += Number(result[id - 1].proteins);

    showCalories.innerHTML = accCal;
    showProteins.innerHTML = accProt;
    showFats.innerHTML = accFat;
    showCarbs.innerHTML = accCarbs;

    selectedDishes.push({ table: table, id: id })



    referenceElement.remove();

}


const getSectionData = async (e) => {

    let referenceElement = e.target
    table = referenceElement.dataset['mealtype'];


    const response = await fetch(`/api/query/get-section`, {
        method: "POST",
        body: JSON.stringify({ table: table }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        return result = await response.json()
    } else {
        alert("Failed to register");
    }

}


addButtonArray.forEach(button => button.addEventListener('click', addMeal))
sectionArray.forEach(sec => sec.addEventListener('click', getSectionData))












