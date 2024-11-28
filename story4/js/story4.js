$(document).ready(function () {
  // Preload the open door image
  const openDoorImg = new Image();
  openDoorImg.src = './homepage/img/opendoors.png';

  // Door hover effect
  $('#door-image').hover(
    function () {
      $(this).attr('src', './homepage/img/opendoors.png');
    },
    function () {
      $(this).attr('src', './homepage/img/closeddoors.png');
    }
  );

  // Preloader fade-out
  $('#door-image').click(function () {
    $('#preloader').fadeOut('slow', function () {
      $('.scroll-container').fadeIn('slow');
    });
  });

  // Show specific story
  function showStory(storyId) {
    $('.story').hide();
    $(storyId).fadeIn('swing');
  }

  // Button click handlers for stories
  $('#storyOneBtn').click(() => showStory('#storyOne'));
  $('#storyTwoBtn').click(() => showStory('#storyTwo'));
  $('#storyThreeBtn').click(() => showStory('#storyThree'));
  $('#storyFourBtn').click(() => showStory('#storyFour'));

  // Clear button handler
  $('.endbtn').click(() => $('.story').hide());

// Restart button functionality (reset the page)
$('#reset').click(function() {
  // Hide all stories
  $('.story').hide();
  
  // Hide the pet selection screen
  $('.scroll-container').fadeOut('slow', function() {
    // Show the preloader again
    $('#preloader').fadeIn('slow');
  });
});

 // Create the paw print elements and make them follow the cursor
 let timeout;
 const pawContainer = $('#paw-animation'); // Paw container
 
 $(document).mousemove(function (e) {
     // Reset the timer on every move
     clearTimeout(timeout);
     
     // Reposition the paw print container next to the cursor
     pawContainer.css({
         top: e.pageY + 'px',
         left: e.pageX + 'px'
     });
     
     // After 2 seconds of rest, trigger the paw animation
     timeout = setTimeout(function() {
         // Show the paw prints animation
         pawContainer.css('opacity', 1);
         
         // Start rotating through paw print images
         rotatePaws();
     }, 1000); // 1000 ms = 1 seconds delay
 });

 // Function to rotate paw prints images
 function rotatePaws() {
     const paws = $('.paw');
     let index = 0;
     
     // Hide all paws initially
     paws.hide();
     
     // Rotate the paw prints every 1 second
     setInterval(function () {
         paws.hide(); // Hide all images
         $(paws[index]).show(); // Show the current image
         index = (index + 1) % paws.length; // Move to next image, looping back after 3
     }, 500); // 500 ms = 0 second for each paw print to show
 }

 // Hide paw prints after animation
 $(document).click(function () {
     pawContainer.css('opacity', 0); // Hide after click
 });

});