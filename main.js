let navmenu = document.getElementById("nav-menu");
let menubar = document.getElementById("menu-bar")

navmenu.style.transition="0.5s";

function toggle(){
    if(navmenu.style.transform=="translateX(-200px)"){
       navmenu.style.transform="translateX(0px)";
       menubar.style.display="none";
    }
    else{
      navmenu.style.transform="translateX(-200px)"
    }
}

function toggle2(){
    if(navmenu.style.transform=="translateX(-200px)"){
        navmenu.style.transform="translateX(0px)";
     }
     else{
       navmenu.style.transform="translateX(-200px)";
       menubar.style.display="block"
     }
}