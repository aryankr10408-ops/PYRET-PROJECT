// import { auth } from "../AUTHENTICATION/figure.js";
// import {
//     onAuthStateChanged,
//     signOut
// } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// const dashboard = document.getElementById("dashboard-content");
// // const usernameNav = document.getElementById("nav-username");

// onAuthStateChanged(auth, (user) => {

//     if (user) {

        
//         dashboard.style.display = "initial";

        
//         // usernameNav.textContent = user.email;

//     } else {

        
//         window.location.replace("../AUTHENTICATION/Sign-in.html");

//     }

// });





// // Inputs
// let username = document.querySelector("#username-input");
// let age = document.querySelector("#Item2 input");
// let email = document.querySelector("#Item3 input");
// let name = document.querySelector("#Item4 input");
// let gender = document.querySelector("#Item5 input");
// let degree = document.querySelector("#Item6 input");
// let year = document.querySelector("#Item7 input");

// // Change buttons
// let change_username = document.querySelector("#change-username");
// let change_age = document.querySelector("#change-age");
// let change_email = document.querySelector("#change-email");
// let change_name = document.querySelector("#change-name");
// let change_gender = document.querySelector("#change-gender");
// let change_degree = document.querySelector("#change-degree");
// let change_year = document.querySelector("#change-year");

// function showButton(input, button) {
//     input.addEventListener("input", function () {
//         button.style.display = "inline";
//     });
// }

// showButton(username, change_username);
// showButton(age, change_age);
// showButton(email, change_email);
// showButton(name, change_name);
// showButton(gender, change_gender);
// showButton(degree, change_degree);
// showButton(year, change_year); 

// let img_profile_change = document.querySelector("#change-option-p");
// let img_profile_change_link = document.querySelector("#url-link input");
// let img_profile_change_button = document.querySelector("#url-link-button");
// let img_profile = document.querySelector("#img-profile");
// let profile_pic = document.querySelector("#profile");
// let url_link = document.querySelector("#url-link");

// img_profile_change.addEventListener("click", function () {
//     url_link.style.display = "block";
//     img_profile_change_button.style.display = "inline-block";
// });




















// img_profile_change_button.addEventListener("click", function (del) {
//     del.preventDefault();

//     if (img_profile_change_link.value.trim() === "") {
//         alert("Enter an image URL");
//         return;
//     }

//     img_profile.src = img_profile_change_link.value;
//     profile_pic.style.backgroundImage = `url("${img_profile_change_link.value}")`;

// });
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


import { auth,db } from "../AUTHENTICATION/figure.js";
import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
    collection,
    query,
    where,
    getDocs,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const dashboard = document.getElementById("dashboard-content");
// const usernameNav = document.getElementById("nav-username");
let profileDocRef = null;

onAuthStateChanged(auth, async(user) => {

    if (user) {

        
        dashboard.style.display = "initial";
        await loadprofile(user.uid);

        
        // usernameNav.textContent = user.email;

    } else {

        
        window.location.replace("../AUTHENTICATION/Sign-in.html");

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


let profile=document.querySelector("#profile");
let signout=document.querySelector("#signout");
let nav_username=document.querySelector("#nav-username");
// Change buttons
let change_username = document.querySelector("#change-username");
let change_age = document.querySelector("#change-age");
let change_email = document.querySelector("#change-email");
let change_name = document.querySelector("#change-name");
let change_gender = document.querySelector("#change-gender");
let change_degree = document.querySelector("#change-degree");
let change_year = document.querySelector("#change-year");
async function loadprofile(uid) {

    console.log("Current UID:", uid);

    const q = query(
        collection(db, "profileinfo"),
        where("uid", "==", uid)
    );

    const snapshot = await getDocs(q);
    if (snapshot.empty) {
    alert("Profile not found.");
    return;
}

    console.log("Documents found:", snapshot.size);

    snapshot.forEach((doc) => {
         profileDocRef = doc.ref;

        const pprofile = doc.data();

        email.value = pprofile.email;
        username.value = pprofile.username;
        name.value = pprofile.name;
        gender.value = pprofile.gender;
        age.value = pprofile.age;
        degree.value = pprofile.degree;
        year.value = pprofile.year;
        profile.style.backgroundImage = `url("${pprofile.imageURL}")`;
        nav_username.innerText=pprofile.username;
    });
}


let signout_button_click=document.querySelector("#signout-button-click");
signout_button_click.addEventListener("click",async function(){
    try{
        await signOut(auth);
        window.location.href="../AUTHENTICATION/Sign-in.html"
    }catch(error){
            console.error("Sign out error:", error.message);

    }
})







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

function changeValue(input, button, fieldName) {

    button.addEventListener("click", async function (e) {

        e.preventDefault();

        if (!profileDocRef) {
            alert("Profile not loaded.");
            return;
        }

        try {

            await updateDoc(profileDocRef, {
                [fieldName]: input.value
            });

            alert(fieldName + " updated successfully!");

            button.style.display = "none";

        } catch (error) {

            console.error(error);
            alert(error.message);

        }

    });

}
changeValue(username, change_username, "username");
changeValue(age, change_age, "age");

changeValue(name, change_name, "name");
changeValue(gender, change_gender, "gender");
changeValue(degree, change_degree, "degree");
changeValue(year, change_year, "year");

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
let ttimer;

profile.addEventListener("mouseenter",function(){
    signout.style.display="initial";
})
profile.addEventListener("mouseleave",function(){
     ttimer=setTimeout(function(){
            signout.style.display="none";

    },500)
    signout.style.display="initial";
})
signout.addEventListener("mouseenter", () => {
    clearTimeout(ttimer);
    signout.style.display = "block";
});
signout.addEventListener("mouseleave", () => {
    
    signout.style.display = "none";
});



let navigation_bar_dashbord=document.querySelector("#navigation-bar-dashbord");
let navigation_bar_repository=document.querySelector("#navigation-bar-repository");
let navigation_bar_forms=document.querySelector("#navigation-bar-forms");
let navigation_bar_collaboration=document.querySelector("#navigation-bar-collaboration");

function clicktonav(button,place){
    button.addEventListener("click",function(){
        window.location.href=place;
    })
}
clicktonav(navigation_bar_repository,"repository.html");