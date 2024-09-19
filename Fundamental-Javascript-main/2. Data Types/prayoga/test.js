//Tugas Nilai Teman dengan menggunakan array of string
const name = "Prayoga";

console.log(name[4]) 

const myfruits = ['Jeruk', 'Mangga', 'Apel', 'Strawberry'];

console.log(myfruits[0])
console.log(myfruits[1])
console.log(myfruits[2])
console.log(myfruits[3])

myfruits[0] = 'Lemon'
myfruits[1] = 'Pisang'

console.log(myfruits)

//Tugas Nilai Teman dengan menggunakan array of number
const friendScores = [90, 80, 95, 100]

console.log(friendScores[0])
console.log(friendScores[1])
console.log(friendScores[2])
console.log(friendScores[3])

friendScores[1] = 85
console.log(friendScores)

//Use Case
const people = ['Yoga', 'Kelvin', 'Finka', 'Abi'];
const selectedPersons = people[2];
console.log(selectedPersons)

//Use Case Array Of Array
const myBoxes = [
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]
]

console.log(myBoxes[1])
console.log(myBoxes[2][0])

myBoxes[0][1] = 99

console.log(myBoxes)

myBoxes[2][2] = 100
console.log(myBoxes)

//Use Case Langsung menyebut
const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace'][3];
console.log(students)

// const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
// console.log(colors)

// colors[2] = 'Cyan'
// console.log(colors)



const colors = ['Red', 'Green', 'Blue', 'Yellow'];

for (const color of colors) {
    console.log(color)
}

const animals = ['Cat', 'Dog', 'Elephant'];

for (const index in animals) {
    console.log(`posisi ${index}: ${animals[index]}`)
}

