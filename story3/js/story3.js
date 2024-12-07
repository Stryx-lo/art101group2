

// click listener to play animations on images:
// listener for image one:
// $("#dogplaceholderone").click(function() {
//     // click listener test: works!
//     console.log("Image clicked");
//     // Add later: code to make css animate image
// })
// // listener for image two:
// $("#dogplaceholdertwo").click(function() {
//     // click listener test: works!
//     console.log("Image clicked");
//     // Add later: code to make css animate image
// })

// script.js
$(document).ready(function() {
    // When any button with the class 'animateBtn' is clicked
    $('.animateBtn').click(function() {
        // Get the target content ID from the 'data-target' attribute
        var targetContent = $(this).data('target');

        // Add the 'show' class to the target content to trigger the animation
        $(targetContent).addClass('show');
        
        // Optionally, hide the clicked button with a smooth fade-out effect
        $(this).fadeOut(500);  // Adjust 500 to change the speed of the fade-out
    });
});
