

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



// hybrid scroll feature
const stickySections = [...document.querySelectorAll('sticky')];
// for adding images to scrolling section
let images = [
    ''
]

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_section').appendChild(image);
    })
})

// function for sideways scroll. Credit to Conor Bailey on Youtube
// gets postion of stickySection
window.addEventListener('scroll', (e) => {
    for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i]);
    }
})

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = 'translate3d(${-([percentage])}vw, 0, 0)';
}