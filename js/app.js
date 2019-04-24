 $(document).ready(function () {
    $('#slides').superslides({
       animation:'fade',
        play:5000,

     })

     var types = new Typed(".typed",{
         strings:["Software Engineer","Web Developer","Student"],
         typeSpeed: 80,
         loop: true,
         startDelay: 1000,
         showCursor: false
     });

     $('.owl-carousel').owlCarousel({
         loop:true,
         margin:10,
         nav:true,
         responsive:{
             0:{
                 items:1
             },
             480:{
                 items:2
             },
             768:{
                 items:3
             },
             938:{
                 items:4
             }
         }
     })

     $('.chart').easyPieChart({
         easing:'easyInOut',
         barColor:'#fff',
         trackColor:false,
         scaleColor:false,
         lineWidth:4,
         size:152,
        onStep: function (from,to,percent) {
            $(this.el).find('.percent').text(Math.round(percent))
        }
     });

     var nav= $("#navigation");
     var navTop= nav.offset().top;

     $(window).on("scroll", sticky);

     function  sticky() {
         var body=$("body");

            if($(window).scrollTop() >= navTop){
                body.addClass("fixedNav");

            }
            else {
                body.removeClass("fixedNav");
            }

     }
});

