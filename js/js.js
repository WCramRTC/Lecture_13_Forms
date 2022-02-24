const userInput_1 = document.getElementById('value-1');
const userInput_2 = document.getElementById('value-2');
const display_result = document.getElementById('txtDisplay');
const btnDispaly = document.getElementById('btnAdd');



btnDispaly.addEventListener('click', AddValues);

function AddValues() {

let value1 = parseInt(userInput_1.value);
let value2 = parseInt(userInput_2.value);
let addedValues = value1 + value2;
display_result.value = addedValues;

}