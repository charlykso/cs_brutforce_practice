
const signup = document.getElementById('signup');
const signin = document.getElementById('signin');
const loginpage = document.getElementById('login');
const signuppage = document.getElementById('register');

const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const passwordConfirmation = document.getElementById('confirmPassword')
const phone = document.getElementById('phone');

const userErr = document.getElementById('user-err')
const phoneErr = document.getElementById('phone-err');
const emailErr = document.getElementById('email-err');
const passErr = document.getElementById('pass-err');
const confirmPassErr = document.getElementById('cpass-err');



signup.addEventListener('click', () => {
    loginpage.style.display = 'none';
    signuppage.style.display = 'block';
    signin.classList.remove('active');
    signup.classList.add('active');
})

signin.addEventListener('click', () => {
    signuppage.style.display = 'none';
    loginpage.style.display = 'block';
    signup.classList.remove('active');
    signin.classList.add('active');
});

password.addEventListener('keyup', () => {
    if(password.value === ''){
        passErr.innerHTML = 'Password is required';
    }else if(password.value != '' && password.value.length < 6){
        passErr.innerHTML = 'Password must be at least 6 characters long';
    }
    else{
        passErr.innerHTML = '';
    }
})

passwordConfirmation.addEventListener('keyup', () => {
    if(password.value != passwordConfirmation.value){
        confirmPassErr.innerHTML = 'Password and Confirm password must match'
    }else{
        confirmPassErr.innerHTML = ''
    }
})

function validateInput() {
    if(username.value === ''){
        userErr.innerHTML = 'Username is required';
    }else{
        userErr.innerHTML = '';
    }

    if(phone.value === ''){
        phoneErr.innerHTML = 'Phone number is required';
    }else{
        phoneErr.innerHTML = '';
    }

    if(email.value === ''){
        emailErr.innerHTML = 'Email is required';
    }else{
        emailErr.innerHTML = '';
    }
    if(passwordConfirmation.value === ''){
        confirmPassErr.innerHTML = 'Confirm password is required';
    }else{
        confirmPassErr.innerHTML = '';
    }
}

function sendRegistrationData(event){
    event.preventDefault()
    validateInput();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    const userErr = document.getElementById('user-err').innerText;
    const phoneErr = document.getElementById('phone-err').innerText;
    const emailErr = document.getElementById('email-err').innerText;
    const passErr = document.getElementById('pass-err').innerText;

    if (userErr == '' && emailErr == '' && passErr == '' && phoneErr == '') {
        const data = {
            username,
            email,
            password,
            phone,
        }
        console.log('working')
        console.log(data)

        // fetch('http://localhost:3000/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(response => {
        //     return response.json()
        // }).then(data => {
        //     console.log(data)
        // }).catch(err => {
        //     console.log(err)
        // })
    }
}