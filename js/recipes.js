// Functionality for temperature conversion
const fahrenheitField = document.querySelector('#fahrenheitInput');
const convertButton = document.querySelector('#convertButton');
const output = document.querySelector('#result');
const resetButton = document.querySelector('#resetButton');

convertButton.addEventListener('click', convertTemp);
resetButton.addEventListener('click', resetFields);

function resetFields() {
    if (fahrenheitField.value !== "" || output.value !== "") {
        fahrenheitField.value = "";
        output.textContent = "";
    }
}

function convertTemp() {
    const userTemp = Number(fahrenheitField.value);
    const celsiusTemp = (userTemp -32) * (5/9);
    output.textContent = celsiusTemp.toFixed(1);
}