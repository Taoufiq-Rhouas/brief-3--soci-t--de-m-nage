function show() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
        x.classList.toggle("block");
        console.log(x);
    }else {
    x.style.display = "block";
    x.classList.toggle("block");
    console.log(x);
    }
}