$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
	  $('.back-to-top').fadeIn();
	} else {
	  $('.back-to-top').fadeOut();
	}
  });