const loginForm = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(username && password){
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

const signupForm = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && password){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            console.log('signup successful!');
            document.location.replace('/');
        } else {
            alert('Failed to signup');
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', signupForm);
document.querySelector('.signup-form').addEventListener('submit', signupForm);