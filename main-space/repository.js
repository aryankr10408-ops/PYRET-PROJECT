// let nav_icon=document.querySelector("#nav");
// let navigation_bar=document.querySelector("#navigation-bar");
// let timer;
// nav_icon.addEventListener("mouseenter",function(){
//     navigation_bar.style.display="initial";
// })
// nav_icon.addEventListener("mouseleave",function(){
//      timer=setTimeout(function(){
//             navigation_bar.style.display="none";

//     },500)
//     navigation_bar.style.display="initial";
// })
// navigation_bar.addEventListener("mouseenter", () => {
//     clearTimeout(timer);
//     navigation_bar.style.display = "block";
// });
// navigation_bar.addEventListener("mouseleave", () => {
    
//     navigation_bar.style.display = "none";
// });
// let ttimer;
// let profilr=document.querySelector("#profile");
// let signout=document.querySelector("#signout");
// profile.addEventListener("mouseenter",function(){
//     signout.style.display="initial";
// })
// profile.addEventListener("mouseleave",function(){
//      ttimer=setTimeout(function(){
//             signout.style.display="none";

//     },500)
//     signout.style.display="initial";
// })
// signout.addEventListener("mouseenter", () => {
//     clearTimeout(ttimer);
//     signout.style.display = "block";
// });
// signout.addEventListener("mouseleave", () => {
    
//     signout.style.display = "none";
// });


import { auth } from "../AUTHENTICATION/figure.js";
import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const dashboard = document.getElementById("repository-content");
// const usernameNav = document.getElementById("nav-username");

onAuthStateChanged(auth, (user) => {

    if (user) {

        
        dashboard.style.display = "initial";

        
        // usernameNav.textContent = user.email;

    } else {

        
        window.location.replace("../AUTHENTICATION/Sign-in.html");

    }

});
let nav_icon=document.querySelector("#nav");
let navigation_bar=document.querySelector("#navigation-bar");
let timer;
nav_icon.addEventListener("mouseenter",function(){
    navigation_bar.style.display="block";
})
nav_icon.addEventListener("mouseleave",function(){
     timer=setTimeout(function(){
            navigation_bar.style.display="none";

    },500)
    navigation_bar.style.display="block";
})
navigation_bar.addEventListener("mouseenter", () => {
    clearTimeout(timer);
    navigation_bar.style.display = "block";
});
navigation_bar.addEventListener("mouseleave", () => {
    
    navigation_bar.style.display = "none";
});
let ttimer;
let profile=document.querySelector("#profile");
let signout=document.querySelector("#signout");
profile.addEventListener("mouseenter",function(){
    signout.style.display="block";
})
profile.addEventListener("mouseleave",function(){
     ttimer=setTimeout(function(){
            signout.style.display="none";

    },500)
    signout.style.display="block";
})
signout.addEventListener("mouseenter", () => {
    clearTimeout(ttimer);
    signout.style.display = "block";
});
signout.addEventListener("mouseleave", () => {
    
    signout.style.display = "none";
});
let signout_button_click=document.querySelector("#signout-button-click");
signout_button_click.addEventListener("click",async function(){
    try{
        await signOut(auth);
        window.location.href="../AUTHENTICATION/Sign-in.html"
    }catch(error){
            console.error("Sign out error:", error.message);

    }
})