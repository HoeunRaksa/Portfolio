var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Wed Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const cancel = document.getElementById("cancel"); 
    const navbar = document.querySelector(".navbar"); 

  
    menu.addEventListener("click", function () {
        navbar.classList.add("active"); 
        menu.style.display = "none";
        cancel.style.display = "block";
    });

    cancel.addEventListener("click", function () {
        navbar.classList.remove("active");
        menu.style.display = "block";
        cancel.style.display = "none";
    });
});





