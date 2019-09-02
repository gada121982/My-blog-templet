

var sideBar = document.querySelector(".nav-link") ; 
var threedot  = document.querySelector(".three-dot"); 
var line1 = document.querySelector(".line1"); 
var line2 = document.querySelector(".line2"); 
var line3 = document.querySelector(".line3"); 
var responButton  = document.querySelector(".respon-button"); 


var textNav = document.querySelectorAll(".nav-link li") ; 


threedot.addEventListener("click",()=>{

    sideBar.classList.toggle("animation-nav"); 
    line1.classList.toggle("line-animation1"); 
    line2.classList.toggle("line-animation2"); 
    line3.classList.toggle("line-animation3"); 
    
    textNav.forEach((link,index)=>{
       
        if(link.style.animation){
            link.style.animation = ""; 
        }
        else{
          
            link.style.animation = `animation-text-nav 1s ease forwards ${index/7+ 0.3}s`
        }
    }); 
    


}); 
var sectionLeft = document.querySelector(".section-left"); 
var nameLeft = document.querySelector(".name"); 

var contact = document.querySelector(".contact"); 
var avt = document.querySelector(".avt"); 

responButton.addEventListener("click", ()=>{
    responButton.classList.toggle("turn-on-light"); 
    responButton.classList.toggle("turn-off-light");
    responButton.classList.toggle("scaleOn");
    
    sectionLeft.classList.toggle("transform-to-right"); 
   
}); 


document.addEventListener("scroll",()=>{
   
    var value = window.pageYOffset ; 
    sectionLeft.style.top =  `${value}px` ; 
    responButton.style.top=`${value}px`;
   if(value > 100){
       
       nameLeft.style.transform = "none"; 
      
       contact.style.transform = "none"; 
       avt.style.transform = "none"; 
   }
   else{
    nameLeft.style.transform = "translateY(-120%)"; 
    
    contact.style.transform = "translateY(-200%)"; 
    avt.style.transform = "translateY(-30%)"; 
   }
   
});

// ! animation work

var dev = document.querySelector(".o1"); 
var des = document.querySelector(".o2") ; 
var blog = document.querySelector(".o3"); 
var contentwork1 = document.querySelector(".work1"); 
var contentwork2 = document.querySelector(".work2"); 
var contentwork3 = document.querySelector(".work3"); 
var contentwork1p = document.querySelector(".work1 p"); 
var contentwork2p = document.querySelector(".work2 p"); 
var contentwork3p = document.querySelector(".work3 p"); 
var devturn = 1 ; 
var desturn = 0 ;
var blogturn = 0 ; 



dev.addEventListener("click",()=>{
  
  
    if(devturn === 0)
    {  
       dev.classList.toggle("turn-off-light");
       dev.classList.toggle("turn-on-light");
       contentwork1.style.backgroundImage = "linear-gradient(to left, #0081ff 0%, #0045ff 100%)";
       contentwork1.style.webkitBoxShadow = "0px 0px 41px 2px rgba(42,83,247,1)";
       contentwork1.style.mozkitBoxShadow = "0px 0px 41px 2px rgba(42,83,247,1)";
       contentwork1.style.boxShadow = "0px 0px 41px 2px rgba(42,83,247,1)";
       contentwork1.style.width = "70%";
       contentwork1p.style.opacity ="1"; 
       contentwork1p.style.display="inline";
       contentwork1p.style.animation = "animation-work 1s ease " ;

       devturn = 1; 
    }
    else{
        
        console.log("chay vao else "); 
        dev.classList.toggle("turn-off-light");
        dev.classList.toggle("turn-on-light");
        contentwork1.style.backgroundImage = "none";
        contentwork1.style.webkitBoxShadow = "none";
       contentwork1.style.mozkitBoxShadow = "none";
       contentwork1.style.boxShadow = "none";
        contentwork1.style.width = "0%";
        contentwork1p.style.display = "none";
        contentwork1p.style.opacity ="0"; 
        devturn = 0; 
    }
   
}); 
des.addEventListener("click",()=>{
  
  
    if(desturn === 0)
    {  
       des.classList.toggle("turn-off-light");
       des.classList.toggle("turn-on-light");
       contentwork2.style.backgroundImage = "linear-gradient(to left, #0081ff 0%, #0045ff 100%)";
       contentwork2.style.webkitBoxShadow = "0px 0px 41px 2px rgba(42,83,247,1)";
       contentwork2.style.mozkitBoxShadow = "0px 0px 41px 2px rgba(42,83,247,1)";
       contentwork2.style.boxShadow = "0px 0px 41px 2px rgba(42,83,247,1)";
       contentwork2.style.width = "70%";
       contentwork2p.style.opacity ="1"; 
       contentwork2p.style.display="inline";
       contentwork2p.style.animation = "animation-work 1s ease " ;
       desturn = 1; 
    }
    else{
        
        console.log("chay vao else "); 
        des.classList.toggle("turn-off-light");
        des.classList.toggle("turn-on-light");
        contentwork2.style.backgroundImage = "none";
        contentwork2.style.webkitBoxShadow = "none";
        contentwork2.style.mozkitBoxShadow = "none";
        contentwork2.style.boxShadow = "none";
        contentwork2.style.width = "0%";
        contentwork2p.style.display = "none";
        contentwork2p.style.opacity ="0"; 
        desturn = 0; 
    }
   
}); 
blog.addEventListener("click",()=>{
  
  
    if(blogturn === 0)
    {  
       blog.classList.toggle("turn-off-light");
       blog.classList.toggle("turn-on-light");

       contentwork3.style.backgroundImage = "linear-gradient(to left, #0081ff 0%, #0045ff 100%)";
       contentwork3.style.webkitBoxShadow = "0px 0px 41px 2px rgba(42,83,247,1)";
       contentwork3.style.mozkitBoxShadow = "0px 0px 41px 2px rgba(42,83,247,1)";
       contentwork3.style.boxShadow = "0px 0px 41px 2px rgba(42,83,247,1)";

       contentwork3.style.width = "70%";
       contentwork3p.style.opacity ="1"; 
       contentwork3p.style.display="inline";
       contentwork3p.style.animation = "animation-work 1s ease " ;
       blogturn = 1; 
    }
    else{
        
        console.log("chay vao else "); 
        blog.classList.toggle("turn-off-light");
        blog.classList.toggle("turn-on-light");

        contentwork3.style.backgroundImage = "none";
        contentwork3.style.webkitBoxShadow = "none";
        contentwork3.style.mozkitBoxShadow = "none";
        contentwork3.style.boxShadow = "none";

        contentwork3.style.width = "0%";
        contentwork3p.style.display = "none";
        contentwork3p.style.opacity ="0"; 
        blogturn = 0; 
    }
   
}); 

