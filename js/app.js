let header = document.querySelector(".header");
let scrollToTop = document.querySelector(".scroll-to-top");

let waypoint = new Waypoint({
    element: document.getElementById('share'),
    handler: function(direction) {
        if (direction == 'down'){
            header.classList.add("shadow")
            header.classList.add("animate__slideInDown")
            scrollToTop.classList.add("animate__slideInUp")
            scrollToTop.style.display = "block"

        }else{
            header.classList.remove("shadow")
            header.classList.remove("animate__slideInDown")
            header.classList.remove("scrollToTop")
            scrollToTop.classList.remove("animate__slideInUp")
            scrollToTop.style.display = "none"
        }
    },
    offset : '75%'
})

$(document).ready(function(){
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});

ScrollReveal({
    origin : "top",
    distance: "80px",
    duration : 1000,
    easing: 'ease-in',
    reset:true
}).reveal('.content',{
    interval : 300,
    mobile:false,
});

ScrollReveal({
    origin : "left",
    distance: "80px",
    duration : 1000,
    easing: 'ease-in',
    reset:true
}).reveal('.contentLeft',{
    interval : 300,
    mobile:false,
});

ScrollReveal({
    origin : "right",
    distance: "80px",
    duration : 1000,
    easing: 'ease-in',
    reset:true
}).reveal('.contentRight',{
    interval : 300,
    mobile:false,
});


// loadMore('.content').then(function () {
//     ScrollReveal().sync();
// });