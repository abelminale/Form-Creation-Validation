document.addEventListener('DOMContentLoaded', () => {
    // Initialize the asynchronous function
    const fetchUserData = () => {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // Select the Data Container Element
        const dataContainer = document.getElementById('api-data');

        // Fetch Data Using try-catch
        const xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl, true);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const users = JSON.parse(xhr.responseText);
                
                // Clear the Loading Message
                dataContainer.innerHTML = '';

                // Create and Append User List
                const userList = document.createElement('ul');
                
                users.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = user.name;
                    userList.appendChild(listItem);
                });
                
                dataContainer.appendChild(userList);
            } else {
                // Error Handling
                dataContainer.innerHTML = '';
                dataContainer.textContent = 'Failed to load user data.';
            }
        };

        xhr.onerror = () => {
            // Error Handling
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.';
        };

        xhr.send();
    };
    
    // Invoke fetchUserData on DOMContentLoaded
    fetchUserData();
});
