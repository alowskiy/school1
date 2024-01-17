const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));


let un1 = document.querySelector(".unhid1");
let un2 = document.querySelector(".unhid1_last");
let hid1 = document.querySelector(".cnt_h.hidden");
let hid2 = document.querySelector(".hid2.hidden");

un1.addEventListener('click', unh1)

function unh1(){
    hid1.classList.remove('hidden')
    un1.classList.add('hidden')
}

un2.addEventListener('click', unh2)

function unh2(){
    hid2.classList.remove('hidden')
    un2.classList.add('hidden')
}

var toggleButton = document.querySelector(".toggle-menu");
var navBar = document.querySelector(".nav-bar");
toggleButton.addEventListener("click", function () {
  navBar.classList.toggle("toggle");
});