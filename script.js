const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector("button");

  if (button) {
    button.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});

/* banner de cookies */
const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");

if (cookieBanner && acceptCookies && rejectCookies) {
  if (localStorage.getItem("cookieChoice")) {
    cookieBanner.style.display = "none";
  }

  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "accepted");
    cookieBanner.style.display = "none";
  });

  rejectCookies.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "rejected");
    cookieBanner.style.display = "none";
  });
}

/* menu burger */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });
}