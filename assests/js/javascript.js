


function confirmDEL(){
   if (confirm("bist du sicher, dass du alle Felder löschen willst ?")) {
   return true;
   }
   return false;
   }





 function sorryFAKE() {
   alert("Sorry, es ist ein FAKE FORMULAR");
   return false
 }







 let calcScrollValue = () => {
   let scrollProgress = document.getElementById("progress");
   let progressValue = document.getElementById("progress-value");
   let pos = document.documentElement.scrollTop;
   let calcHeight =
     document.documentElement.scrollHeight -
     document.documentElement.clientHeight;
   let scrollValue = Math.round((pos * 100) / calcHeight);
   if (pos > 100) {
     scrollProgress.style.display = "grid";
   } else {
     scrollProgress.style.display = "none";
   }
   scrollProgress.addEventListener("click", () => {
     document.documentElement.scrollTop = 0;
   });
   scrollProgress.style.background = `conic-gradient(#5682bc ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
 };
 
 window.onscroll = calcScrollValue;
 window.onload = calcScrollValue;
 





 let revealerpoint = 150;
window.addEventListener('scroll', reveal);
reveal();

function reveal() {
    console.log("scrolling");
    let revealers = document.querySelectorAll('.fade1');
    for (let i = 0; i < revealers.length; i++) {
        let windowheight = window.innerHeight;
        let revealertop = revealers[i].getBoundingClientRect().top;
      
        if (revealertop < windowheight - revealerpoint) {
            revealers[i].classList.add('fade-in')
        } 
           
       
        
        
    } 
};










