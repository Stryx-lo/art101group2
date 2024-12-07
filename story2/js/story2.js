

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

// Add this JavaScript inside your story2.js file

$(document).ready(function() {
    let scrollTimeout;

    // Detect mousewheel event
    $(window).on('wheel', function(e) {
        clearTimeout(scrollTimeout);

        // If the wheel is scrolled horizontally (deltaX)
        if (e.originalEvent.deltaX !== 0) {
            // Scroll horizontally
            $(".container").scrollLeft($(".container").scrollLeft() + e.originalEvent.deltaX);
        }

        // Prevent vertical scrolling from affecting the page
        e.preventDefault();

        // Reset timeout to enable smooth scrolling
        scrollTimeout = setTimeout(() => {
            $(".container").css('scroll-snap-type', 'none');
        }, 100);
    });
});
