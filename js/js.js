const userInput_1 = document.getElementById('fName');
const userInput_2 = document.getElementById('lName');
const btnDispaly = document.getElementById('btnDisplay');



btnDispaly.addEventListener('click', function() {
    let value1 = parseInt(userInput_1.value);
let value2 = parseInt(userInput_2.value);

alert(value1 + value2);

})