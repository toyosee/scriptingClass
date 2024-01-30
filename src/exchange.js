// exchange.js
// A simple currency converter application
// Based on live Exchange Rate API
// Author: Elijah Abolaji

const apiKey = "99977edc7f840f478c0efb35";

// Function to fetch currencies from API and populate dropdown menus
function populateCurrencies() {
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currencyCodes = data.supported_codes;
            const baseCurrencyDropdown = document.getElementById('base-currency');
            const targetCurrencyDropdown = document.getElementById('target-currency');

            currencyCodes.forEach(currency => {
                const code = currency[0]

                const option1 = document.createElement('option');
                option1.value = code;
                option1.textContent = code;
                baseCurrencyDropdown.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = code;
                option2.textContent = code;
                targetCurrencyDropdown.appendChild(option2);
            });
        })
        .catch(error => {
            console.error("Error fetching currency codes:", error);
        });
}

// Function to check exchange rate
function checkExchangeRate() {
    const baseCurrency = document.getElementById('base-currency').value.toUpperCase();
    const targetCurrency = document.getElementById('target-currency').value.toUpperCase();
    const amount = Number(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
        displayResult('Please enter a valid amount.');
        return;
    }

    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.conversion_rates && data.conversion_rates[targetCurrency]) {
                const exchangeRate = data.conversion_rates[targetCurrency];
                const calculated = exchangeRate * amount;
                displayResult(`${amount} ${baseCurrency} to ${targetCurrency} = ${calculated.toFixed(2)} `);
            } else {
                displayResult('Failed to fetch exchange rates.');
            }
        })
        .catch(error => {
            displayResult(`Error fetching exchange rates: ${error.message}`);
        });
}

function displayResult(result) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<h2><strong>${result}</strong></h2>`;
    // document.getElementById('base-currency').value = '';
    // document.getElementById('target-currency').value = '';
    // document.getElementById('amount').value = '';
}

// Populate currencies when the page loads
window.onload = populateCurrencies;
