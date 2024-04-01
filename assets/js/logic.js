// cleaing local storage
function clearLocalStorage() {
    localStorage.clear();
}

// get blog posts from local storage 
function getBlogPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

// delete specific blog post from local storage
function deleteBlogPost(index) {
    let posts = getBlogPosts();
    posts.splice(index, 1);
    localStorage.setItem('posts', JSON.stringify(posts));
}