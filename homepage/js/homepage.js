// homepage.js - This is Donovan testing what a preloader might look like for this website.
// note: you'll need  jQuery.
// also note - thank chatGPT for most of this stuff. 

$(document).ready(function() {
    // When the user clicks anywhere on the preloader
    $('#preloader').click(function() {
        // Hide the preloader
        $('#preloader').fadeOut('slow', function() {
            // Show the main content
            $('#content').fadeIn('slow');
        });
    });
});