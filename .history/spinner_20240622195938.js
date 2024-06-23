//the restaurants array section we will be selecting from

//mock location
const marketplace = [
    { restaruant: 'Wood-Fired', location: '1st floor', priceRange: '$', cuisine: 'Italian' },
    { restaruant: 'Cucina', location: '2nd floor', priceRange: '$$', cuisine: 'Italian' },
    { restaruant: 'Harvest', location: '3rd floor', priceRange: '$$$', cuisine: 'American' },
    { restaruant: 'Fusion', location: '3rd floor', priceRange: '$$$', cuisine: 'Fusion' },
    { restaruant: 'Durham Market', location: '3rd floor', priceRange: '$$$', cuisine: 'American' },
    { restaruant: '1892 Grille', location: '3rd floor', priceRange: '$$$', cuisine: 'American' },
    { restaruant: 'Leaf & Ladle', location: '3rd floor', priceRange: '$$$', cuisine: 'American' },
    { restaruant: "Baker's Table", location: '3rd floor', priceRange: '$$$', cuisine: 'Bakery' },
];

const westCampus = [
    { restaruant: 'Ginger + Soy', location: '1st floor', priceRange: '$', cuisine: 'Japanese' },
    { restaruant: 'Gyotaku', location: '2nd floor', priceRange: '$$', cuisine: 'Japanese' },
    { restaruant: 'II Forno', location: '3rd floor', priceRange: '$$$', cuisine: 'Italian' },
    { restaruant: "JB's Roasts & Chops", location: '3rd floor', priceRange: '$$$', cuisine: 'American' },
    { restaruant: 'Tandoor', location: '3rd floor', priceRange: '$$$', cuisine: 'Indian' },
    { restaruant: "The Chef's Kitchen", location: '3rd floor', priceRange: '$$$', cuisine: 'American' },
    { restaruant: 'Yalla!', location: '3rd floor', priceRange: '$$$', cuisine: 'Middle Eastern' },
    { restaruant: "Farmstead", location: '3rd floor', priceRange: '$$$', cuisine: 'American' },
];

