// const dropbtn=document.getElementById("drop-down-btn"),
//       detail-faq=document.getElementByClassName("detail");
//
// dropbtn.addEventListener('click',()=>{
//         detail-faq.classList.toggle('is-visible')
//         // toggleMenu.style.display = "none";
//         // detail-faq.style.display = "block";
//       })

var acc = document.getElementsByClassName("btn-arrow");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("is-visible"); // p
    this.classList.toggle("clicked"); // h1
    this.lastChild.classList.toggle("upsidedown") // arrow
  });


}
