const xlsx = require('xlsx');
const fs = require('fs');

// llame el file excell 
const wb = xlsx.readFile('./alimentosClean3.xlsx', { cellDates: true });

////////////////////////////////////////////////////////////////

// getting the first sheet 'BEBIDAS Y BEBIDAS ALCOHOLICAS'

const bvs = wb.Sheets['BEBIDAS Y BEBIDAS ALCOHOLICAS'];

const databvs = xlsx.utils.sheet_to_json(bvs);

console.log(databvs);

fs.writeFileSync("../seeds/beverages.json", JSON.stringify(databvs, null, 3));

// // getting the second  sheet 'PLATILLOS DESAYUNO'

const breakfast = wb.Sheets['PLATILLOS DESAYUNO'];

const databreakfast = xlsx.utils.sheet_to_json(breakfast);

console.log(databreakfast);

fs.writeFileSync("../seeds/breakfast.json", JSON.stringify(databreakfast, null, 3));


// getting the Third  sheet 'GUARNICIONES'


const sides = wb.Sheets['GUARNICIONES'];

const dataSides = xlsx.utils.sheet_to_json(sides);

console.log(dataSides);

fs.writeFileSync("../seeds/sides.json", JSON.stringify(dataSides, null, 3));


// getting the fourth  sheet 'SOPAS'

const soups = wb.Sheets['SOPAS'];

const dataSoups = xlsx.utils.sheet_to_json(soups);

console.log(dataSoups);

fs.writeFileSync("../seeds/soups.json", JSON.stringify(dataSoups, null, 3));


// getting the fifht  sheet 'PLATOS FUERTES'

const meals = wb.Sheets['PLATOS FUERTES'];

const datameals = xlsx.utils.sheet_to_json(meals);

console.log(datameals);

fs.writeFileSync("../seeds/meal.json", JSON.stringify(datameals, null, 3));


// getting the sixth  sheet 'POSTRES'

const dessert = wb.Sheets['POSTRES'];

const dataDessert = xlsx.utils.sheet_to_json(dessert);

console.log(dataDessert);

fs.writeFileSync("../seeds/desserts.json", JSON.stringify(dataDessert, null, 3));