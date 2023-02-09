const blogForm = async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if(title && content){
        const response = await fetch()('/api/blog', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog');
        }
    }
};

document.querySelector('.blog-form').addEventListener('submit', blogForm);