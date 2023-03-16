const getFormUpdatePage = () => {
    let update = true;
    let id = document.location.href.split('/').pop();
    document.location.replace(`/blog/update/${id}`);
}

document.querySelector('.blog-update').addEventListener('click', getFormUpdatePage);