var product = document.getElementById("product");
var searchbar = document.getElementById("search-bar");
var productlist = product.querySelectorAll("div > div");

searchbar.addEventListener("keyup", function(event) {
    var enteredvalue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        
        var productname = productlist[count].querySelector("h2").textContent.toUpperCase();


        if (productname.indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
