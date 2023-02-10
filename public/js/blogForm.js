const blogForm = async (e) => {
    e.preventDefault();

    const post_title = document.querySelector('#title').value.trim();
    const contents = document.querySelector('#content').value.trim();

    if(post_title && contents){
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({post_title, contents}),
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
