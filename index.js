document.addEventListener("DOMContentLoaded", function() {
    toggleForms('login'); 

    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
});

function toggleForms(form) {
    if (form === 'login') {
        document.getElementById('loginForm').classList.add('active');
        document.getElementById('registerForm').classList.remove('active');
    } else {
        document.getElementById('registerForm').classList.add('active');
        document.getElementById('loginForm').classList.remove('active');
    }
}

function togglePasswordVisibility(passwordId, iconElement) {
    const passwordInput = document.getElementById(passwordId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconElement.classList.remove('fa-lock');
        iconElement.classList.add('fa-unlock');
    } else {
        passwordInput.type = "password";
        iconElement.classList.remove('fa-unlock');
        iconElement.classList.add('fa-lock');
    }
}
    // input.type = input.type === 'password' ? 'text' : 'password';

    // Handle registration and store data in localStorage
function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    if (username && email && password) {
        // Store registration data in localStorage
        const userData = {
            username: username,
            email: email,
            password: password
        };
        
        localStorage.setItem('registeredUser', JSON.stringify(userData));
        
        // Show success message and switch to login form
        document.getElementById('registerMessage').textContent = 'Registration successful! Please login.';
        document.getElementById('registerMessage').style.color = 'green';
        toggleForms('login');
    } else {
        document.getElementById('registerMessage').textContent = 'All fields are required.';
        document.getElementById('registerMessage').style.color = 'red';
    }
}

// Handle login and validate against localStorage
function handleLogin(event) {
    event.preventDefault();
    
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    
    // Retrieve registered data from localStorage
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    
    if (registeredUser) {
        // Check if login data matches registered data
        if (loginUsername === registeredUser.username && loginPassword === registeredUser.password) {
            document.getElementById('loginMessage').textContent = 'Login successful!';
            document.getElementById('loginMessage').style.color = 'green';
            
            // Redirect to the next page (you can change this to your actual next page)
            window.location.href = 'homepage.html';
        } else {
            document.getElementById('loginMessage').textContent = 'Incorrect username or password.';
            document.getElementById('loginMessage').style.color = 'red';
        }
    } else {
        document.getElementById('loginMessage').textContent = 'No registered user found. Please register first.';
        document.getElementById('loginMessage').style.color = 'red';
    }
}

































































































































// async function handleLogin(event) {
//     event.preventDefault();
//     const username = document.getElementById('login-username').value;
//     const password = document.getElementById('login-password').value;
    

//     const loginData = {
//         username,
//         password
//     };

    // try {
    //     const response = await fetch('http://localhost:8085/techgamerzone/login', {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(loginData)
    //     });

    //     if (response.ok) {
            
    //         const result = await response.text();
    //         document.getElementById('loginMessage').textContent = result;
    //         console.log('Login successful:', result);

    //         //reset the feilds
    //         document.getElementById('login-form').reset();
  

    //         // Show the overlay and animate the logo
    //         const overlay = document.querySelector('.fullscreen-overlay');
    //         const logoTransition = document.querySelector('.logo-transition');
    //         overlay.style.display = 'block';
    //         logoTransition.style.display = 'block';

    //         // Trigger the logo animation
    //         logoTransition.classList.add('animate');

    //         // Wait for the animation to complete before navigating
    //         setTimeout(() => {
    //             window.location.href = 'homepage.html';
    //         }, 2000); // Adjust time to match animation duration


    //     } else {
 
    //          document.getElementById('login-form').reset();

    //         const errorMessage = await response.text();
    //         document.getElementById('loginMessage').textContent = errorMessage;
    //         console.error('Login failed:', errorMessage);
    //     }
    // } catch (error) {
    //     document.getElementById('loginMessage').textContent = 'There was a problem with the login request.';
    //     console.error('There was a problem with the login request:', error);
    //     document.getElementById('login-form').reset();
    // }




    // document.getElementById('loginMessage').textContent = `Logged in as ${username}`;
// }

// async function handleRegister(event) {
//     event.preventDefault();
//     const username = document.getElementById('register-username').value;
//     const email = document.getElementById('register-email').value;
//     const password = document.getElementById('register-password').value;
   
   
//     const registerData = {
//         username,
//         email,
//         password
//     };

//     try {
//         const response = await fetch('http://localhost:8085/techgamerzone/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(registerData)
//         });

//         if (response.ok) {
//             const result = await response.text();
//             document.getElementById('registerMessage').textContent = result;
//             console.log('Registration successful:', result);

//             //reset
//              document.getElementById('register-form').reset();

//             // Optionally, redirect to another page or take further action
//         } else {
//             const errorMessage = await response.text();
//             document.getElementById('registerMessage').textContent = errorMessage;
//             console.error('Registration failed:', errorMessage);
//             document.getElementById('register-form').reset();

            
            
//         }
//     } catch (error) {
//         document.getElementById('registerMessage').textContent = 'There was a problem with the registration request.';
//         console.error('There was a problem with the registration request:', error);
//         document.getElementById('register-form').reset();

//     }


//     // document.getElementById('registerMessage').textContent = `Registered with username ${username} and email ${email}`;
// }

// JavaScript for login page
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Trigger the logo animation
//     const logoTransition = document.querySelector('.logo-transition');
//     logoTransition.style.display = 'block'; // Show the logo
//     logoTransition.classList.add('animate'); // Add the animation class

//     // Wait for the animation to complete before navigating
//     setTimeout(() => {
//         window.location.href = 'homepage.html';
//     }, 1000); // Match the duration of the animation (1s)
// });


// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('login-username').value;
//     localStorage.setItem('username', username); // Store username in localStorage
// });
