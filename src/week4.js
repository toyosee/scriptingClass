const First = document.getElementById('first')
const Second = document.getElementById('second')
const DrpDown = document.getElementById('action')
const Btn = document.getElementById('btn')
const ResetBtn = document.getElementById('resetBtn')
const Display = document.getElementById('display')

const reset = () => {
    First.value = ''
    Second.value = ''
    Display.innerHTML = ''
}

function operate(operator){
    let inp1 = First.value;
    let inp2 = Second.value;
    let result;

    if (operator == '.') {
        result = `${inp1}, ${inp2}`;
        Display.innerHTML = `
            <h3 class="card-title"> Result Here: </h3>
            <strong style="color: green"> Your entries are : ${result}</strong>`;
    } else if (operator == '+') {
        let calInp1 = Number(inp1);
        let calInp2 = Number(inp2);
        if (!isNaN(calInp1) && !isNaN(calInp2)) {
            result = calInp1 + calInp2;
            Display.innerHTML = `
                <h3 class="card-title">Result =  Result Here: </h3>
                <strong style="color: green">${result}</strong>`;
        } else {
            result = `All inputs for this operation must be numbers`;
            Display.innerHTML = `
                <h3 class="card-title"> Result Here: </h3>
                <strong style="color: red">${result}</strong>`;
        }
    }
}

// Corrected event listener registration
Btn.addEventListener('click', function() {
    operate(DrpDown.value);
});

ResetBtn.addEventListener('click', reset);
