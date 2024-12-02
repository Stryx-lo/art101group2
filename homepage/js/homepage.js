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

    //Add adopted sticker if there's an adopted animal
    const adoptedAnimalId = localStorage.getItem('adoptedAnimal');
    
    if (adoptedAnimalId) {
      // Find the animal container using the ID stored in localStorage
      const animalContainer = document.getElementById(adoptedAnimalId);
     
      if (animalContainer) {
          // Create the "Adopted" sticker
          const sticker = document.createElement('div');
          sticker.classList.add('adopted-sticker');  // Add class instead of inline styles

          // Add the sticker to the animal container
          animalContainer.style.position = 'relative';  // Ensure the container has positioning
          animalContainer.appendChild(sticker);
      }
    }
  
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

});