jQuery( document ).ready( function( $ ) {
	$( document ).foundation();
	$(".mobile-nav__list-item--menu").on("click", function() {
		$(".dropdown").toggle();
	})

	$(".media li").on("click", function(e) {
		// e.preventDefault();

		$(this).find("a").addClass("selected-media");
	})

	// scroll to section of page when id is clicked
	$('#houseIcon').click(function(){
		$(document).scrollTop(100)
	});

	$('#brushIcon').click(function(){
		$(document).scrollTop(380)
	});

	$('#computerIcon').click(function(){
		$(document).scrollTop(700)
	});
 });