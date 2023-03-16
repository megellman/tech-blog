const getFormCreatePage = () => {
    let create = true;
    document.location.replace('/blog');
}

document.querySelector('.blog-create').addEventListener('click', getFormCreatePage);
