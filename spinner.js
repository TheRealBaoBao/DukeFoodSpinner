//the restaurants array section we will be selecting from

//mock location
const marketplace = [
    {restaruant: 'Wood-Fired', location: '1st floor', priceRange: '$'}, 
    {restaruant: 'Cucina', location: '2nd floor', priceRange: '$$'}, 
    {restaruant: 'Harvest', location: '3rd floor', priceRange: '$$$'}, 
    {restaruant: 'Fusion', location: '3rd floor', priceRange: '$$$'},
    {restaruant: 'Durham Market', location: '3rd floor', priceRange: '$$$'},
    {restaruant: '1892 Grille', location: '3rd floor', priceRange: '$$$'},
    {restaruant: 'Leaf & Ladle', location: '3rd floor', priceRange: '$$$'},
    {restaruant: "Baker's Table", location: '3rd floor', priceRange: '$$$'},
]; 

const westCampus = [
    {restaruant: 'Ginger + Soy', location: '1st floor', priceRange: '$'}, 
    {restaruant: 'Gyotaku', location: '2nd floor', priceRange: '$$'}, 
    {restaruant: 'II Forno', location: '3rd floor', priceRange: '$$$'}, 
    {restaruant: "JB's Roasts & Chops", location: '3rd floor', priceRange: '$$$'},
    {restaruant: 'Tandoor', location: '3rd floor', priceRange: '$$$'},
    {restaruant: "The Chef's Kitchen", location: '3rd floor', priceRange: '$$$'},
    {restaruant: 'Yalla!', location: '3rd floor', priceRange: '$$$'},
    {restaruant: "Farmstead", location: '3rd floor', priceRange: '$$$'},
]; 

const ninth = [
    {restaruant: 'Szechuan Mansion Hotpot', location: '1st floor', priceRange: '$'}, 
    {restaruant: 'Juju', location: '2nd floor', priceRange: '$$'}, 
    {restaruant: 'Heavenly Buffaloes', location: '3rd floor', priceRange: '$$$'}, 
    {restaruant: "Metro 8 Steakhouse", location: '3rd floor', priceRange: '$$$'},
    {restaruant: 'Jimmy Johns', location: '3rd floor', priceRange: '$$$'},
    {restaruant: "Alpaca Chicken", location: '3rd floor', priceRange: '$$$'},
    {restaruant: "Banh's Cuisine", location: '3rd floor', priceRange: '$$$'},
    {restaruant: "Vin Rouge", location: '3rd floor', priceRange: '$$$'},
]; 

//displaying for modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
const items = document.querySelectorAll('.item');
const buttons = document.querySelectorAll('button');

// Get references to buttons and the items container
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');
const item5 = document.querySelector('.item-5');
const item6 = document.querySelector('.item-6');
const item7 = document.querySelector('.item-7');
const item8 = document.querySelector('.item-8');


// Add click event listeners to each button
btn1.addEventListener('click', function() {
    // Remove 'clicked' class from all buttons
    document.querySelectorAll('.locationBtn').forEach(btn => btn.classList.remove('clicked'));
    // Add 'clicked' class to the clicked button
    btn1.classList.add('clicked');
    // Update background image of items container
    item1.style.backgroundImage = 'url("https://today.duke.edu/sites/default/files/legacy-files/legacy_files/pizza_590.jpg")';
    item2.style.backgroundImage = 'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/5e/1c/e4/piccola-cucina-osteria.jpg?w=400&h=300&s=1")';
    item3.style.backgroundImage = 'url("https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-500x375.jpg")';
    item4.style.backgroundImage = 'url("https://hips.hearstapps.com/hmg-prod/images/chicken-stir-fry-index-65130392700bf.jpg?crop=0.502xw:1.00xh;0.170xw,0&resize=1200:*")';
    item5.style.backgroundImage = 'url("https://images.ctfassets.net/3vz37y2qhojh/1iLDJFZEjg02OFuHZOP2Ga/c779f1850ef60dfd55f4b35c271923cf/Healthy-Southern-style-Cast-Iron-Chicken-Dinner-1.35-1.jpg?w=750&fit=fill&fm=webp")';
    item6.style.backgroundImage = 'url("https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/06/08/0/FNM_070120-Grilled-Hot-Dogs_s4x3.jpg.rend.hgtvcom.616.462.suffix/1591625198177.jpeg")';
    item7.style.backgroundImage = 'url("https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/iljrk5am4jk7mcd0rwtr")';
    item8.style.backgroundImage = 'url("https://sweetieshoppie.co.uk/cdn/shop/files/flying-saucers-or-sherbet-discs-or-kids-party-sweets-or-the-sweetie-shoppie-1_512x512.jpg?v=1718557704")';

    for (let i = 0; i < marketplace.length; i++) {
        const restaurantName = marketplace[i].restaruant;
        document.querySelector(`.item-${i + 1} .restaruantName`).innerHTML = restaurantName;
    }   

    items.forEach(item => item.classList.remove('active'));
});

