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

let img_profile=document.querySelector("#change-option-p");
// img_profile.addEventListener("click",function(){

// })

