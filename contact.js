
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Simulate a successful form submission
  document.getElementById("responseMsg").textContent = "Thank you! Your message has been sent.";
  
  // Clear form fields
  document.getElementById("contactForm").reset();
});
