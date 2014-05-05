(function($){
  "use strict";
	window.scrollTo(0,0);
	resizeViewport();
   
	$(window).resize(function() {
		resizeViewport();
	});
	
	function resizeViewport(){
		var windowHeight = $(window).height();
		if (windowHeight < 850){ 
			newHeight = 850
			$('body').addClass('fixed');
		} else {
			$('body').removeClass('fixed');
			var newHeight = windowHeight - 200;
		}
		
		$('#header').css('height', newHeight);
	}
	
	$(".scroll-link").click(function(e) {
		e.preventDefault();
		var scrollLink = $(this).attr('href')
		 $('html, body').animate({
			 scrollTop: $(scrollLink).offset().top - 50
		 }, 1000);
	});
	
})(jQuery);