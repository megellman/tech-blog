// form that submits blog info to update
const blogForm = async (e) => {
    e.preventDefault();

    const post_title = document.querySelector('#title').value.trim();
    const contents = document.querySelector('#content').value.trim();
    const id = window.location.href.split('/').pop();
    
    const updates = {
        post_title,
        contents,
        id
    }
    if(updates){
        const response = await fetch(`/api/blog/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({updates}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace(`/homepage/${id}`);
        } else {
            alert('Failed to create blog');
        }
    }
};

document.querySelector('.blog-form').addEventListener('submit', blogForm);
