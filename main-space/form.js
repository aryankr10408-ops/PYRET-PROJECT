let deleting_scene=document.querySelector("#deleting_scene");
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