

var searchIcon = document.querySelector("header form"); 
var searchInput = document.querySelector("header form input"); 
var besideNav = document.querySelector(".beside-nav"); 
var moveTop = document.querySelector(".move-on-top") ; 
var header = document.querySelector("header"); 
var threeMenu = document.querySelector(".three-menu"); 

threeMenu.addEventListener("click",()=>{

     
    threeMenu.classList.toggle("toggleMenu") ; 
    besideNav.classList.toggle("transform-beside-nav"); 
})


// search input .
document.addEventListener("click", (evt) => {
 
    let targetElement = evt.target; // clicked element
    do {
         if (targetElement == searchIcon ) {
            // This is a click inside. Do nothing, just return.
            searchInput.style.width = "100%";
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
        
    } while (targetElement);
    // This is a click outside.
    searchInput.style.width = "0%";
});




document.addEventListener("scroll",()=>{
    
    console.log("abc"); 
    if(window.pageYOffset > 50){
        moveTop.style.opacity  = "1" ; 
    }
    else{
        moveTop.style.transform = "none";
        moveTop.style.opacity  = "0" ; 
    }

   
});


moveTop .addEventListener("click",()=>{

    moveTop.style.transform = "rotate(180deg)";
    setTimeout(()=>{
        window.scrollTo(0,0);
    },300)
    
});
