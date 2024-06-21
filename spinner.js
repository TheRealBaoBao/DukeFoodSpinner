//the restaurants array section we will be selecting from

//mock location
const location1 = [
    {restaruant: 'McDonalds', location: '1st floor', priceRange: '$'}, 
    {restaruant: 'Gyotaku', location: '2nd floor', priceRange: '$$'}, 
    {restaruant: 'Burger King', location: '3rd floor', priceRange: '$$$'}, 
]; 

//function to pull a random restaruant from above section
//this function needs a parameter to pass in according to which location the user is on
function getRandomRestaruant(){
    return location1[Math.floor(Math.random() * location1.length)];
}

//displaying for modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];


//master function
function pickRestaruant(){
    const randomRestaraunt = getRandomRestaruant();
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