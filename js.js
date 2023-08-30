var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName){
   for(tablink of tablinks){
       tablink.classList.remove("active-link");
   }
   for( tabcontent of tabcontents){
   tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabName).classList.add("active-tab");
}

              
 
var sidemenu = document.getElementById("sidemenu");

function  openmenu(){
   sidemenu.style.right = "0";
}
function closemenu(){
   sidemenu.style.right = "-200px";
}

const scriptURL = ' https://script.google.com/macros/s/AKfycbyoPtnd3tgKTYAjD48YhV0toC1f4qjOGit3D74r4FITnGvyRJYI2bsLKDlz_D7Mn-Ao/exec'
const form = document.forms['submit-to-google-sheet']
const msg  = document.getElementById("msg")
form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(response => {
       msg.innerHTML = "Message Received Successfully"

      setTimeout (function(){
msg.innerHTML = ""
},5000)
form.reset()
   })
   .catch(error => console.error('Error!', error.message))
})


 let eyeicon =  document.getElementById("eyeicon");
   let password =  document.getElementById("password");

   eyeicon.onclick = function(){
       if(password.type == "password"){
           password.type = "text";
           eyeicon.src = "open.png";

       }
       else{
           password.type = "password";
           eyeicon.src = "eye.png";
       }
   }