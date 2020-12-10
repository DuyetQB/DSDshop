 
 










window.onscroll = function(){myScroll()};

let nav = document.querySelector("header");
let sticky = nav.offsetTop ;

function myScroll(){
    if(window.pageYOffset >= 70){
        nav.classList.add("sticky");
    }
    else{
        nav.classList.remove("sticky");
    }
}


document.addEventListener("DOMContentLoaded",function(){
    let btn = document.querySelectorAll(".fas");
    let content = document.querySelectorAll("nav");
    let current = "click1";
   btn[0].onclick = function(){
       if(current =="click1"){
           this.style.color ="green";
           content[0].style.display ="block";
           current ="click2";
       }
       else if(current =="click2"){
           this.style.color ="black";
           content[0].style.display ="none";
           current ="click1";
       }
       
   }
},false);




