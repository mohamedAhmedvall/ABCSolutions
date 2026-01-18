const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const ctaButton = document.querySelector(".nav .button--primary");

if (navToggle && navMenu && ctaButton) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    ctaButton.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      ctaButton.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const form = document.querySelector(".contact__form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    window.alert("Merci ! Votre message a bien été envoyé.");
  });
}
