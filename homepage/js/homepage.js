// homepage.js - This is Donovan testing what a preloader might look like for this website.
// note: you'll need  jQuery.
// also note - thank chatGPT for most of this stuff. 

$(document).ready(function() {
    // When the user clicks anywhere on the preloader
    $('#preloader').click(function() {
        // Hide the preloader
        $('#preloader').fadeOut('slow', function() {
            // Show the main content
            $('.scroll-container').fadeIn('slow');
        });
    });
});

// Function to show story one when button is clicked
$(document).ready(function () { 
    // Click listener
    $("#storyOneBtn").click(function () { 
        // shows storyOne div
        $("#storyOne").toggle("swing"); 
    }); 
}); 
// Function to hide story one when end button is clicked
$(document).ready(function () { 
    // Click listener
    $("#storyOneEnd").click(function () { 
        // hides storyOne div
        $("#storyOne").hide("swing"); 
    }); 
}); 


// Function to show story two when button is clicked
$(document).ready(function () { 
    // Click listener
    $("#storyTwoBtn").click(function () { 
        // shows storyTwo div
        $("#storyTwo").toggle("swing"); 
    }); 
}); 
// Function to hide story two when end button is clicked
$(document).ready(function () { 
    // Click listener
    $("#storyTwoEnd").click(function () { 
        // hides storyTwo div
        $("#storyTwo").hide("swing"); 
    }); 
}); 


// Function to show story three when button is clicked
$(document).ready(function () { 
    // Click listener
    $("#storyThreeBtn").click(function () { 
        // shows storyThree div
        $("#storyThree").toggle("swing"); 
    }); 
}); 
// Function to hide story three when end button is clicked
$(document).ready(function () { 
    // Click listener
    $("#storyThreeEnd").click(function () { 
        // hides storyThree div
        $("#storyThree").hide("swing"); 
    }); 
}); 


// Function to show story four when button is clicked
$(document).ready(function () { 
    // Click listener
    $("#storyFourBtn").click(function () { 
        // shows storyFour div
        $("#storyFour").toggle("swing"); 
    }); 
}); 
// Function to hide story four when end button is clicked
$(document).ready(function () { 
    // Click listener
    $("#storyFourEnd").click(function () { 
        // hides storyFour div
        $("#storyFour").hide("swing"); 
    }); 
}); 
