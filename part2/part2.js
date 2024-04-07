

let title = document.getElementById('title');
title.innerHTML = "ZGEG";

let image = document.getElementById('image');
image.src = "SKOUIZI";

let BRUH = document.getElementById("BRUH");
console.log(BRUH);
//BRUH.classList.toggle('BRUH')

let HANIPAGANDALyrics = document.getElementsByClassName('HANIPAGANDALyrics');
//console.log(HANIPAGANDALyrics)
//HANIPAGANDALyrics.classList.toggle('HANIPAGANDALyrics')
/*BRUH.onclick = () => {
    BRUH.classList.toggle('BRUH')
    console.log("element cliqué")
    BRUHLyrics.classList.toggle('BRUHLyrics')

} */

BRUH.addEventListener('click', function(){
    this.classList.toggle('BRUH');
    console.log("element cliqué");
    //BRUHLyrics.classList.toggle('BRUHLyrics')

});

//Exercice 1

let darkMode = document.getElementById('darkMode');
let mainContent = document.getElementsByClassName("mainContent");
console.log(mainContent.length);

let body = document.body;
//body.classList.toggle('body');

console.log(body);
darkMode.onclick = function() {
    console.log("boutton cliqué");
    body.classList.toggle("body");
}


//Exercice 2

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
