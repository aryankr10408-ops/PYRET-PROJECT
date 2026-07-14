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
let scroolbar_option_technical=document.querySelector("#scroolbar_option_technical");
let scroolbar_option_non_tech=document.querySelector("#scroolbar_option_non_tech");
let heading_of_chatbox=document.querySelector("#heading_of_chatbox");

scroolbar_option_technical.addEventListener("click",function(){
    heading_of_chatbox.textContent="TECHNICAL";
    
})
scroolbar_option_non_tech.addEventListener("click",function(){
    heading_of_chatbox.textContent="NON-TECH";
    
})
let navigation_bar_dashbord=document.querySelector("#navigation-bar-dashbord");
let navigation_bar_repository=document.querySelector("#navigation-bar-repository");
let navigation_bar_forms=document.querySelector("#navigation-bar-forms");
let navigation_bar_collaboration=document.querySelector("#navigation-bar-collaboration");

function clicktonav(button,place){
    button.addEventListener("click",function(){
        window.location.href=place;
    })
}
clicktonav(navigation_bar_dashbord,"dashbord.html");
clicktonav(navigation_bar_repository,"repository.html");
