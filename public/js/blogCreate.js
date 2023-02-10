const getFormPage = () => {
    document.location.replace('/blog');
}

document.querySelector('.blog-create').addEventListener('click', getFormPage);