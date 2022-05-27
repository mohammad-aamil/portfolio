(function(){
    jQuery(document).ready(function() {
        /* ---- * SLIDER ---- */
        jQuery('.portfolio_crowsel').owlCarousel({
            loop:true,
            margin:30,
            autoplay:true,
            autoplayTimeout:3000,
            items:3,
            navElement: 'div',
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        }) 
        /* ---- * testimonial_crowsel ---- */
        jQuery('.testimonial_crowsel').owlCarousel({
            loop:true,
            margin:30,
            autoplay:true,
            autoplayTimeout:3000,
            items:1,
            navElement: 'div',
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        }) 
        /* ---- * clients_crowsel ---- */
        jQuery('.clients_crowsel').owlCarousel({
            loop:true,
            margin:30,
            autoplay:true,
            autoplayTimeout:3000,
            items:5,
            navElement: 'div',
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        }) 

        jQuery('.counter').counterUp({
                delay: 10,
                time: 1000
            });   

        jQuery('.prt_view').magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });      

    /* ---------------------------------------------- /*
    * Scroll top
    /* ---------------------------------------------- */

        

        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.page-scroll-up').fadeIn();
            } else {
                jQuery('.page-scroll-up').fadeOut();
            }
        });
		
		jQuery('.page-scroll-up').click(function () {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 700);
			return false;
		});
		
		
		
		

        jQuery('a[href="#totop"]').click(function() {
            jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
            return false;
        });
       

    });
})(jQuery);


