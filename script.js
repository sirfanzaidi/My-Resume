hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}



var typed = new Typed(".loop",{
    strings : ["Non Linear Editor", "YouTuber","Video Editor","Social Media Expert"],

    typeSpeed : 150,
    backSpeed : 150,
    looped : true
})

