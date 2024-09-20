function isActiveLink(linkHref) {
  return window.location.pathname === linkHref ? "active" : "";
}

const links = document.querySelectorAll(".nav .links .link");
links.forEach((link) => {
  if (isActiveLink(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
