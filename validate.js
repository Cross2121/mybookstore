document.getElementById('loginForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the default form submission behavior

   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   // Example validation logic - replace this with your actual validation
   const isValid = username === 'admin' && password === 'secret';

   if (isValid) {
       window.location.href = 'index.html'; 
   } else {
       alert('Invalid username or password.');
   }
});
