// // let a  = parseFloat("3.05")
// // console.log(typeof a)
// // console.log(a)

// const person = ["Musa", 24, 'Alaba', true]

// const customers = {
//     customer1: {
//         name: "Musa",
//         age: 24,
//         address: "Alaba",
//         isPresent: true
//     },
//     customer2: 'Saad',
//     customer3: {
//         accounts: ["savings", "current"],
//         balance: [3000000, 200000]
//     }

// }

// let accountType = customers.customer3.accounts[0]
// let accountBalance = customers.customer3.balance[0]
// let savingAccountDetails = `The Customer's ${accountType} account has a balance of $${accountBalance} `

// console.log(customers.customer1.age)

// // console.log(customer["customer 1"][2])
// // the customer's savings account has a balance of $3000000

// function makeWeDrinkWaterChopFood(liquid, food){
//     let step1 = liquid
//     let step2 = food
//     let guide = `
//         How to eat ${step1} and ${step2}
//         Make you first carry cup put ${step1} inside,
//         Then carry plate put ${step2} inside.
//         E finish. enjoy your ${step2} 
//         `
//     return guide
// }

// console.log(makeWeDrinkWaterChopFood("Palm Wine", "Chin Chin", "akara"))


// console.log("Hello world")

// function funcName(joel){
//     // Do something
// }

// funcName("Photography")

// function youDonSeeAm(){
//     let num1, num2, result
//     num1 = 4
//     num2 = 5
//     result = num1 + num2
//     return result
// }

// // console.log(youDonSeeAm())

// function IBeDynamicGuy(nadaya, nabiyu){
//     let yanbiyu = nadaya + nabiyu
//     return `Na samu ${yanbiyu}`
// }

// console.log(IBeDynamicGuy(9,18))

// function OpenDoor(step1, step2, step3){
//     let process = ``
//     return process
// }

// console.log(OpenDoor("", "", ""))

// let name = 'Joel'

// let names = ['Joel', 'samuel', 'victor', 'uncle Drew']

// const person = {
//     name: "Joel",
//     hobbies: ["Bombing", "Fishing", "Basket ball", "Policing"],
//     family: {
//         females: ["Mum", "Tayo", "Dammy", "Keye"],
//         males: ["Dad", "Bobo Pablo"]
//     },
//     occupation: "Fisher Man",
//     net_worth : "20 million $",
//     title: "ichie pablo olopa",
//     bio: function(){
//         return `${this.name }'s best hobby is ${this.hobbies[2]}`
//     }
// }

// // console.log(person.bio())

// console.log(person.family.males[1])

let entry_name = 'elijah'
let generator = (Math.random()*10000).toFixed(0)
let generated = `Your password is : ${entry_name}${generator}`
console.log(generated)