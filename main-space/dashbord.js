import { auth } from "./AUTHENTICATION/figure.js";
import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const dashboard = document.getElementById("dashboard-content");
// const usernameNav = document.getElementById("nav-username");

onAuthStateChanged(auth, (user) => {

    if (user) {

        
        dashboard.style.display = "initial";

        
        // usernameNav.textContent = user.email;

    } else {

        
        window.location.replace("login.html");

    }

});





// Inputs
let username = document.querySelector("#username-input");
let age = document.querySelector("#Item2 input");
let email = document.querySelector("#Item3 input");
let name = document.querySelector("#Item4 input");
let gender = document.querySelector("#Item5 input");
let degree = document.querySelector("#Item6 input");
let year = document.querySelector("#Item7 input");

// Change buttons
let change_username = document.querySelector("#change-username");
let change_age = document.querySelector("#change-age");
let change_email = document.querySelector("#change-email");
let change_name = document.querySelector("#change-name");
let change_gender = document.querySelector("#change-gender");
let change_degree = document.querySelector("#change-degree");
let change_year = document.querySelector("#change-year");

function showButton(input, button) {
    input.addEventListener("input", function () {
        button.style.display = "inline";
    });
}

showButton(username, change_username);
showButton(age, change_age);
showButton(email, change_email);
showButton(name, change_name);
showButton(gender, change_gender);
showButton(degree, change_degree);
showButton(year, change_year); 

let img_profile_change = document.querySelector("#change-option-p");
let img_profile_change_link = document.querySelector("#url-link input");
let img_profile_change_button = document.querySelector("#url-link-button");
let img_profile = document.querySelector("#img-profile");
let profile_pic = document.querySelector("#profile");
let url_link = document.querySelector("#url-link");

img_profile_change.addEventListener("click", function () {
    url_link.style.display = "block";
    img_profile_change_button.style.display = "inline-block";
});

img_profile_change_button.addEventListener("click", function (del) {
    del.preventDefault();

    if (img_profile_change_link.value.trim() === "") {
        alert("Enter an image URL");
        return;
    }

    img_profile.src = img_profile_change_link.value;
    profile_pic.style.backgroundImage = `url("${img_profile_change_link.value}")`;

});
let nav_icon=document.querySelector("#nav");
let navigation_bar=document.querySelector("#navigation-bar");
let timer;
nav_icon.addEventListener("mouseenter",function(){
    navigation_bar.style.display="initial";
})
nav_icon.addEventListener("mouseleave",function(){
     timer=setTimeout(function(){
            navigation_bar.style.display="none";

    },500)
    navigation_bar.style.display="initial";
})
navigation_bar.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    navigation_bar.style.display = "block";
});
navigation_bar.addEventListener("mouseleave", () => {
    
    navigation_bar.style.display = "none";
});
