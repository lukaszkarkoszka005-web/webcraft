const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Dziękujemy! Skontaktujemy się z Tobą wkrótce.";

    form.reset();

});