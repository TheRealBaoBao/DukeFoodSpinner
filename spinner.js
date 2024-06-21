const items = document.querySelectorAll('.item');
const spinButton = document.querySelector('button');
const resultDisplay = document.getElementById('result');

function spin() {
    // Disable button during animation to prevent multiple spins
    spinButton.disabled = true;

    // Generate a random number between 1 and 8 (inclusive)
    const randomNumber = Math.floor(Math.random() * 8) + 1;

    // Calculate the index of the selected item (adjust for 0-based index)
    const selectedIndex = randomNumber - 1;

    // Animate selection
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
        }
    }, 50); // Adjust interval duration for speed of animation
}

function displayResult(selectedIndex) {
    // Reset all items to default style
    items.forEach(item => item.classList.remove('active'));

    // Highlight the selected item
    items[selectedIndex].classList.add('active');

    // Display the selected item's number
    resultDisplay.textContent = items[selectedIndex].textContent;

    resultDisplay.style.backgroundColor = 'white'; // Example background color
    resultDisplay.style.color = '#3498db'; // Example text color
    resultDisplay.style.fontSize = '50px'; // Example font size
    resultDisplay.style.padding = '50px'; // Example padding

    // Enable button after displaying result
    spinButton.disabled = false;
}

// Event listener for the Spin button
spinButton.addEventListener('click', spin);