btn2.addEventListener('click', function() {
    // Remove 'clicked' class from all buttons
    document.querySelectorAll('.locationBtn').forEach(btn => btn.classList.remove('clicked'));
    // Add 'clicked' class to the clicked button
    btn2.classList.add('clicked');
    // Update background image of items container
    item1.style.backgroundImage = 'url("https://img.restaurantguru.com/re4e-dishes-Ginger-Soy.jpg")';
    item2.style.backgroundImage = 'url("")';
    item3.style.backgroundImage = 'url("")';
    item4.style.backgroundImage = 'url("")';
    item5.style.backgroundImage = 'url("")';
    item6.style.backgroundImage = 'url("")';
    item7.style.backgroundImage = 'url("")';
    item8.style.backgroundImage = 'url("")';

    for (let i = 0; i < westCampus.length; i++) {
        const restaurantName = westCampus[i].restaruant;
        document.querySelector(`.item-${i + 1} .restaruantName`).innerHTML = restaurantName;
    }   

    items.forEach(item => item.classList.remove('active'));
});

btn3.addEventListener('click', function() {
    // Remove 'clicked' class from all buttons
    document.querySelectorAll('.locationBtn').forEach(btn => btn.classList.remove('clicked'));
    // Add 'clicked' class to the clicked button
    btn3.classList.add('clicked');
    // Update background image of items container
    item1.style.backgroundImage = 'url("https://lh3.googleusercontent.com/p/AF1QipNEbVs638mvnJpKw_fjgjEbXVtiJ0wnm_XaX9o6=s1600-w240-h240")';
    item2.style.backgroundImage = 'url("")';
    item3.style.backgroundImage = 'url("")';
    item4.style.backgroundImage = 'url("")';
    item5.style.backgroundImage = 'url("")';
    item6.style.backgroundImage = 'url("")';
    item7.style.backgroundImage = 'url("")';
    item8.style.backgroundImage = 'url("")';

    for (let i = 0; i < ninth.length; i++) {
        const restaurantName = ninth[i].restaruant;
        document.querySelector(`.item-${i + 1} .restaruantName`).innerHTML = restaurantName;
    }   

    items.forEach(item => item.classList.remove('active'));
});

//master function
function pickRestaurant(){
    // Generate a random number between 1 and 8 (inclusive)
    const randomNumber = Math.floor(Math.random() * 8) + 1;

    // Calculate the index of the selected item (adjust for 0-based index)
    const selectedIndex = randomNumber - 1;

    animateSelection(selectedIndex);

}
function animateSelection(selectedIndex) {
    const totalFrames = 40; // Total frames for the animation
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

        buttons.forEach(button => {
            button.disabled = true;
        });

        // Stop the animation after total frames
        if (frame === totalFrames) {
            clearInterval(interval);

            // Display result after animation ends
            displayResult(selectedIndex);

            let randomRestaraunt;
            //checks which location we are using
            if(btn1.classList.contains('clicked')){
                randomRestaraunt = marketplace[selectedIndex];
            } else if(btn2.classList.contains('clicked')){
                randomRestaraunt = westCampus[selectedIndex];
            } else if(btn3.classList.contains('clicked')){
                randomRestaraunt = ninth[selectedIndex];
            }

            modal.style.display = "block"; // When the user clicks on the button, open the modal

            document.getElementById('pText1').innerHTML = randomRestaraunt.restaruant;
            document.getElementById('pText2').innerHTML = "Location: " + randomRestaraunt.location;
            document.getElementById('pText3').innerHTML = "Price Range: " + randomRestaraunt.priceRange;

            span.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }   
            }
        }
    }, 60); // Adjust interval duration for speed of animation
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
    buttons.forEach(button => {
            button.disabled = false;
    });

    spinComplete = true;
}
