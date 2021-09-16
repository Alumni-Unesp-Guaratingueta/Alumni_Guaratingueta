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
    } else {
        for (let i = 0; i < 8; i++) {
            subSub[i].style.cssText = `
                opacity: 1;
                cursor: pointer;
            `   
        }
    }
})