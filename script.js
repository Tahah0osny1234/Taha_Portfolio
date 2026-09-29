const links = document.querySelectorAll(".nav-links a");
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = [...document.querySelectorAll("main section[id]")];

const onScroll = () => {
  const y = window.scrollY + 160;
  let current = "";
  
  for (const section of sections) {
    if (section.offsetTop <= y) {
      current = section.id;
    }
  }

  links.forEach((link) => {
    const href = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("active", href === current);
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
