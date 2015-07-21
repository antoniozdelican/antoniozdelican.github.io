/* smooth scrolling */
$(function(){
	$('a[href^="#"]').on('click', function (e) {
	    e.preventDefault();

	    var target = $(this.hash).offset();
	    var $target = $(target);

	    $('html, body').stop().animate({
	         'scrollTop': $(this.hash).offset().top
	    }, 900, 'swing');
	});
});

/* swiper */
$(function() {
 	var mySwiper = new Swiper('.swiper-container', {
   scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        preventClicks: false
	});       
});

/* modal */
$(function() {
	$('.portfolio-item').on('click', function() {
		/* dynamically adding data into elements */
		var title = $(this).find('h3').text();
		var description = $(this).find('.hidden-description').text();
		var link = $(this).find('.hidden-link a').attr('href');
		var image = $(this).find('img').attr('src');
		$('#portfolioModal').find('.modal-title').text(title);
		$('#portfolioModal').find('.modal-description').text(description);
		$('#portfolioModal').find('.modal-link a').attr('href', link).text(link);
		$('#portfolioModal').find('.modal-body img').attr('src', image);
		/* toggle modal */
		$('#portfolioModal').modal('toggle');
	});
});