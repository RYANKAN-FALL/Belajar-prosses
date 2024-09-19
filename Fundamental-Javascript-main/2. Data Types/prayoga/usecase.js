const fruits = ['Apple', 'Orange', 'Watermelon', 'Grape'];

const scores = [90, 70, 95, 100];

const harga = [fruits, scores];

console.log(fruits[1]);
console.log(scores[2]);

fruits[0] = 'Lemon';
scores[1] = 75;

console.log(harga)

const bulanPertama = [120, 150, 200, 180]

const bulanKedua = [130, 160, 210, 190]

const sales = [
    bulanPertama,
    bulanKedua
]

console.log(sales)

console.log(bulanPertama[0])
console.log(bulanKedua[1]);

sales[1][2] = 220;

console.log(sales)

const customer = ['Alice', 'Bob', 'Charlie', 'David'];

for (const customers of customer) {
    console.log(customers);
}

for (const index in customer) {
    console.log(`posisi ${index} adalah ${customer[index]}`);
}

const products = ['Banana', 'Mango', 'Pineapple', 'Peach'];
console.log(products[2]); // Output: Pineapple
