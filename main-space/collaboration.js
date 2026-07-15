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
    addDoc,
    serverTimestamp,
    orderBy,
    deleteDoc,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { createClient } from "https://esm.sh/@supabase/supabase-js";
const supabase = createClient(
    "https://tkktovtkvnihkpvegmzd.supabase.co",
    "sb_publishable_YFaxQrTQJGfD1xU2ZOJDYQ_vxhzdqE8"
);





let dashboard=document.querySelector("#dashboard-content");

onAuthStateChanged(auth, async(user) => {

    if (user) {

        
        dashboard.style.display = "initial";
       
        await loadprofile(user.uid);
        await loadRecruit(user.uid);


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







let profileDocRef = null;
const profile = document.querySelector("#profile");
let signout_login_id=document.querySelector("#signout-login-id");
let nav_username=document.querySelector("#nav-username");
let item_2_new_file=document.querySelector("#item-2_new_file input");
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

        signout_login_id.innerText = pprofile.email;
        item_2_new_file.value=pprofile.email;
        profile.style.backgroundImage = `url("${pprofile.imageURL}")`;
        nav_username.innerText=pprofile.username;
    });
}





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

const signout = document.querySelector("#signout");
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


let floating=document.querySelector("#floating");
let Addi=document.querySelector("#Addi");
Addi.addEventListener("click",function(){
    floating.style.display="grid";
})
let new_file=document.querySelector("#new_file");
let cross=document.querySelector("#cross");
cross.addEventListener("click",function(){
    new_file.reset();
    item_2_new_file.value=signout_login_id.innerText
        floating.style.display="none";


})

