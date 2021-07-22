
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navContainer: '.slider_controls', 
    navText: ['<img src="assets/img/arrow-left.png">', '<img src="assets/img/arrow-right.png">'],
    responsive:{
        0:{
            items:1
        },
        650:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
