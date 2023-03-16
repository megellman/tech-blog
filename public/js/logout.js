// update to destory user session 
const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        header: {'Content-Type': 'application/json'},
    });

    if(response.ok){
        document.location.replace('/');
    } else {
        // alert(response.statusText);
        alert('Failed to log out.');
    }
};

document.querySelector('#logout').addEventListener('click', logout);
