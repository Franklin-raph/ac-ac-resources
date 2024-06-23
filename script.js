$(".names").owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: true,
        },
        600: {
            items: 2,
            nav: true,
            loop: true,
        },
        1000: {
            items: 3,
            nav: true,
            loop: true,
        }
    }
});

const navOpen = document.querySelector(".bi-list");
const navClose = document.querySelector(".bi-x-lg");
const sideBar = document.querySelector("nav .sect-2");
const myMenu = document.querySelectorAll("#sect-2");
const htmlElement = document.documentElement;
const bodyElement = document.body;

navOpen.addEventListener("click", () => {
    navOpen.style.display = "none";
    navClose.style.display = "block";
    sideBar.style.display = "block";
    htmlElement.style.overflow = "hidden";

});

navClose.addEventListener("click", () => {
    navOpen.style.display = "block";
    navClose.style.display = "none";
    sideBar.style.display = "none";
    htmlElement.style.overflow = "auto";
});



const anchorTags = document.querySelectorAll("nav .sect-2 ul li");
anchorTags.forEach(anchor => {
    anchor.addEventListener("click", () => {
        sideBar.style.display = "none";
        htmlElement.style.overflow = "auto";
        navClose.style.display = "none";
        navOpen.style.display = "block";
    });
});





