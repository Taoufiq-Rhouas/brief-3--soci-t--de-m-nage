function show() {
    var mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu.style.display == "block") {
        mobileMenu.style.display = "none";
        mobileMenu.classList.toggle("block");
    }else {
        mobileMenu.style.display = "block";
        mobileMenu.classList.toggle("block");
    }
}

