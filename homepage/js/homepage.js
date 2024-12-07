$(document).ready(function () {
  // Preload the open door image
  const openDoorImg = new Image();
  openDoorImg.src = './homepage/img/opendoors.png';

  $('#door-image').hover(
    function () {
      // When hovering over the door image, show the open door
      $(this).attr('src', './homepage/img/opendoors.png');
    },
    function () {
      // When not hovering over the door image, show the shelter image
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

  // Clear button handler
  $('.clearbtn').click(() => $('.story').hide());

// Restart button (reset the page)
$('#restart').click(function() {
  // Hide all stories
  $('.story').hide();
  
  // Hide the pet selection screen
  $('.scroll-container').fadeOut('slow', function() {
    // Show the preloader again
    $('#preloader').fadeIn('slow');
  });
});

});

//info button - when the user clicks on the button, opens the popup
  $('#info-button').click(function () {
    console.log("InfoBox is activated!");
    $("#infoBox").toggleClass("show");

  });


// Code for animated story "next" buttons
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


// Music

  $('#playMusic').show();
  $('#stopMusic').hide();

$('#playMusic').click( function(){
  console.log("playing")
  myAudio.play();
  
  $('#stopMusic').show();
  $('#playMusic').hide();

});

$('#stopMusic').click( function(){
  console.log("stopping")
 
  myAudio.pause();

  $('#playMusic').show();
  $('#stopMusic').hide();

});

$('#restart').click(  function(){
  console.log("music has been reset")

  myAudio.pause();
  $('#playMusic').show();
  $('#stopMusic').hide();
})

// Cursor animation
const cursorAnimation = $('#cursor-animation');
let idleTimeout; // Stores the timeout ID
const idleDelay = 1000; // 1-second delay for idle detection

// Function to reset and play the animation
function playCursorAnimation(x, y) {
  // Force reset the GIF by appending a unique query string
  const gifSrc = cursorAnimation.data('src'); // Original GIF src stored in data attribute
  cursorAnimation.attr('src', `${gifSrc}?t=${Date.now()}`); // Append a unique timestamp

  // Set position and show the animation
  cursorAnimation.css({
    left: x + 'px',
    top: y + 'px',
    display: 'block',
  });

  // Hide the animation after it finishes (match this to your GIF duration)
  setTimeout(() => {
    cursorAnimation.hide();
  }, 2900); // Match this to the duration of your GIF
}

// Mousemove event handler
$(document).on('mousemove.cursorAnimation', function (e) {
  // Clear any previous timeout
  clearTimeout(idleTimeout);

  // Hide the animation immediately when the mouse moves
  cursorAnimation.hide();

  // Set a new timeout to show the animation after being idle
  idleTimeout = setTimeout(() => {
    playCursorAnimation(e.pageX, e.pageY);
  }, idleDelay);
});

// Store the original GIF src in a data attribute for resetting purposes
cursorAnimation.data('src', cursorAnimation.attr('src'));