const urlAtual = window.location.href;
const navLinks = document.querySelectorAll(".header-nav a");

navLinks.forEach((link) => {
  const navHref = link.href;

  if (urlAtual.includes(navHref)) {
    link.classList.add("active");
  }
});