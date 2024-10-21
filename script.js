// JavaScript for login validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Credentials
    const storedUsername = "user123";
    const storedPassword = "password123";

    // Get the entered values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the login
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "products.html"; // Redirect to products page
    } else {
        alert("Invalid username or password!");
    }

});
