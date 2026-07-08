import{auth} from "./figure.js";
import{signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
let btn=document.querySelector("button");
btn.addEventListener("click",async function(del){
    del.preventDefault();

    try{
        let usercredential=await signInWithEmailAndPassword(auth,document.querySelector("#email").value,document.querySelector("#password").value);
        window.location.href="../main-space/dashbord.html";
        
    }
    catch(error){
        console.error("Login failed:", error.code);
        document.querySelector("#error-message").style.display ="initial" ;
    }
})