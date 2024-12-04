

// click listener to play animations on images:
// listener for image one:
$("#dogplaceholderone").click(function() {
    // click listener test: works!
    console.log("Image clicked");
    // Code to make css animate image:
    // changes to frame 2
    document.getElementById("dogplaceholderone").src="../story1/img/dogplaceholdertwo.jpg";
    // waits 0.1 second, then changes to next frame
    setTimeout(function(){
        document.getElementById("dogplaceholderone").src="../story1/img/dogplaceholder1.jpg";
    }, 100);
    
})

// listener for image two:
$("#dogplaceholdertwo").click(function() {
    // click listener test: works!
    console.log("Image clicked");
    // Add later: code to make css animate image
})
