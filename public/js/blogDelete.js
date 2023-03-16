// deletes blog
const deleteBlog = async (event) => {
    const id = window.location.href.split('/').pop();
        const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('..');
        } else {
            alert('Failed to delete blog!');
        }
    }

document.querySelector('.blog-delete').addEventListener('click', deleteBlog);