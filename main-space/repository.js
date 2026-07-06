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