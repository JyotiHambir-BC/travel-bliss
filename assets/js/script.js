
// document.addEventListener("DOMContentLoaded", function () {
//     const submitButton = document.getElementById("submit");
  
//     submitButton.addEventListener("click", function () {
//       alert(`Thank you for choosing ${document.title}! 
//         We have received your Enquiry. 
//         We will get back to you soon.!!`);
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");
  
    submitButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent form submission (if needed)
  
      // Show Bootstrap modal
      const thankYouModal = new bootstrap.Modal(document.getElementById("thankYouModal"));
      thankYouModal.show();
    });
  });
  