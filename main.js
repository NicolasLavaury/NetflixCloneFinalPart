// right event
function rightScroll(carousel, rightArrow) {

    const scroll = document.querySelector(carousel);

    const right = document.querySelector(rightArrow);

        scroll.scrollLeft += scroll.offsetWidth;
    

}

// left event
function leftScroll(carousel, leftArrow) {

    const scroll = document.querySelector(carousel);

    const left = document.querySelector(leftArrow);
        scroll.scrollLeft -= scroll.offsetWidth;
    

}


var ActionsImg = new Array(
    "assets/Logo/act1.jpg",
    "assets/Logo/act2.jpg",
    "assets/Logo/act3.jpg",
    "assets/Logo/act4.jpg",
    "assets/Logo/act5.jpg",
    "assets/Logo/act6.jpg",
  );
  
  
  
  function aleatoire(){
  
  
    for (let i = 1; i < 6; i++) {
      var randomNum = Math.floor(Math.random() * ActionsImg.length);
      document.getElementById("action" + i.toString()).src = ActionsImg[randomNum];
    } 
  }


function notif_hover(){
  var notif = document.querySelector('.bell_area')
  notif.style.display = "unset"
}

function unnotif_hover(){
  var notif = document.querySelector('.bell_area')
  notif.style.display = "none"
}

function profil_hover(){
  var notif = document.querySelector('.profil_area')
  notif.style.display = "unset"
}

function unprofil_hover(){
  var notif = document.querySelector('.profil_area')
  notif.style.display = "none"
}

window.onload = notif_hover()
window.onload = profil_hover()
window.onload = aleatoire;

 

