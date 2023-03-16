const commentForm = async (e) => {
    e.preventDefault();
   

    const content = document.querySelector('#comment').value.trim();
    const id = window.location.href.split('/').pop();

    if(content){
        const response = await fetch(`/api/comment/${id}`, {
            method: 'POST',
            body: JSON.stringify({
               content: content
            }),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace(`/homepage/${id}`);
        } else {
            alert('Failed to create comment');
        }
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentForm);