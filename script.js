/** @format */
AOS.init({
  once: true,
  // disable: function () {
  //   var maxWidth = 800;
  //   return window.innerWidth < maxWidth;
  // },
});
let scrollTopBtn = document.querySelector(".scroll-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
