//the restaurants array section we will be selecting from

//mock location
const location1 = [
    {restaurant: 'McDonalds', location: '1st floor', priceRange: '$'}, 
    {restaurant: 'Gyotaku', location: '2nd floor', priceRange: '$$'}, 
    {restaurant: 'Burger King', location: '3rd floor', priceRange: '$$$'}, 
]; 

//function to pull a random restaurant from above section
//this function needs a parameter to pass in according to which location the user is on
function getRandomRestaurant(){
    return location1[Math.floor(Math.random() * location1.length)];
}

//displaying for modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];


const items = document.querySelectorAll('.item');
const spinButton = document.querySelector('button');

//master function
function pickRestaurant(){
    // Generate a random number between 1 and 8 (inclusive)
    const randomNumber = Math.floor(Math.random() * 8) + 1;

    // Calculate the index of the selected item (adjust for 0-based index)
    const selectedIndex = randomNumber - 1;

    animateSelection(selectedIndex);

}

function animateSelection(selectedIndex) {
    const totalFrames = 60; // Total frames for the animation
    let frame = 0;

    // Interval for the animation
    const interval = setInterval(() => {
        // Reset all items to default style
        items.forEach(item => item.classList.remove('active'));

        // Calculate the current frame's item index
        const currentItemIndex = frame % items.length;
        
        // Highlight the current frame's item
        items[currentItemIndex].classList.add('active');

        frame++;

        // Stop the animation after total frames
        if (frame === totalFrames) {
            clearInterval(interval);

            // Display result after animation ends
            displayResult(selectedIndex);

            const randomRestaurant = getRandomRestaurant();
            modal.style.display = "block"; // When the user clicks on the button, open the modal

            document.getElementById('pText1').innerHTML = randomRestaurant.restaurant;
            document.getElementById('pText2').innerHTML = "Location: " + randomRestaurant.location;
            document.getElementById('pText3').innerHTML = "Price Range: " + randomRestaurant.priceRange;

            span.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }   
            }
        }
    }, 50); // Adjust interval duration for speed of animation
}

function displayResult(selectedIndex) {
    // Reset all items to default style
    items.forEach(item => item.classList.remove('active'));

    // Highlight the selected item
    items[selectedIndex].classList.add('active');

     // Play the audio
        const munchAudio = document.getElementById('munchAudio');
        munchAudio.play();

    // Enable button after displaying result
    spinButton.disabled = false;
    spinComplete = true;
}

// Event listener for the Spin button
spinButton.addEventListener('click', spin);
