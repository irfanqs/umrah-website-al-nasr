document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    const offset = 40;

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: "smooth",
    });

    // Hapus kelas "active" dari semua elemen navbar
    document.querySelectorAll(".navbar a").forEach((link) => {
      link.classList.remove("active");
    });

    // Tambahkan kelas "active" pada elemen yang sesuai dengan section yang ditampilkan
    this.classList.add("active");
  });
});

// Tambahkan event listener untuk menangani scroll dan menetapkan kelas "active" pada navbar
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
