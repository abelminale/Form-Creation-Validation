document.addEventListener('DOMContentLoaded', () => {
    // Initialize the asynchronous operation
    const getData = () => {
        // Select the element to display the data
        const dataContainer = document.getElementById('api-data');

        // Start the asynchronous fetch operation
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const url = 'https://jsonplaceholder.typicode.com/users';

            xhr.open('GET', url, true);

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Failed to load user data.');
                }
            };

            xhr.onerror = () => reject('Failed to load user data.');

            xhr.send();
        })
        .then(users => {
            // Clear the "Loading" message
            dataContainer.innerHTML = '';

            // Create and append the user list
            const userList = document.createElement('ul');

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);
        })
        .catch(error => {
            // Display error message
            dataContainer.innerHTML = '';
            dataContainer.textContent = error;
        });
    };

    // Trigger the data fetching operation
    getData();
});
