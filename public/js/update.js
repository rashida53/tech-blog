const updateButtonHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (event.target.hasAttribute('data-id')) {

        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/updates/blog/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response);

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
};

document
    .querySelector('.update-button')
    .addEventListener('click', updateButtonHandler);