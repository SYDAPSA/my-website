var xyz = document.querySelectorAll(".popup >div");
for (var i = 0; i < xyz.length; i++) {
  xyz[i].classList.add("container");
}

var ab = document.querySelectorAll(".popup .container div");

for (var i = 0; i < ab.length; i++) {
  if (i % 2 == 0) {
    ab[i].classList.add("para1");
  } else {
    ab[i].classList.add("para2");
  }
}


const acc = document.getElementsByClassName("container");


var panels = document.getElementsByClassName("para1");
var i;
var j;

var handleAccordionClick = function () {
  for (j = 0; j < panels.length; j++) {
    if (acc[j] !== this) {
      acc[j].classList.remove("active");
    }
  }
  this.classList.toggle("active");
};


for (i = 0; i < acc.length; i++) {
  acc[i].onclick = handleAccordionClick;
}
