// Get input elements
const serialNumber = document.getElementById('serialNumber');
const name = document.getElementById('name');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operator = document.getElementById('operator');
const SubmitBtn = document.getElementById('submit_btn');
const ResetBtn = document.getElementById('reset_btn');
const ResetTblBtn = document.getElementById('reset_tbl');
const Result = document.getElementById('resultTable');

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get input values
  let SerialNumber = serialNumber.value;
  let Name = name.value;
  let Num1 = Number(number1.value);
  let Num2 = Number(number2.value);
  let Operator = operator.value;

  // Perform calculation based on the selected operator
  let result;
  switch (Operator) {
    case '+':
      result = Num1 + Num2;
      break;
    case '-':
      result = Num1 - Num2;
      break;
    case '*':
      result = Num1 * Num2;
      break;
    case '/':
      result = Num1 / Num2;
      break;
    default:
      result = 'Invalid operator';
  }

  // Create an object to store the form data and result
  let formData = {
    serialNumber: SerialNumber,
    name: Name,
    number1: Num1,
    number2: Num2,
    operator: Operator,
    result: result
  };

  // Save the form data and result to local storage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Display the result in a dynamic table
  displayResult(formData);
}

// Function to display the result in a dynamic table
function displayResult(formData) {
  // Construct table using template string
  let table = `
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Name</th>
          <th>Operation</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${formData.serialNumber}</td>
          <td>${formData.name}</td>
          <td>${formData.number1} ${formData.operator} ${formData.number2}</td>
          <td>${formData.result}</td>
        </tr>
      </tbody>
    </table>
  `;

  // Load the table into the specified div
  Result.innerHTML = table;
}

// Function to handle form reset
function handleReset(event) {
  event.preventDefault(); // Prevent the default form reset
  serialNumber.value = ''; // Clear serial number field
  name.value = ''; // Clear name field
  number1.value = ''; // Clear number 1 field
  number2.value = ''; // Clear number 2 field
  operator.selectedIndex = 0; // Reset operator dropdown to the first option
//   // Clear the result table
//   Result.innerHTML = '';
}

// Function to handle table and local storage reset
function handleResetTable(event) {
    event.preventDefault(); // Prevent the default action
    
    // Clear items in the table
    Result.innerHTML = '';
  
    // Clear items in local storage
    localStorage.clear();
  }
  
  // Event listener for table and local storage reset
  ResetTblBtn.addEventListener('click', handleResetTable);

// Event listener for form submission
SubmitBtn.addEventListener('click', handleSubmit);

// Event listener for form reset
ResetBtn.addEventListener('click', handleReset);

// Retrieve stored form data on page load
window.onload = function () {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    displayResult(formData);
  }
};
