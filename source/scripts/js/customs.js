jQuery(document).ready(function(){
	var body = $('body');
	
	$(".facebook a").hover(function () {
		$(body).toggleClass("facebook-color");
	});

	$(".github a").hover(function () {
		$(body).toggleClass("github-color");
	});

	$(".skype a").hover(function () {
		$(body).toggleClass("skype-color");
	});

	$(".mail a").hover(function () {
		$(body).toggleClass("mail-color");
	});

	$('#main').fullpage({
		anchors: ['welcome', 'about', 'works', 'contact', 'last'],
		menu: '#nav-menu',
		resize : false,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		autoScrolling: false,
	});

}); // End