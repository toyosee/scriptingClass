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

function makeWeDrinkWaterChopFood(liquid, food){
    let step1 = liquid
    let step2 = food
    let guide = `
        How to eat ${step1} and ${step2}
        Make you first carry cup put ${step1} inside,
        Then carry plate put ${step2} inside.
        E finish. enjoy your ${step2} 
        `
    return guide
}

console.log(makeWeDrinkWaterChopFood("Palm Wine", "Chin Chin", "akara"))