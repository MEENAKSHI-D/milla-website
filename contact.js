
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Simulate a successful form submission
  document.getElementById("responseMsg").textContent = "Thank you! Your message has been sent.";
  
  // Clear form fields
  document.getElementById("contactForm").reset();
});
var sidenav=document.getElementById("sidenav");
var menuicon=document.getElementById("menuicon");
var lock=document.getElementById("locknav");
 menuicon.addEventListener("click",function()
{
    sidenav.style.left=0

})
lock.addEventListener("click",function(){
    sidenav.style.left="-50%"
})