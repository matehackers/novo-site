+function ($) {
  'use strict';
    
    $( document ).ready(function() {
        
        $('#close-menu').on( 'click', function( event ) {
            event.preventDefault();
            $('#wrapper').toggleClass('toggled');
        });
    });

}(window.jQuery);