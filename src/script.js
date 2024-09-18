const nav = document.querySelector("nav");

function scrolledNavbar() {
  if (this.scrollY > 0) {
    nav.classList.add("bg-[#1F0757]");
    nav.classList.remove("bg-[#030205]");
  } else {
    nav.classList.add("bg-[#030205]");
    nav.classList.remove("bg-[#1F0757]");
  }
}

this.addEventListener("scroll", scrolledNavbar);
scrolledNavbar();
