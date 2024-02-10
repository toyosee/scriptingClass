// let food = "akpu"
// // let beginning = food.at(-1) // CharAt(food.length-1)
// let beginning = food[0]
// food[0] = "w"
// console.log(beginning)

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(2, 22);
// console.log(part)

// let text = "I am sorry\n"
// let more = `${text.repeat(100)}`
// console.log(more)

// let message = "I am coming here i am"
// console.log(message.lastIndexOf("am"))

// let mimoo = "victor \n"
// let num = 4

// console.log(mimoo.repeat(num))

// Arrays new Array() or []
const shoes = ["Slippers", "akpola", "slides"]
convertAmToString = shoes.toString() // This line is converting from Array type to string type
// console.log(shoes[1])


const details = {
    person1: {
        firstName:"John", 
        lastName:"Doe", 
        age:46,
    },
    person2: {
        firstName:"Aisha", 
        lastName:"Hong", 
        age:22,
    },
    person3: {
        firstName:"Nicholas", 
        lastName:"Cage", 
        age:56,
    }
}

const information = {
    informate: function(firstName, lastName, age){
        return `${firstName} ${lastName} is ${age} years old`
    }
};

console.log(information.informate(details.firstName, details.lastName, details.age))
