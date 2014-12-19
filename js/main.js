$(function(){
  "use strict";
	window.scrollTo(0,0);

	$(".scroll-link").click(function(e) {
		e.preventDefault();
		var scrollLink = $(this).attr('href')
		 $('html, body').animate({
			 scrollTop: $(scrollLink).offset().top - 50
		 }, 1000);
	});
	
});
