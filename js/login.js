// step 1: Login Btn Added
document.getElementById('btn-login').addEventListener('click', function(){
    // step 2 : get email address inside the input field
    // always remember to use .value to get text from an input field

    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    console.log(email);

    // step 3: get password inside the input field

    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    console.log(password);

    // This is not proper step 
    if(email==='kabir@gmail.com' && password==='Tausif'){
        window.location.href='bank.html';
    }
    else{
        alert('Invalid User');
    }
})

