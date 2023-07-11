var xyz = document.querySelectorAll(".accordion >div");
for (var i = 0; i < xyz.length; i++) {
  xyz[i].classList.add("container");
}

var ab = document.querySelectorAll(".accordion .container div");

for (var i = 0; i < ab.length; i++) {
  if (i % 2 == 0) {
    ab[i].classList.add("savings");
  } else {
    ab[i].classList.add("program");
  }
}


const acc = document.getElementsByClassName("container");


var panels = document.getElementsByClassName("savings");
var i;
var j;

var handleAccordionClick = function () {
  for (j = 0; j < panels.length; j++) {
    acc[j].classList.remove("active");
  }
  this.classList.toggle("active");
};

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = handleAccordionClick;
}
