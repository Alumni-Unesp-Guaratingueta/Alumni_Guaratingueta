submenu = document.getElementById("checkbox-menu")
var subSub = document.querySelectorAll("#submenu")
var cont = 0;
// 7
var screenWidth = screen.width;
var windowWidth = window.innerWidth;
if(windowWidth < 1169) {
    cont=2;
   for (let i = 0; i < 10; i++) {
    subSub[i].style.cssText = `
        display: none;
        cursor: default;
    `   
} 
} else if(windowWidth > 1169) {
    for (let i = 0; i < 10; i++) {
        subSub[i].style.cssText = `
            cursor: pointer;
        `   
}
}
console.log(screenWidth)
console.log(windowWidth)

submenu.addEventListener("click", function() {
    
    cont++;
    if (cont%2 == 0) {
        for (let i = 0; i < 10; i++) {
            subSub[i].style.cssText = `
                display: none;
                cursor: default;
            `   
        }
        let show = true; 
    document.body.style.overflow = show = "scroll"

    menuSection.classList.toggle("on", show)
    show = !show;


    } else {
   
        for (let i = 0; i < 10; i++) {
            subSub[i].style.cssText = `
                display: flex;
                opacity: 1;
            `   
        }

        let show = true; 
    document.body.style.overflow = show = "hidden"

    menuSection.classList.toggle("on", show)
    show = !show;
    
    }
    
    

})
