const logout = async () => {
    const response = await fetch()('/api/users/logout', {
        method: 'POST',
        header: {'Content-Type': 'application/json'},
    });

    if(response.ok){
        document.location.replace('/login');
    } else {
        alert('Failed to logout');
    }
};

document.querySelector('#logout').addEventListener('click', logout);