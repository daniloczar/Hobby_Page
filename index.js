function clickMenu() {
    if(menu.style.display == "block"){
        menu.style.display = "none"
    }else {
        menu.style.display = "block"
    }
}

function changeMenu() {
    if(window.innerWidth >= 768){
        menu.style.display ="block"
    }else {
        menu.style.display ="none"
    }
}
let time = document.getElementById("time");
 
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
 },1000)

