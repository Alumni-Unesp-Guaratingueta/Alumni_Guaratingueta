submenu = document.getElementById("checkbox-menu")
var subSub = document.querySelectorAll("#submenu")
var cont = 0;
submenu.addEventListener("click", function() {
    cont++;
    if (cont%2 == 0) {
        subSub[0].style.cssText = `
        opacity: 0;
        `
        subSub[1].style.cssText = `
        opacity: 0;
        `
    } else {
        subSub[0].style.cssText = `
            opacity: 1;
        `
        subSub[1].style.cssText = `
            opacity: 1;
        `
    }
})