// Predefined user credentials (in a real application, this would be securely stored in a database)
const userCredentials = [
    {
    username: 'Brijesh',
    password: '1234'
},
    {
        username: 'Pooja',
        password:'1234'
    },
{
    username: 'Brijesh',
    password: 'Brijesh'
},
{
    username: 'Anil',
    password: '1234'
},
{
    username: 'vinay',
    password: '1234'
}
];

console.log(localStorage);


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password values from input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the credentials
    userCredentials.map((e)=>{
  
        if (username === e.username && password === e.password) {
            // Set authenticated flag in local storage
            localStorage.setItem('authenticated', true);
            // Redirect to home page
            window.location.href = 'home.html';
        } else {
            // Show error message
            document.getElementById('error-message').textContent = 'Invalid username or password!';
        }
    
    })
});

// Check if the user is authenticated
function checkAuthentication() {
    if (!localStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    }
}

// Call this function on the home page to ensure user is logged in
if (window.location.pathname === '/home.html') {
    checkAuthentication();
}
