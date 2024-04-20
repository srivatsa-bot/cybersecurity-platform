document.addEventListener('DOMContentLoaded', function() {
    const articleForm = document.getElementById('articleForm');
    const articleList = document.getElementById('articleList');

    articleForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const articleTitle = this.articleTitle.value;
        const articleLink = this.articleLink.value;

        if (articleTitle && articleLink) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = articleTitle;
            a.href = articleLink;
            li.appendChild(a);
            articleList.appendChild(li);

            this.reset();
        } else {
            alert('Please fill in both fields.');
        }
    });
});
