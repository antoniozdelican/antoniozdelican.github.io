/* smooth scrolling */
$(function(){
	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();

	    var id = $(this).attr('href');
	    var completeCalled = false;

	    var target = $(this.hash).offset();
	    var $target = $(target);

	    $('html, body').stop().animate({
	         'scrollTop': $(this.hash).offset().top
	    }, 900, 'swing', function() {
	    	if (id.indexOf('contact') >= 0 && !completeCalled) {
	    		// so the callback isn't called twice
	    		completeCalled = true;
	    		$('a.email').fadeOut(700).fadeIn(700).fadeOut(700).fadeIn(700);
	    	}
	    });
	});
});

/* swiper */
/*$(function() {
 	var mySwiper = new Swiper('.swiper-container', {
   scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        preventClicks: false
	});       
});*/

$(function() {

	$('.swiper-container').each(function() {
		
		$(this).swiper({
			scrollbar: $(this).find('.swiper-scrollbar'),
			scrollbarHide: false,
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 30,
			grabCursor: true,
			preventClicks: false
		});
	});      
});

/* modal */
$(function() {
	$('.portfolio-item').on('click', function() {
		/* dynamically adding data into elements */
		var title = $(this).find('h3').text();
		var description = $(this).find('.hidden-description').text();
		$('#portfolioModal').find('.modal-title').text(title);
		$('#portfolioModal').find('.modal-description').text(description);
		
		var link = $(this).find('.hidden-link a').attr('href');
		var image = $(this).find('img').attr('src');
		
		$('#portfolioModal').find('.modal-link a').attr('href', link).text(link);

		/* if video toggle iframe, else put image */
		if ($(this).find('.hidden-link').hasClass('video')) {
			$('#portfolioModal').find('.modal-body img').hide();
			$('#portfolioModal').find('.modal-body iframe').show();
			/* different url for embeded video from vimeo */
			var iframeLink = $(this).find('.hidden-link a').data('iframe-link');
			$('#portfolioModal').find('.modal-body iframe').attr('src', iframeLink);
		}
		else {
			$('#portfolioModal').find('.modal-body iframe').hide();
			$('#portfolioModal').find('.modal-body img').show();
			$('#portfolioModal').find('.modal-body img').attr('src', image);	
		}
				
		/* toggle modal */
		$('#portfolioModal').modal('toggle');
	});
});