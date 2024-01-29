// exchange.js
// A simple currency converter application
// Based on live Exchange Rate API
// Author: Elijah Abolaji

const baseCurrency = document.getElementById('base-currency').value.toUpperCase();
const targetCurrency = document.getElementById('target-currency').value.toUpperCase();
const Amount = document.getElementById("amount")

const apiKey = ""
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

function checkExchangeRate() {

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.conversion_rates && data.conversion_rates[targetCurrency]) {
                const exchangeRate = data.conversion_rates[targetCurrency];
                const calculated = exchangeRate * Number(Amount.value)
                // displayResult(`Exchange rate from ${baseCurrency} to ${targetCurrency}: ${exchangeRate}`);
                displayResult(`${Amount.value} ${baseCurrency} to ${targetCurrency} = ${calculated} `)
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
    // let calculatedAmount = Number(Amount.value) * result
    resultContainer.innerHTML = `<h2>${result}</h2>`;
    baseCurrency.value = ''
    targetCurrency.value = ''
    Amount.value = ''
    // console.log(result);
}