const ninth = [
    { restaruant: 'Szechuan Mansion Hotpot', location: '1st floor', priceRange: '$', cuisine: 'Chinese' },
    { restaruant: 'Juju', location: '2nd floor', priceRange: '$$', cuisine: 'Asian Fusion' },
    { restaruant: 'Heavenly Buffaloes', location: '3rd floor', priceRange: '$$$', cuisine: 'American' },
    { restaruant: "Metro 8 Steakhouse", location: '3rd floor', priceRange: '$$$', cuisine: 'Steakhouse' },
    { restaruant: 'Jimmy Johns', location: '3rd floor', priceRange: '$$$', cuisine: 'Sandwiches' },
    { restaruant: "Alpaca Chicken", location: '3rd floor', priceRange: '$$$', cuisine: 'American' },
    { restaruant: "Banh's Cuisine", location: '3rd floor', priceRange: '$$$', cuisine: 'Vietnamese' },
    { restaruant: "Vin Rouge", location: '3rd floor', priceRange: '$$$', cuisine: 'French' },
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
btn1.addEventListener('click', function () {
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
    item7.style.backgroundImage = 'url("https://ladleandleaf.com/images/600_L_L_Our-Story_WebBlock.jpg")';
    item8.style.backgroundImage = 'url("https://sweetieshoppie.co.uk/cdn/shop/files/flying-saucers-or-sherbet-discs-or-kids-party-sweets-or-the-sweetie-shoppie-1_512x512.jpg?v=1718557704")';

    for (let i = 0; i < marketplace.length; i++) {
        const restaurantName = marketplace[i].restaruant;
        const priceRange = marketplace[i].priceRange;
        const cuisineType = marketplace[i].cuisine;
        document.querySelector(`.item-${i + 1} .restaurantName`).innerHTML = restaurantName;
        document.querySelector(`.item-${i + 1} .priceRange`).innerHTML = `Price Range: ${priceRange}`;
        document.querySelector(`.item-${i + 1} .cuisine`).innerHTML = `Cuisine Type: ${cuisineType}`;
    }

    items.forEach(item => item.classList.remove('active'));
});

btn2.addEventListener('click', function () {
    // Remove 'clicked' class from all buttons
    document.querySelectorAll('.locationBtn').forEach(btn => btn.classList.remove('clicked'));
    // Add 'clicked' class to the clicked button
    btn2.classList.add('clicked');
    // Update background image of items container
    item1.style.backgroundImage = 'url("https://img.restaurantguru.com/re4e-dishes-Ginger-Soy.jpg")';
    item2.style.backgroundImage = 'url("https://media.post.rvohealth.io/wp-content/uploads/2021/09/sushi-sashimi-732x549-thumbnail-732x549.jpg")';
    item3.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg")';
    item4.style.backgroundImage = 'url("https://twokooksinthekitchen.com/wp-content/uploads/2022/09/honey-roasted-parsnips-10.jpg")';
    item5.style.backgroundImage = 'url("https://cdn.vox-cdn.com/thumbor/fWdJKI_dirNSL2bBWVVWVW_I4-Q=/0x0:7360x4912/1200x800/filters:focal(3092x1868:4268x3044)/cdn.vox-cdn.com/uploads/chorus_image/image/67000785/shutterstock_1435374326.0.jpg")';
    item6.style.backgroundImage = 'url("https://uniquedestination.mitsishotels.com/wp-content/uploads/2018/03/shutterstock_467823860-1024x463.jpg")';
    item7.style.backgroundImage = 'url("https://media.istockphoto.com/id/913677844/photo/tamale-with-corn-leaf-and-filled-chili-pepper.jpg?s=612x612&w=0&k=20&c=JnHdwelbFuSkX1DAKpWhHhE5BplP9rnBHXJOETJpuOk=")';
    item8.style.backgroundImage = 'url("https://fesmag.com/images/stories/2022-07/onsite_IMG_2511-duke-induction.jpg")';

    for (let i = 0; i < westCampus.length; i++) {
        const restaurantName = westCampus[i].restaruant;
        const priceRange = westCampus[i].priceRange;
        const cuisineType = westCampus[i].cuisine;
        document.querySelector(`.item-${i + 1} .restaurantName`).innerHTML = restaurantName;
        document.querySelector(`.item-${i + 1} .priceRange`).innerHTML = `Price Range: ${priceRange}`;
        document.querySelector(`.item-${i + 1} .cuisine`).innerHTML = `Cuisine Type: ${cuisineType}`;
    }

    items.forEach(item => item.classList.remove('active'));
});

btn3.addEventListener('click', function () {
    // Remove 'clicked' class from all buttons
    document.querySelectorAll('.locationBtn').forEach(btn => btn.classList.remove('clicked'));
    // Add 'clicked' class to the clicked button
    btn3.classList.add('clicked');
    // Update background image of items container
    item1.style.backgroundImage = 'url("https://lh3.googleusercontent.com/p/AF1QipNEbVs638mvnJpKw_fjgjEbXVtiJ0wnm_XaX9o6=s1600-w240-h240")';
    item2.style.backgroundImage = 'url("https://s3-media0.fl.yelpcdn.com/bphoto/qJ4DCEipJeAq5yIbnSeDZA/348s.jpg")';
    item3.style.backgroundImage = 'url("https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=600,format=auto,quality=50/https://doordash-static.s3.amazonaws.com/media/photos/b4879a30-f87c-45c8-b4c1-4395444cae0d-retina-large.jpg")';
    item4.style.backgroundImage = 'url("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/08/06/sliced-steak-on-cutting-board.jpg.rend.hgtvcom.1280.720.suffix/1628249872290.jpeg")';
    item5.style.backgroundImage = 'url("https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/crm/fortworth/jimmy-john-s2_a0886bc3-5056-a348-3aebcc75cbabe69b.jpg")';
    item6.style.backgroundImage = 'url("https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_396,q_75,w_704/https://assets.dam.simpleviewinc.com/asset/62c5ea3174266d02e93ba856")';
    item7.style.backgroundImage = 'url("https://images.happycow.net/venues/1024/90/59/hcmp9059_961979.jpeg")';
    item8.style.backgroundImage = 'url("https://d2sygdwsqncsjz.cloudfront.net/613195-4.jpeg")';

    for (let i = 0; i < ninth.length; i++) {
        const restaurantName = ninth[i].restaruant;
        const priceRange = ninth[i].priceRange;
        const cuisineType = ninth[i].cuisine;
        document.querySelector(`.item-${i + 1} .restaurantName`).innerHTML = restaurantName;
        document.querySelector(`.item-${i + 1} .priceRange`).innerHTML = `Price Range: ${priceRange}`;
        document.querySelector(`.item-${i + 1} .cuisine`).innerHTML = `Cuisine Type: ${cuisineType}`;
    }

    items.forEach(item => item.classList.remove('active'));
});

//master function
function pickRestaurant() {
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
            if (btn1.classList.contains('clicked')) {
                randomRestaraunt = marketplace[selectedIndex];
            } else if (btn2.classList.contains('clicked')) {
                randomRestaraunt = westCampus[selectedIndex];
            } else if (btn3.classList.contains('clicked')) {
                randomRestaraunt = ninth[selectedIndex];
            }

            modal.style.display = "block"; // When the user clicks on the button, open the modal

            document.getElementById('pText1').innerHTML = randomRestaraunt.restaruant;
            document.getElementById('pText2').innerHTML = "Location: " + randomRestaraunt.location;
            document.getElementById('pText3').innerHTML = "Price Range: " + randomRestaraunt.priceRange;

            span.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
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

    // Play the audio
    const munchAudio = document.getElementById('munchAudio');
    munchAudio.play();
    munchAudio.volume = 1.0;
    munchAudio.playbackRate = 1.75;

    // Highlight the selected item
    items[selectedIndex].classList.add('active');

    // Enable button after displaying result
    buttons.forEach(button => {
        button.disabled = false;
    });

    spinComplete = true;
}

const osuAudio = document.getElementById('osuAudio');
osuAudio.playbackRate = 3.0;
// Variable to track whether sound can be played
let canPlaySound = true;

// Function to reset sound cooldown after a delay
function resetSoundCooldown() {
    console.log('Cooldown ended');
    canPlaySound = true;
}

// Add event listener to play flip sound when card is flipped
document.querySelectorAll('.flip-card-inner').forEach(card => {
    card.addEventListener('mouseenter', function () {
        console.log('Mouse entered');
        if (canPlaySound) {
            osuAudio.currentTime = 0; // Rewind sound to start
            osuAudio.play(); // Play flip sound
            canPlaySound = false; // Prevent further plays until cooldown ends

            // Set a cooldown period (e.g., 1 second)
            setTimeout(resetSoundCooldown, 1000); // Adjust the delay as needed (in milliseconds)
        } else {
            console.log('Sound on cooldown');
        }
    });
});


const rizzAudio = document.getElementById('rizzAudio');
rizzAudio.playbackRate = 2.0;
rizzAudio.volume = 1.0;

// Add event listener to play rizzAudio when spin button is clicked
document.getElementById('btn').addEventListener('click', function() {
    rizzAudio.currentTime = 0; // Rewind sound to start (optional, if needed)
    rizzAudio.play(); // Play rizzAudio
});
