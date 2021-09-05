successMessage = document.getElementById("successMsg");
submissionForm = document.getElementById("submissionForm");
anotherSubmissionBtn = document.getElementById("anotherSubmissionBtn");

// success message hidden by default
successMessage.style.display = "none";

// show success message and hide submission form
if ((new URLSearchParams(window.location.search)).get('success') == "") {
    successMessage.style.display = "flex";
    submissionForm.style.display = "none";
}

// hide success message and show submission form
anotherSubmissionBtn.addEventListener("click", (e) => {
    successMessage.style.display = "none";
    submissionForm.style.display = "flex";
});
