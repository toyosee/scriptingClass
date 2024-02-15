// Arrays
// replace volvo
// const cars = ["Saab", "Volvo", "BMW", "suzuki"];
// // let car = cars[0];
// // cars[1] = Date.now()
// // cars[2] = []
// let myLen = cars.length
// for(let car = 0; car < myLen; car++){
//     console.log(`${cars[car]} is in Index ${car}`)

// }
// console.log(myLen)

// function to print elements of an array
// function sort_an_array(iDeyWait){
//     let deyWait = iDeyWait
//     let findings = ''
//     for(let item = 0; item < deyWait.length; item++){
//         findings = `${deyWait[item]} is in index ${item}`
//         console.log(findings)
//     }
//     return findings
    
// }

// const cars = ["Saab", "Volvo", "BMW", "suzuki"]
// sort_an_array(cars)

// const Input1 = document.getElementById('first')
// const Input2 = document.getElementById('second')
// const Input3 = document.getElementById('third')
// const Btn = document.getElementById('push')
// const ResetBtn = document.getElementById('reset')
// const Display = document.getElementById('display')

// const bahubali = {
//     firstValue: Input1.value,
//     secondValue: Input2.value,
//     thirdValue: Input3.value,

//     concatenate: function(operation){
//         console.log(operation)
//         if(operation === 'concat'){
//             Display.innerHTML =  `values you entered are: ${this.firstValue},${this.secondValue}`
//         }
//     },

//     addition: function(operation){
//         if(operation === '+'){
//             let result = Number(this.firstValue) + Number(this.secondValue)
//             Display.innerHTML =  `Your result is ${result}`
//         }

//     }, 

//     replicate: function(operation){
//         if(operation === "replica"){
//             // do something
//         }
//     }
// }

// function doIt(operation){
//     bahubali.concatenate(operation)
//     bahubali.addition(operation)
// }

// function reset(){
//     Input1.value = ''
//     Input2.value = ''
//     Input3.value = ''
// }

// Btn.addEventListener('click', function(){
//     doIt(Input3.value)
//     // console.log(Input3.value)
// })

// ResetBtn.addEventListener('click', reset)


// const Btn1 = document.getElementById('btn1')
// const Btn2 = document.getElementById('btn2')
// const Display = document.getElementById('display')
// let message = ''

// const styling = {
//     styles: `font-size:40px; color:green;`,
//     background: `background:pink; color:black; font-size:70px;`
// }


// Btn1.addEventListener('mouseover', function(){
//     message = "Welcome Home"
//     Display.innerHTML = message
//     Display.style = styling.styles
// })

// Btn2.addEventListener('mouseover', function(){
//     message = "Good Bye"
//     Display.innerHTML = message
//     Display.style = styling.background
// })

const food = ['yam', 'egg', 'pizza']
let counter = food.forEach(checker)
// console.log(counter)

function checker(value){
    let items
    if(food.indexOf(value) % 2 === 0){
        console.log("Vitamin")
    }
    else{
        items = `${value} is in Index: ${food.indexOf(value)}`
        console.log(items)
    }

}