// frontend/app.js
function createUser() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    fetch('/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}

// Function to fetch and display users
function getUsers() {
    fetch('/users')
        .then(response => response.json())
        .then(users => {
            const list = document.getElementById('users-list');
            list.innerHTML = ''; // Clear the list
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name}, ${user.age} years old`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Fetch users on page load
window.onload = getUsers;
