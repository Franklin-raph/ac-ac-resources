// $(document).ready(function(){
// });
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