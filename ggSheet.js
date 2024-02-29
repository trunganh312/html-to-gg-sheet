const scriptURL =
  "https://script.google.com/macros/s/AKfycbxjawBZSR01pJNzUYKMuXbX5u-KYz7ezOOjIyXknUdJjwx2ACgKXyhPe2G_jTuPqkIyCA/exec";

const form = document.forms["contact-form"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Thank you! your form is submitted successfully.");
    })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
