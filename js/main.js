jQuery(document).ready(function($){
	
  $('.project_list').mixItUp({
	animation: {
		effects: 'rotateX'
	}
  }); 
  
$("#owl-demo").owlCarousel({
 
navigation : true, // Show next and prev buttons
slideSpeed : 100,
paginationSpeed : 400,
singleItem:true,
 autoPlay : true,
  slideSpeed : 2000,
paginationSpeed : 800,
rewindSpeed : 1000,
 pagination: false,
     navigationText: [
      "<img src='./img/left_nav.png' alt='' />",
      "<img src='./img/right_nav.png' alt='' />"
      ],

 
// "singleItem:true" is a shortcut for:
// items : 1,
// itemsDesktop : false,
// itemsDesktopSmall : false,
// itemsTablet: false,
// itemsMobile : false
 
});  
  

  
  
  
    $("#owl-arif").owlCarousel({
     
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
	autoPlay: true,
     
    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
     
    });  
  
/* hover dr */
$('.project_detail').each( function() { $(this).hoverdir(); } );
  
  
  
  
  
  
  
  
  
  
  
/* nav bar */
    var scrollSpeed = 750;
    var scrollOffset = 50;
    var easing = 'swing';

    $('#navbar-top .navbar-default ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: scrollSpeed,
        scrollOffset: scrollOffset,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: easing
    });

    $('.nav-external').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - scrollOffset
        }, scrollSpeed, easing);
    });

    $('#navbar-top .navbar-default').affix({
        offset: {
            top: $('#home').height()
        }
    });  
  
  
  
	
//.parallax(xPosition, speedFactor, outerHeight) options:
//xPosition - Horizontal position of the element
//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
$('.slider_area').parallax("0px", 0.5);
$('.love_area').parallax("50%", 0.5);
$('.unique_area').parallax("50%", 0.1);
$('.testimonial_area').parallax("0px", 0.1);
  
/* nivo light box */

    $('.project_detail a').nivoLightbox({
		clickOverlayToClose: true,
	});


	
/* nice scroll */
  $("html").niceScroll({
  cursorcolor:"#549DC5",
  cursorwidth:"12px",
  cursorborder:"none",
  cursorborderradius:"none",
  autohidemode:"false",	
  zindex :99999,
  scrollspeed: 80,
  cursorminheight: 200,
  })
	
	
	
	
	
	
});




