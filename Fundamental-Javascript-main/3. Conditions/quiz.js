/*
Quiz 1:

Use Case:
Compare every fruit prices 1 by 1 and find the cheapest fruit (Use Nested If-Else)
*/

const applePrice = 10000;
const grapePrice = 15000;
const melonPrice = 20000;
const strawberryPrice = 25000; 
const avocadoPrice = 30000;

let cheapest = Infinity; // To find the lowest use Infinity as the initial value
let expensive = -Infinity; // To find the higheste use -Infinity as the initial value
let cheapestFruit = "apple";

if (grapePrice < cheapest) {
  cheapestFruit = "grape";
  cheapest = grapePrice;
}

if (melonPrice < cheapest) {
  cheapestFruit = "melon";
  cheapest = melonPrice;
}

if (strawberryPrice < cheapest) {
  cheapestFruit = "strawberry";
  cheapest = strawberryPrice;
}

if (avocadoPrice < cheapest) {
  cheapestFruit = "avocado";
  cheapest = avocadoPrice;
}

// console.log(
//   `The cheapest fruit is ${cheapestFruit} and the price is ${cheapest}`
// );

/*
Quiz 2:

Use Case:
Compare the currentDay with targetDay by using ternary. If the condition is
- fulfilled then print 'It's a weekend'
- not fulfilled then print 'It's a weekday'
*/

const targetDay = "Saturday";
const currentDay = "Friday";

const result = currentDay === targetDay ? "It's a weekend" : "It's a weekday";
// console.log(result);

/*
Quiz 3: The Treasure Hunt (Using "AND")
Story:

You are an adventurous explorer on a quest to find a hidden treasure in an ancient temple. The treasure is located behind a secret door that only opens when two specific conditions are met.

Scenario:

You have a map (hasMap) that shows the location of the secret door.
You have a special key (hasKey) that can unlock the door.
Task:

Write a JavaScript if statement using the "AND" logical operator to check if both conditions are met (you have the map and the key) before the secret door can be opened.

Variables to start:
*/

let hasMap = true;
let hasKey = true;

if (hasMap === true && hasKey === true) {
  console.log(`The secret door is open`);
} else {
  console.log(`You cannot open the secret door`);
}

/*
Quiz 4: The Space Mission (Using "OR")
Story:

You are the captain of a spaceship on a mission to explore a distant planet. Your spaceship has two critical systems that must be operational for a successful landing.

Scenario:

The navigation system (navSystem) needs to be functioning.
The communication system (commSystem) needs to be functioning.
Task:

Write a JavaScript if statement using the "OR" logical operator to check if at least one of these systems is operational before attempting to land on the planet.

Variables to start:
*/

const navSystem = true;
const commSystem = true;

if (navSystem === true || commSystem === true) {
  console.log(`We can landing successfuly`);
} else {
  console.log(`We cannot land yet`);
}