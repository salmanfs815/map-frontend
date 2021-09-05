successMessage = document.getElementById("successMsg");
contactForm = document.getElementById("contactForm");

// success message hidden by default
successMessage.style.display = "none";

// show success message and hide contact form
if ((new URLSearchParams(window.location.search)).get('success') == "") {
    successMessage.style.display = "flex";
    contactForm.style.display = "none";
}
