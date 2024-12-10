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


  $(document).ready(function () {
    $('.story').hide();
  })
  // Show specific story
  function showStory(storyId) {
    $('.story').hide();
    $(storyId).fadeIn('swing');
    // After you reveal the div
document.getElementById('yourDivId').style.display = 'block'; // or use jQuery to show
window.scrollTo(0, 0);  // Scroll to the top of the page
  }

  // Button click handlers for stories and APIs
  $('#storyOneBtn').click(() => showStory('#storyOne'));
  $('#storyTwoBtn').click(() => showStory('#storyTwo'));
  $('#storyThreeBtn').click(() => showStory('#storyThree'));
  $('#dogAPIBtn').click(() => showStory('#randomDog'));
  $('#catAPIBtn').click(() => showStory('#randomCat'));

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

/* API CODE */
// Code for dog API
$(document).ready(function() {
  // Function to get the random dog breed and image
  function getRandomDog() {
      // Fetch the list of all breeds
      $.get('https://dog.ceo/api/breeds/list/all', function(data) {
          // Get all breeds from the response
          const breeds = Object.keys(data.message);
          
          // Select a random breed
          const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
          
          // Fetch the images for the selected breed
          $.get(`https://dog.ceo/api/breed/${randomBreed}/images`, function(data) {
              // Get a random image from the breed's images
              const randomImage = data.message[Math.floor(Math.random() * data.message.length)];

              // Display the image and breed
              $('#dogImage').attr('src', randomImage);
              $('#breedName').text(randomBreed.charAt(0).toUpperCase() + randomBreed.slice(1));
          });
      });
  }

  //Code for Cat API
   // Store your API key here
   const catApiKey = 'live_7ljWwf5Y4pbfOysM8fffLDtr5MNxoswG6jB8mTx5xzkcJ5GtdZRsNCb0l7TwhI3n'; // Replace this with your actual API key
    // Function to get a random cat image and breed (with API Key and include_breeds)
    function getRandomCat() {
      // Make sure to include the Authorization header with your API key
      $.ajax({
          url: 'https://api.thecatapi.com/v1/images/search?include_breeds=true', // Add include_breeds=true here
          method: 'GET',
          headers: {
              'x-api-key': catApiKey // Use the correct header for the API key
          },
          success: function(data) {
            // Filter for images with breed information
            if (data[0].breeds && data[0].breeds.length > 0) {
                const catData = data[0];
                const catImage = catData.url;
                const catBreed = catData.breeds[0].name; // We assume the first breed is the correct one
                
                // Display the image and breed
                $('#catImage').attr('src', catImage);
                $('#catBreed').text(catBreed);
            } else {
                // If no breed information, call the function again to fetch a new image
                getRandomCat(); // Recursive call to try again
            }
          },
          error: function() {
              alert("Error fetching cat data. Please check your API key or try again later.");
          }
      });
  }


  // Set up event listeners for the buttons
  $('#getDogButton').click(function() {
    getRandomDog();
  });

  $('#getCatButton').click(function() {
      getRandomCat();
  });
});