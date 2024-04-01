document.addEventListener('DOMContentLoaded', function () {
    displayPosts();

    //display posts from localStorage
    function displayPosts() {
        const blogPosts = document.getElementById('blogPosts');
        blogPosts.innerHTML = '';

        // get posts from localStorage
        const posts = JSON.parse(localStorage.getItem('posts')) || [];

        if (posts.length === 0) {
            const noPosts = document.createElement('p');
            noPosts.textContent = 'No posts here!';
            blogPosts.appendChild(noPosts);
            return;
        }

        //loops through posts and creates html elements to display
        posts.forEach(function (post) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>Author: ${post.username}</p>
            `;
            blogPosts.appendChild(postElement);
        });
    }

    // toggle dark mode
    function toggleMode() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelectorAll('a').forEach(function (link) {
            link.classList.toggle('dark-mode');
        });
    }

    window.toggleMode = toggleMode;
});