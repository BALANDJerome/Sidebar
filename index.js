let navbar = document.getElementById("side-bar"),
  toggle = true;
const section = document.querySelector(".content");

const navbarMove = () => {
  if (toggle) {
    navbar.style.left = 0;
    btn.children[0].style.transform = "rotate(45deg) translate(20px)";
    btn.children[1].style.opacity = 0;
    btn.children[2].style.transform = "rotate(-45deg) translate(20px)";
  } else {
    navbar.style.left = "-230px";
    btn.children[0].style.transform = "rotate(0)";
    btn.children[1].style.opacity = 1;
    btn.children[2].style.transform = "rotate(0)";
  }
  toggle = !toggle;
};

btn.addEventListener("click", navbarMove);
section.addEventListener("click", () => {
  navbar.style.left = "-230px";
  btn.children[0].style.transform = "rotate(0)";
  btn.children[1].style.opacity = 1;
  btn.children[2].style.transform = "rotate(0)";
  toggle = true;
});

// const navbarOpen = () => {
//   navbar.style.left = 0;
//   btn.children[0].style.transform = "rotate(45deg) translate(20px)";
//   btn.children[1].style.opacity = 0;
//   btn.children[2].style.transform = "rotate(-45deg) translate(20px)";
// };
// const navbarClose = () => {
//   navbar.style.left = "-230px";
//   btn.children[0].style.transform = "rotate(0)";
//   btn.children[1].style.opacity = 1;
//   btn.children[2].style.transform = "rotate(0)";
// };
// let navbarMove = false;

// btn.addEventListener("click", () => {
//   navbarMove = !navbarMove;
//   if (navbarMove === true) {
//     navbarOpen();
//   } else {
//     navbarClose();
//   }
// });
// section.addEventListener("click", () => {
//   console.log(navbarMove);
//   if (navbarMove === true) {
//     navbarClose();
//     navbarMove = false;
//   }
// });
