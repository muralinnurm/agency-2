let menuBtn  = document.querySelector('.navbar-toggler');
let menuIcon =  document.querySelector('.fa-bars-staggered');

menuBtn.onclick = function(){
    if(menuIcon.classList.contains('fa-bars-staggered')){
        menuIcon.classList.replace('fa-bars-staggered', 'fa-x')
    }else{
        menuIcon.classList.replace('fa-x','fa-bars-staggered')
    }
}

// ======================

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    prevArrow: '.prev-btn',
    nextArrow: '.next-btn',
});