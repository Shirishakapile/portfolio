// Example of form validation (if you had a form)
document.querySelector('form').addEventListener('submit', function(e) {
    const email = document.querySelector('input[name="email"]').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email.');
        e.preventDefault();  // Stop form submission
    }
});
