if (5 === '5') {
    console.log("A is equal to B"); // Will be going this route
  } else {
    console.log("A is not equal to B");
  }

  if (5 == '5') {
    console.log("A is equal to B");
  } else {
    console.log("A is not equal to B"); // Will be going this route
  }


const email = 'prayogarkan12@gmail.com';
const password = 'prayoga123';

const emailInput = 'prayogarkan12@gmail.com';
const passwordInput = 'prayoga123';

if (email === emailInput && password === passwordInput) {
  console.log('Login Successful');
} else {    
  console.log('Email or Password is invalid');
}