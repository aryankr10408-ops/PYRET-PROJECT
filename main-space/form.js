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
    updateDoc,
    addDoc,
    onSnapshot,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";





let currentCategory = "TECHNICAL";
const dashboard = document.getElementById("dashboard-content");
onAuthStateChanged(auth, async(user) => {

    if (user) {
        dashboard.style.display = "initial";
        await loadprofile(user.uid);
        displayChats();
        // usernameNav.textContent = user.email;

    } else {
        window.location.replace("../AUTHENTICATION/Sign-in.html");

    }

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
let profile = document.querySelector("#profile");
let nav_username=document.querySelector("#nav-username");
let signout_login_id=document.querySelector("#signout-login-id");
async function loadprofile(uid){
    const q = query(
        collection(db, "profileinfo"),
        where("uid", "==", uid)
    );
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
    alert("Profile not found.");
    return;
}
    snapshot.forEach((doc) => {
        let proffile=doc.data();
        nav_username.textContent=proffile.username;
        signout_login_id.textContent=proffile.email;
        profile.style.backgroundImage = `url("${proffile.imageURL}")`;

    });

}










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






let unsubscribeChats;


function displayChats(){

    const chatBox = document.querySelector("#real_chat");
    if (unsubscribeChats) {
    unsubscribeChats();
}
    const q = query(
        collection(db,"chats"),
        where("category","==",currentCategory),
        orderBy("createdAt")
    );

    unsubscribeChats = onSnapshot(
    q,
    (snapshot) => {

        chatBox.innerHTML = "";

        snapshot.forEach((doc) => {

            let chat = doc.data();

            let chatDiv = document.createElement("div");

            if (chat.uid === auth.currentUser.uid) {
                chatDiv.className = "my_chats";
            } else {
                chatDiv.className = "others_chat";
            }

            const usernameClass =
                chat.uid === auth.currentUser.uid
                    ? "username_of_chats_my"
                    : "username_of_chats_other";

            chatDiv.innerHTML = `
                <div class="${usernameClass}">
                    ${chat.username}
                </div>

                <div class="written_chat">
                    ${chat.written_material}
                </div>
            `;

            chatBox.appendChild(chatDiv);
        });

        chatBox.scrollTop = chatBox.scrollHeight;
    },
    (error) => {
        console.error(error);
    }
);

}

scroolbar_option_technical.addEventListener("click",async function(){

    currentCategory="TECHNICAL";
    heading_of_chatbox.textContent="TECHNICAL";

    displayChats();

});


scroolbar_option_non_tech.addEventListener("click",async function(){

    currentCategory="NON-TECH";
    heading_of_chatbox.textContent="NON-TECH";

    displayChats();

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
clicktonav(navigation_bar_dashbord,"dashbord.html");
clicktonav(navigation_bar_repository,"repository.html");


let response_textarea=document.querySelector("#response_textarea");
let submit_response_link=document.querySelector("#submit_response_link");
submit_response_link.addEventListener("click",async function(){
    submit_response_link.style.backgroundColor="black";
    setTimeout(() => {
        submit_response_link.style.backgroundColor = "green";
    }, 150);
    if(response_textarea.value.trim()){

        await addDoc(collection(db,"chats"),{
        written_material: response_textarea.value,
        uid: auth.currentUser.uid,
        username: nav_username.textContent,
        category: currentCategory,
        createdAt: serverTimestamp()
        
});
  response_textarea.value="";
    }
    else{
        alert("Write something!");
    }

})
