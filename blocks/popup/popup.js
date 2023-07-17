var pop1 = document.querySelectorAll(".popup >div div");

pop1[0].classList.add("copay1");
pop1[1].classList.add("copay2");

pop1[0].addEventListener("click", function () {
  pop1[0].classList.add("popd1");
  pop1[1].classList.add("popd");
});

var x = document.querySelector(".popup .copay2 h2");
x.addEventListener("click", function () {
  pop1[0].classList.remove("popd1");
  pop1[1].classList.remove("popd");
});
