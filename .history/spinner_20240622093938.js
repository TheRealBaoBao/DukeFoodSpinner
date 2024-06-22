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
    munchAudio.volume = 1.0;
    munchAudio.playbackRate = 4.5;

    // Enable button after displaying result
    spinButton.disabled = false;
    spinComplete = true;
}

// Event listener for the Spin button
spinButton.addEventListener('click', spin);


var emoji = ['🐣', '🍗', '🏝', '💛', '👑', '🤣', '🦑', '🌊', '🎀'];
// var emoji = ['💓','💕','💖','🎀','🌺','🌸']; // theme for #LetLeniLead2022
var totalEmojiCount = 500;

var continueDraw = false;
var context;
var canvasWidth;
var canvasHeight;
var emojies = [];

var button = document.getElementById('button');
button.disabled = true;

function initializeCanvas() {
  var canvas = document.getElementById('canvas');
  context = canvas.getContext( '2d' );
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.scale(2, 2);
  
  generateCanvasSize(canvas);
  generateEmojis();
}

function generateCanvasSize(canvas) {
  var coord = canvas.getBoundingClientRect();
  canvasWidth = coord.width;
  canvasHeight = coord.height;
}

function generateEmojis() {
  if (continueDraw === true) return;
  emojies = [];
  button.disabled = true;
  
  for (var iterate = 0; iterate < totalEmojiCount; iterate++) {
    var x = Math.floor(Math.random() * canvasWidth);
    var offsetY = Math.abs(Math.floor(Math.random() * 300));
    var fontSize = Math.floor(Math.random() * 40) + 20;

    emojies.push({
      emoji: emoji[Math.floor(Math.random() * emoji.length)],
      x,
      y: canvasHeight + offsetY,
      count: Math.floor(Math.random() * 3) + 4,
      fontSize,
    });

    if (iterate === (totalEmojiCount - 1)) {
      continueDraw = true;
      drawConfetti();
      endDraw();
    }
  }
}

function drawConfetti() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  emojies.forEach((emoji) => {
    drawEmoji(emoji);
    emoji.y = emoji.y - emoji.count;
  });

  if (this.continueDraw) {
    requestAnimationFrame(this.drawConfetti.bind(this));
  }
}

function drawEmoji(emoji) {
  context.beginPath();
  context.font = emoji.fontSize + 'px serif';
  context.fillText(emoji.emoji, emoji.x, emoji.y);
}

function endDraw() {
  setTimeout(() => {
    continueDraw = false;
    button.disabled = false;
    context.clearRect(0, 0, canvasWidth, canvasHeight);
  }, 5000);
}

initializeCanvas();
