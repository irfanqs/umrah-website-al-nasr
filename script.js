document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    const offset = 40;

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth",
    });

    document.querySelectorAll(".navbar a").forEach((link) => {
      link.classList.remove("active");
    });

    this.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  document.querySelectorAll(".navbar a").forEach((link) => {
    const targetElement = document.querySelector(link.getAttribute("href"));
    const offset = 40;

    if (targetElement.offsetTop - offset <= scrollPosition && targetElement.offsetTop + targetElement.offsetHeight - offset > scrollPosition) {
      document.querySelectorAll(".navbar a").forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

function callButton() {
  alert("Normally this button works! But unfortunately this website is just a prototype and not a real website :(");
}

$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({});
});
