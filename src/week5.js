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

// Week 5

// const Input1 = document.getElementById('first')
// const Input2 = document.getElementById('second')
// const Input3 = document.getElementById('third')
// const Btn = document.getElementById('push')
// const ResetBtn = document.getElementById('reset')
// const Display = document.getElementById('display')

// console.log(Input1.value)
// console.log(Input2.value)

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

// const meals = ['yam', 'egg', 'pizza']
// // let counter = food.forEach(checker)
// // // console.log(counter)

// // function checker(value){
// //     console.log(value)
// // }

// //food.forEach((value)=>{console.log(value)})

// meals.forEach(function(meal){
//     let output = `${meal} is in index ${meals.indexOf(meal)}`
//     console.log(output)
// })

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// numbers.unshift("Our list: ")
// console.log(numbers.join("  "))
// // numbers.push(24)
// // numbers.forEach((number) => {
// //     console.log(number)
// // })

// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter");  
// console.log(myChildren)

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 3); 
// console.log(fruits)

const myArr = [0,[[1,2],[3,4],[5,6]]];
//const newArr = myArr.flat();
console.log(myArr[1][2][1])