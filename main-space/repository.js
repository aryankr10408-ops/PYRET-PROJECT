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
    addDoc,
    serverTimestamp,
    orderBy,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { createClient } from "https://esm.sh/@supabase/supabase-js";
const supabase = createClient(
    "https://tkktovtkvnihkpvegmzd.supabase.co",
    "sb_publishable_YFaxQrTQJGfD1xU2ZOJDYQ_vxhzdqE8"
);
const dashboard = document.getElementById("repository-content");
// const usernameNav = document.getElementById("nav-username");

onAuthStateChanged(auth, async(user) => {

    if (user) {

        
        dashboard.style.display = "initial";
        await loadprofile(user.uid);
        await makenewfile(user.uid);
        
        // usernameNav.textContent = user.email;

    } else {

        
        window.location.replace("../AUTHENTICATION/Sign-in.html");

    }

});
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
let signout_button_click=document.querySelector("#signout-button-click");
signout_button_click.addEventListener("click",async function(){
    try{
        await signOut(auth);
        window.location.href="../AUTHENTICATION/Sign-in.html"
    }catch(error){
            console.error("Sign out error:", error.message);

    }
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
clicktonav(navigation_bar_forms,"form.html");











let Asli_khel=document.querySelector("#Asli_khel");
let submit_file_new_file=document.querySelector("#submit_file_new_file");
Asli_khel.addEventListener("click",function(){
    submit_file_new_file.click();
})
submit_file_new_file.addEventListener("change",function(){
    if(submit_file_new_file.files.length===0){
        Asli_khel.textContent="Select File";
    }
    else{
        Asli_khel.textContent=`${submit_file_new_file.files[0].name}`;
    }
    
})
let floating=document.querySelector("#floating");
let cross=document.querySelector("#cross");
let new_file=document.querySelector("#new_file");
cross.addEventListener("click",function(){
    floating.style.display="none";
    new_file.reset();

})









let profileDocRef = null;
let signout_login_id=document.querySelector("#signout-login-id");
let nav_username=document.querySelector("#nav-username");
let usernameonscreen=document.querySelector("#usernameonscreen");
let loginonscreen=document.querySelector("#loginonscreen");
let profilepic_inthescreen=document.querySelector("#profilepic_inthescreen");
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
        loginonscreen.innerText=pprofile.email;
        item_2_new_file.value=pprofile.email;
        usernameonscreen.innerText = pprofile.username;
        profile.style.backgroundImage = `url("${pprofile.imageURL}")`;
        profilepic_inthescreen.style.backgroundImage = `url("${pprofile.imageURL}")`;
        nav_username.innerText=pprofile.username;
    });
}
clicktonav(navigation_bar_dashbord,"dashbord.html");
let Addi=document.querySelector("#Addi");
Addi.addEventListener("click",function(){
    floating.style.display="grid";
    item_2_new_file.value=loginonscreen.innerText;
})





const titleRegex = /^[A-Za-z0-9 _().-]{3,25}$/;
const descriptionRegex = /^[A-Za-z0-9\s.,!?'"():;_\-\/@#&%+\n]{10,250}$/;
let description=document.querySelector("#description");
let submit_of_new_repo=document.querySelector("#submit_of_new_repo");
let item_1_new_file=document.querySelector("#item-1_new_file input");

submit_of_new_repo.addEventListener("click",async function(del){
    del.preventDefault();
    if(!titleRegex.test(item_1_new_file.value.trim())||!descriptionRegex.test(description.value.trim())){
        alert("Title or description is missing")
        return;
    }
    if (submit_file_new_file.files.length === 0) {
        alert("Please select a PDF.");
        return;
    }
    
    if(submit_file_new_file.files[0].type !== "application/pdf"){
    alert("Only PDF files are allowed.");
    return;
}

    try {

        // Upload PDF to Supabase Storage

const pdf = submit_file_new_file.files[0];

const cleanName = pdf.name.replace(/\s+/g, "-");

const fileName = `${Date.now()}-${cleanName}`;

const { data, error } = await supabase.storage
    .from("repository")
    .upload(fileName, pdf, {
    contentType: "application/pdf"
});

if (error) {
    console.error(error);
    alert("PDF upload failed");
    return;
}


// Get public URL

const { data: urlData } = supabase.storage
    .from("repository")
    .getPublicUrl(fileName);


const pdfURL = urlData.publicUrl;

console.log("PDF URL:", pdfURL);
        // Save metadata in Firestore
        await addDoc(collection(db, "repositories"), {

            title: item_1_new_file.value.trim(),

            description: description.value.trim(),

            ownerEmail: loginonscreen.innerText,

            ownerUid: auth.currentUser.uid,

            pdfURL: pdfURL,
            publicId: fileName,

            createdAt: serverTimestamp()

        });

        alert("Repository uploaded successfully!");

        // Reset popup
        new_file.reset();

        Asli_khel.textContent = "Select File";

        floating.style.display = "none";
        await makenewfile(auth.currentUser.uid);
    } catch (error) {

        console.error(error);

        alert("Upload failed.");

    }

});
// discription.readOnly = true;
let selectedRepoId = null;
let selectedPublicId = null;
let Add_files=document.querySelector("#Add_files");

async function makenewfile(uid){
    Add_files.innerHTML = "";
    let enrollment=query(collection(db,"repositories"),where("ownerUid","==",uid),orderBy("createdAt", "desc"));
    let snapshote= await getDocs(enrollment);
    if(snapshote.empty){
        alert("No such File exist");
        return;
    }
    snapshote.forEach((doc)=>{
        let repoId = doc.id;
        let repo=doc.data();
        let box=document.createElement("div");
        box.classList.add("Add_files_files");
        let hedding=document.createElement("h3");
        hedding.classList.add("heddinging");
        hedding.innerText=`${repo.title}`;
        box.appendChild(hedding);
        let discription=document.createElement("textarea");
        box.appendChild(discription);
        discription.value=`${repo.description}`;
        discription.classList.add("description_to_project");

        let cutitout=document.createElement("p");
        cutitout.classList.add("cross_it_out");
        cutitout.innerHTML="X";
        box.appendChild(cutitout);
        cutitout.addEventListener("click",function(){
    deleting_scene.style.display="grid";
    selectedRepoId = repoId;
    selectedPublicId = repo.publicId;
    Add_files.style.display="none";

})
        
        let anchor = document.createElement("a");
        anchor.href=`${repo.pdfURL}`;



        console.log(repo.pdfURL);
        


        anchor.href = repo.pdfURL;
        anchor.innerText = "FILE";
        anchor.target = "_blank";
        anchor.classList.add("File_open_link");

        box.appendChild(anchor);
        Add_files.appendChild(box);
        

        
    }
    )


}
let cross_it_out=document.querySelector(".cross_it_out");



const cancelBtn = document.querySelector("#deleting_scene_cancle");
const deleteBtn = document.querySelector("#deleting_scene_delete");

cancelBtn.addEventListener("click", () => {
    deleting_scene.style.display = "none";
    Add_files.style.display = "block";
});
deleteBtn.addEventListener("click", async () => {

    try {

        const { error } = await supabase.storage
            .from("repository")
            .remove([selectedPublicId]);

        if (error) {
            console.error("Supabase delete error:", error);
            alert(error.message);
            return;
        }

        await deleteDoc(doc(db, "repositories", selectedRepoId));

        deleting_scene.style.display = "none";
        await makenewfile(auth.currentUser.uid);

    } catch (err) {

        console.error(err);
        alert(err.message);

    }

});
