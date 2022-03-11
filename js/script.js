$(document).ready(function(){
    $(".slider-carousel").owlCarousel({

        items:3,
        loop: true,
        center:true,
        responsiveclass:true,
        autoplay:true,

        responsive:{

            0:{

                items: 1,
               
            },

            600:{

                items:1,
               
            },

            1000:{

                items:3,
            
            }
        }

    });
  });

  var mixer = mixitup('.filter');

 



  $(document).ready(function(){
    $('.test-carousel').owlCarousel({
            items:3,
            autoplay:false,
            nav:true,
            loop:true,
            responsiveclass:true,
        responsive:{

            
            0:{

                items: 1,
               
            },

            600:{

                items:1,
               
            },

            1000:{

                items:3,
            
            }
        }
       
     })
     $( ".owl-prev").html('<i class="fa-solid fa-arrow-left"></i>');
     $( ".owl-next").html("<i class='fa-solid fa-arrow-right'></i>");
    }); 