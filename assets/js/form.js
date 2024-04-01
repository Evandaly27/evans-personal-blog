document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blogForm');
    const formMessage = document.getElementById('forMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = form.username.value.trim();
        const title = form.title.value.trim();
        const content = form.content.value.trim();

        if (!username || !title || !content) {
            formMessage.style.display = 'block';
            return;
        }

        const post = {
            username: username,
            title: title,
            content: content
        };
        // Get posts from localStorage or initialize empty array
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);

        // save posts to localStorage
        localStorage.setItem('posts', JSON.stringify(posts));

        // redirect to posts page
        window.location.href = 'blog.html';
    });
});