// Menu Burger Scroll

$( document ).ready(function() {
		$( ".cross" ).hide();
		$( ".menu" ).hide();
		$( ".hamburger" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();

		});
	});
		$( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
		});
	});

// Scroll sur les onglets du menu

	$(document).ready(function(){
    	$('a.quoi').on('click', function(evt){
     		evt.preventDefault(); 
			var target = $(this).attr('href');
			$('html, body')
       		.stop()
       		.animate({scrollTop: $(target).offset().top}, 1000 ); 
       	});
       	$('a.fonction').on('click', function(evt){
     		evt.preventDefault(); 
			var target = $(this).attr('href');
			$('html, body')
       		.stop()
       		.animate({scrollTop: $(target).offset().top}, 1000 ); 
       	});
       	$('a.appli').on('click', function(evt){
     		evt.preventDefault(); 
			var target = $(this).attr('href');
			$('html, body')
       		.stop()
       		.animate({scrollTop: $(target).offset().top}, 1000 ); 
       	});
       	$('a.avantages').on('click', function(evt){
     		evt.preventDefault(); 
			var target = $(this).attr('href');
			$('html, body')
       		.stop()
       		.animate({scrollTop: $(target).offset().top}, 1000 ); 
       	});	
       	$('a.tarifs').on('click', function(evt){
     		evt.preventDefault(); 
			var target = $(this).attr('href');
			$('html, body')
       		.stop()
       		.animate({scrollTop: $(target).offset().top}, 1000 ); 
       	});
       	$('a.contact').on('click', function(evt){
     		evt.preventDefault(); 
			var target = $(this).attr('href');
			$('html, body')
       		.stop()
       		.animate({scrollTop: $(target).offset().top}, 1000 ); 		
   	});
});
 
// Carousel

		var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:1,
		    loop:true,
		    margin: 0,
		    autoplay:true,
		    autoplayTimeout:4000,
		    autoplayHoverPause:true,
		    nav:false,
		});
	
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
});

// Scroll to Top

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});


}) // fin document ready