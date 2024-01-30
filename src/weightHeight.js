// Script for conversion of height units to CM and KG
// Author: Elijah Abolaji

const ConversionBtn = document.getElementById('convertBtn')
const WeightInput = document.getElementById('weightInput')
const HeightInput = document.getElementById('heightInput')
const Display = document.getElementById('conversionResult')


function convertUnits() {
    const weightInput = Number(WeightInput.value);
    const heightInput = Number(HeightInput.value);

    if (isNaN(weightInput) || isNaN(heightInput) || weightInput <= 0 || heightInput <= 0) {
        Display.innerHTML = "Please enter valid weight and height.";
        return;
    }

    const weightUnit = document.getElementById('weightUnit').value;
    const heightUnit = document.getElementById('heightUnit').value;

    let convertedWeight, convertedHeight;

    switch (weightUnit) {
        case 'kg':
            convertedWeight = weightInput;
            break;
        case 'lb':
            convertedWeight = weightInput * 0.453592; // Convert pounds to kilograms
            break;
        case 'g':
            convertedWeight = weightInput / 1000; // Convert grams to kilograms
            break;
        default:
            break;
    }

    switch (heightUnit) {
        case 'cm':
            convertedHeight = heightInput;
            break;
        case 'm':
            convertedHeight = heightInput * 100; // Convert meters to centimeters
            break;
        case 'in':
            convertedHeight = heightInput * 2.54; // Convert inches to centimeters
            break;
        default:
            break;
    }

    Display.innerHTML = `Converted Weight:<strong> ${convertedWeight.toFixed(2)} kg </strong>,<br> Converted Height: <strong>${convertedHeight.toFixed(2)} cm </strong>`;
}

// Button event listiner to handle units calculation
ConversionBtn.addEventListener('click', function() {
    convertUnits();
});