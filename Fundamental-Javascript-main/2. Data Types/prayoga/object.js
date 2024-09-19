const user = {
    pet: 'Cat',
    password: '12345',
    'Full Name': 'Yoga',
    email: 'yoga@mail.com',
    address: {
        country: 'Indonesia',
        city: 'Karimun'
    }
}

console.log(typeof user); // object

console.log(`Hi ${user['Full Name']}, email: ${user.email}, password: ${user.password}, pet: ${user.pet}`); // Using object values