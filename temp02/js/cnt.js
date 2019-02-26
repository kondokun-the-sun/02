// JavaScript Document
$(document).ready(function () {
     $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
     });
});

$(function(){
    var scroll = new SmoothScroll('a[href*="#"]', {
        ignore: '[data-scroll-ignore]',
        header: '#navber',
        speed: 500,
        offset: -10,
        easing: 'easeInOutCubic',
        before: function (anchor, toggle) {
            var activeLink = document.querySelector('#header .nav .nav-link.active');
            if(activeLink){
                activeLink.classList.remove('active');
            }
            toggle.classList.add('active');
        }
    });
})

