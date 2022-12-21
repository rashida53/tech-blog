const commentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const blogpost_id = document.querySelector('.add-comment').getAttribute('id');

    if (content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ content, blogpost_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(`/blogposts/${blogpost_id}`);
        } else {
            alert('Failed to add comment');
        }
    }
};

const commentDeleteHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const commentId = event.target.getAttribute('data-id');
        const blogpost_id = document.querySelector('.add-comment').getAttribute('id');

        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace(`/blogposts/${blogpost_id}`);
        } else {
            alert('Failed to delete comment');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);


document
    .querySelector('.comments-list')
    .addEventListener('click', commentDeleteHandler);

