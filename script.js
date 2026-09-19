
const products = [
    "Signature Loaf",
    "Country Bread",
    "Fresh Dinner Rolls",
    "Butter Croissant",
    "Cinnamon Roll",
    "Seasonal Cookies", 
    "Birthday Cake",
    "Custom Cake",
    "Small Birthday Cake"
]

let favorites = [];
function toggleFavorite(product, button)  {
    if (favorites.includes(product)) {
        favorites = favorites.filter(item => item !== product);
        button.textContent = "♡";
    } else {
        favorites.push(product);
        button.textContent = "♥";
    }
    saveFavorites();
    displayFavorites();
}
function displayFavorites() {
    const favoritesArea = document.getElementById("favorites");

      if (!favoritesArea) {
            return;
        }    

 if (favorites.length === 0) {
        favoritesArea.innerHTML = `
        <h2><span class="favorite-heart">♥</span> My Favorites</h2>
        <p>No favorites selected.</p>
        `;
    } else {
        favoritesArea.innerHTML = `
         <h2><span class="favorite-heart">♥</span> My Favorites</h2>
        <ul>
            ${favorites.map(item => `<li>${item}</li>`).join("")}
         </ul>
        `;
    }
}
function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}
function loadFavorites() {
     const savedFavorites = localStorage.getItem("favorites");
        if (savedFavorites) {

        favorites = JSON.parse(savedFavorites);
        }
        favorites.forEach(item => {
            const button = document.querySelector(`button[onclick="toggleFavorite('${item}', this)"]`);
        if (button) {
            button.textContent = "♥"
        }
        });
        displayFavorites();
}
loadFavorites(); 

const form = document.getElementById("contact-form");

    if (form) {
form.addEventListener("submit", function(event) {
let hasError = false;

const name = document.getElementById("name");
const nameError = document.getElementById("name-error");

if (name.value === "") {
nameError.textContent = "Please enter your name.";
    hasError = true;
} else {
    nameError.textContent = "";
}
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

if (email.value === "") {
emailError.textContent = "Please enter your email.";
    hasError = true;
    } else {
    emailError.textContent = "";
    }
        event.preventDefault();

const formSubmit = document.getElementById("form-success");
   if(!hasError) {
        formSubmit.textContent = "Thank you! ♥ Your request has been submitted.";
    }
    }
);}