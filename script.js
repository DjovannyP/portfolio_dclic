
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert("Votre message a été reçu, nous vous contacterons sous peu.");

    form.reset();
});
