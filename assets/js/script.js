
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const submitButton = document.getElementById("submit");
  
    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      if (form.checkValidity()) {
        // If all fields are valid, show Bootstrap modal
        const thankYouModal = new bootstrap.Modal(document.getElementById("thankYouModal"));
        thankYouModal.show();
  
        // Optional: Reset form after successful submission
        form.reset();
      } else {
        // If the form is not valid, show error messages
        form.reportValidity();
      }
    });
  });
  