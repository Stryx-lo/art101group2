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
      $(this).attr('src', './homepage/img/opendoors.png');
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

/* CURSOR ANIMATION */

const cursorAnimation = $('#cursor-animation');
    let mouseTimeout, animationTimeout, currentStep = 0;

    // Paw images
    const pawImages = [
        './homepage/img/paw1.png',
        './homepage/img/paw2.png',
        './homepage/img/paw3.png',
        './img/homepage/paw4.png',
        './img/homepage/paw5.png',
    ];

    const animationSequence = () => {
        if (currentStep < pawImages.length) {
            // Show paw images one by one
            cursorAnimation.css({
                'background-image': `url(${pawImages[currentStep]})`,
                display: 'block'
            });
            currentStep++;
        } else if (currentStep >= pawImages.length && currentStep < 2 * pawImages.length - 1) {
            // Reverse sequence
            cursorAnimation.css({
                'background-image': `url(${pawImages[2 * pawImages.length - 2 - currentStep]})`
            });
            currentStep++;
        } else {
            // End animation
            cursorAnimation.css({ display: 'none' });
            currentStep = 0; // Reset for next hover
            clearTimeout(animationTimeout);
            return;
        }

        // Set timeout for next image
        animationTimeout = setTimeout(animationSequence, 200); // Adjust timing as needed
    };

    $(document).mousemove(function (e) {
        // Position the cursor animation at the mouse location
        cursorAnimation.css({
            top: e.pageY - 25, // Adjust to center the image
            left: e.pageX - 25
        });

        // Clear previous timeouts if the mouse is moving
        clearTimeout(mouseTimeout);
        clearTimeout(animationTimeout);

        // Start the animation after 1 second of no movement
        mouseTimeout = setTimeout(() => {
            animationSequence();
        }, 1000);
    });