const applePrice = 10000;
const grapePrice = 15000;
const melonPrice = 20000;
const strawberryPrice = 25000; 
const avocadoPrice = 30000;

let cheapest = Infinity; // To find the lowest use Infinity as the initial value
let expensive = -Infinity; // To find the higheste use -Infinity as the initial value
let cheapestFruit = "apple";

if (applePrice < cheapest) {
    cheapestFruit = "apple";
    cheapest = applePrice;
}

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

console.log(
  `The cheapest fruit is ${cheapestFruit} and the price is ${cheapest}`
);

const targetDay = "Saturday";
const currentDay = "Friday";

const result = currentDay === targetDay ? "Yes" : "No";
console.log(result);

const navSystem = true;
const commSystem = true;

if (navSystem === true || commSystem === true) {
  console.log(`We can landing successfuly`);
} else {
  console.log(`We cannot land yet`);
}

const food = 'Orange Juice';

switch (food) {
  case 'Rendang':
    console.log('This is your rendang');
    break;

  case 'Nasi Goreng':
    console.log('This is your nasi goreng');
    break;
  
  case 'Orange Juice':
  case 'Apple Juice':
    console.log('This is your beverage');
    break;

  case 1:
    console.log('One');
    break;

  default:
    console.log('Your request is not available');
    break;
}

switch (true) {
    case 1 > 1:
      console.log("That's true");
      break;
  
    case 3 > 2:
      console.log("That's true");
      break;
  
    default:
      console.log("Nothing is true");
      break;
  }


  const a = 1;
  const b = 2;
  
  const ternary = a === b ? "It's true" : "It's false";
  console.log(ternary);
  
  console.log(a === b ? 50 : 100);
  console.log(1 === 1 ? 50 : 100);
  
  // Real Use Case
  
  let statement = 'Benar';
  
  if (1 === 2) {
    statement = 'Benar';
  } else {
    statement = 'Salah';
  }
  
  console.log(statement);
  
  const ternaryInVariable = 1 === 1 ? 'Benar' : 'Salah';
  console.log(ternaryInVariable);