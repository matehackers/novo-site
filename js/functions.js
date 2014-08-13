+function ($) {
  'use strict';
  
	$( ".down-button" ).click(function() {
	    $( ".down-button .icon-current" ).toggleClass("fa fa-angle-up fa fa-angle-down");
	});

	$('.open-close').on('click', function() {
		$('.icon-padlock').toggleClass('fa fa-unlock fa fa-lock');
		var text = $('.icon-padlock').html(
			text === ' Matehacker Aberto!' ? ' Matehacker Aberto!' : ' Matehackers Fechado!');
	});

}(window.jQuery);