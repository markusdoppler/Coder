

/* Web Animations API */

let needle = document.getElementById("needle");
let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  needle.animate({
    transform: [
      "rotateX(35deg) rotateZ(13deg)",
      "rotateX(35deg) rotateZ(733deg)",
    ],
    easing: ["ease-out"],
  }, 800);
});
