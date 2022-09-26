const toggle = () => {
  document.querySelector(".nav-resp").classList.toggle("nav-resp-toggle");
  const elem = document.querySelectorAll(".bar");
  elem[0].classList.toggle("bar1");
  elem[1].classList.toggle("bar2");
  elem[2].classList.toggle("bar3");
};
document.querySelector("#responsive-icon").addEventListener("click", toggle);
