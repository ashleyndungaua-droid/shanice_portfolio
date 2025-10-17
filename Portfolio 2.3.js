const navLinks = document.querySelectorAll("nav a, .btn[data-page]");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("data-page");
    if (!targetId) return;

    navLinks.forEach(l => l.classList.remove("active"));
    document.querySelectorAll(`nav a[data-page="${targetId}"]`).forEach(a => a.classList.add("active"));

    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(targetId).classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