const titleRegex = /^[A-Za-z0-9 _().-]{3,25}$/;
const descriptionRegex = /^[A-Za-z0-9\s.,!?'"():;_\-\/@#&%+\n]{10,250}$/;

const description = document.querySelector("#description");
const submit_of_new_repo = document.querySelector("#submit_of_new_repo");
const item_1_new_file = document.querySelector("#item-1_new_file input");

const noofrecruits = document.querySelector("#noofrecruits");

const submit_file_new_file = document.querySelector("#submit_file_new_file");
const Asli_khel = document.querySelector("#Asli_khel");

submit_of_new_repo.addEventListener("click", async function (e) {
    e.preventDefault();

    // Validate title
    if (!titleRegex.test(item_1_new_file.value.trim())) {
        alert("Enter a valid title (3-25 characters).");
        return;
    }

    // Validate description
    if (!descriptionRegex.test(description.value.trim())) {
        alert("Description must be between 10 and 250 characters.");
        return;
    }

    // Validate recruit number
    const recruits = Number(noofrecruits.value);

    if (recruits < 1 || recruits > 3) {
        alert("Recruit number must be between 1 and 3.");
        return;
    }

    // Validate PDF
    if (submit_file_new_file.files.length === 0) {
        alert("Please select a PDF.");
        return;
    }

    const pdf = submit_file_new_file.files[0];

    if (pdf.type !== "application/pdf") {
        alert("Only PDF files are allowed.");
        return;
    }

    try {

        // Upload PDF to Supabase
        const cleanName = pdf.name.replace(/\s+/g, "-");
        const fileName = `${Date.now()}-${cleanName}`;

        const { error } = await supabase.storage
            .from("repository")
            .upload(fileName, pdf, {
                contentType: "application/pdf"
            });

        if (error) {
            console.error(error);
            alert("PDF upload failed.");
            return;
        }

        // Get public URL
        const { data: urlData } = supabase.storage
            .from("repository")
            .getPublicUrl(fileName);

        const pdfURL = urlData.publicUrl;

        // Save to Firestore
        await addDoc(collection(db, "collaboration"), {
            title: item_1_new_file.value.trim(),
            description: description.value.trim(),
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,

            noOfRecruits: recruits,

            pdfURL: pdfURL,
            publicId: fileName,

            createdAt: serverTimestamp()
        });

        alert("Collaboration request uploaded successfully!");

        // Reset form
        new_file.reset();

        // Restore email field
        item_2_new_file.value = signout_login_id.innerText;

        Asli_khel.textContent = "Select File";

        floating.style.display = "none";

    } catch (error) {
        console.error(error);
        alert("Upload failed.");
    }
});
submit_file_new_file.addEventListener("change", () => {
    if (submit_file_new_file.files.length > 0) {
        Asli_khel.textContent = submit_file_new_file.files[0].name;
    } else {
        Asli_khel.textContent = "Select File";
    }
});

Asli_khel.addEventListener("click", () => {
    submit_file_new_file.click();
});
const mine_button=document.querySelector("#scroolbar_option_mine");

mine_button.addEventListener("click",async()=>{

    document.querySelector("#heading_of_chatbox").innerText="MINE";

    await loadMine(auth.currentUser.uid);

});
async function loadMine(uid){


    const container=document.querySelector("#mine_part");

    container.innerHTML="";


    const q=query(
        collection(db,"collaboration"),
        where("uid","==",uid),
        orderBy("createdAt","desc")
    );


    const snapshot=await getDocs(q);



    if(snapshot.empty){

        container.innerHTML="<h2>No collaboration created</h2>";

        return;

    }



    snapshot.forEach((document)=>{


        const data=document.data();

        const id=document.id;



        let box=document.createElement("div");

        box.classList.add("mine_box");



        box.innerHTML=`

        <h3>${data.title}</h3>


        <p>
        Email:
        ${data.email}
        </p>


        <p>
        Number of recruits:
        
        <input 
        type="number"
        min="1"
        max="3"
        class="recruit_change"
        value="${data.noOfRecruits}">
        
        </p>



        <textarea readonly>
        ${data.description}
        </textarea>



        <a 
        class="mine_pdf"
        href="${data.pdfURL}"
        target="_blank">
        OPEN PDF
        </a>


        `;



        let recruitInput=
        box.querySelector(".recruit_change");



        recruitInput.addEventListener("change",async()=>{


            let newValue=
            Number(recruitInput.value);
            if(newValue<1 || newValue>3){
                alert("Recruit number must be between 1 and 3");
                recruitInput.value=data.noOfRecruits;
                return;
            }
            await updateDoc(
                doc(db,"collaboration",id),
                {
                    noOfRecruits:newValue
                }
            );
            alert("Recruit number updated");
        });
        container.appendChild(box);
    });
}
const recruit_button = document.querySelector("#scroolbar_option_recruit");

recruit_button.addEventListener("click", async()=>{

    document.querySelector("#heading_of_chatbox").innerText="RECRUIT";

    await loadRecruit(auth.currentUser.uid);

});
async function loadRecruit(uid){

    const container=document.querySelector("#mine_part");

    container.innerHTML="";


    const q=query(
        collection(db,"collaboration"),
        orderBy("createdAt","desc")
    );


    const snapshot=await getDocs(q);



    if(snapshot.empty){

        container.innerHTML="<h2>No collaboration available</h2>";

        return;

    }



    snapshot.forEach((document)=>{


        const data=document.data();


        // don't show user's own collaborations
        if(data.uid === uid){
            return;
        }



        let box=document.createElement("div");

        box.classList.add("mine_box");



        box.innerHTML=`

        <h3>${data.title}</h3>


        <p>
        Created by:
        ${data.email}
        </p>


        <p>
        Recruit needed:
        ${data.noOfRecruits}
        </p>


        <textarea readonly>
        ${data.description}
        </textarea>


        <a 
        class="mine_pdf"
        href="${data.pdfURL}"
        target="_blank">
        OPEN PDF
        </a>


        `;


        container.appendChild(box);


    });

}
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
clicktonav(navigation_bar_forms,"form.html");
clicktonav(navigation_bar_dashbord,"dashbord.html");