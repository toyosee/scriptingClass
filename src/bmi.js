const ConvertBtn = document.getElementById('calculateBMI')
const Weight = document.getElementById('weight')
const Height = document.getElementById('height')

// Object to style the smileys
const smileyStyle = {
    styles: "font-size: 50px;"
}

// Function to calculate BMI
function calculateBMI() {
    let weight = Number(Weight.value)
    let height = Number(Height.value) / 100; // Convert height from cm to meters

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = "Please enter valid weight and height.";
        return;
    }

    const bmi = weight / (height * height);
    const bmiCategory = getBMICategory(bmi);

    // Update the progress bar color based on BMI category
    const progressBar = document.getElementById('progressBar');
    switch(bmiCategory) {
        case "Underweight":
            progressBar.style.backgroundColor = "#28a745"; // Green
            break;
        case "Normal weight":
            progressBar.style.backgroundColor = "#ffc107"; // Yellow
            break;
        case "Overweight":
            progressBar.style.backgroundColor = "#dc3545"; // Red
            break;
        case "Obesity":
            progressBar.style.backgroundColor = "#000000"; // Black
            break;
        default:
            progressBar.style.backgroundColor = "#6c757d"; // Gray (default)
            break;
    }

    progressBar.style.width = bmiCategory === 'Obesity' ? '100%' : '50%'; // For obesity, show full progress bar, else show 25%
    document.getElementById('result').innerHTML = `Your BMI is ${bmi.toFixed(2)} translates to : (${bmiCategory})
                    please follow this <a href = "https://toyotechict.com.ng" target="_blank"> link </a> for consultation
                `;

    // Update the smiley face based on BMI category
    const smiley = document.getElementById('smiley');
    switch(bmiCategory) {
        case "Underweight":
            smiley.innerHTML = "😕"; // Neutral face
            break;
        case "Normal weight":
            smiley.innerHTML = "🙂"; // Happy face
            break;
        case "Overweight":
            smiley.innerHTML = "😐"; // Neutral face
            break;
        case "Obesity":
            smiley.innerHTML = "😔"; // Sad face
            break;
        default:
            smiley.innerHTML = ""; // No face
            break;
    }
    smiley.style = smileyStyle.styles
}

// Function to get BMI category based on result of weight and height
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 24.9 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

// Event listener for BMI calculation button
ConvertBtn.addEventListener('click', function() {
    calculateBMI();
});

