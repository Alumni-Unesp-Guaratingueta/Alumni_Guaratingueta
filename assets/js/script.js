submenu = document.getElementById("checkbox-menu")
var subSub = document.querySelectorAll("#submenu")
var cont = 0;
// 7
submenu.addEventListener("click", function() {
    

    cont++;
    if (cont%2 == 0) {

        for (let i = 0; i < 8; i++) {
            subSub[i].style.cssText = `
                opacity: 0;
                cursor: default;
            `   
        }

        let show = true; 
    document.body.style.overflow = show = "scroll"

    menuSection.classList.toggle("on", show)
    show = !show;


    } else {
   
        for (let i = 0; i < 8; i++) {
            subSub[i].style.cssText = `
                opacity: 1;
                cursor: pointer;
            `   
        }

        let show = true; 
    document.body.style.overflow = show = "hidden"

    menuSection.classList.toggle("on", show)
    show = !show;
    
    }
    
    

})