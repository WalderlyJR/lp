const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector("button");

  button.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const formCotacao = document.getElementById("formCotacao");

formCotacao.addEventListener("submit", function (event) {
  event.preventDefault();

  const mensagem = encodeURIComponent(
    "Olá! Gostaria de receber uma cotação personalizada de plano de saúde."
  );

  window.open(`https://wa.me/5519998001107?text=${mensagem}`, "_blank");
});

/*banner de cookies*/
const cookieBanner = document.getElementById("cookieBanner");

const acceptCookies = document.getElementById("acceptCookies");

const rejectCookies = document.getElementById("rejectCookies");

if(localStorage.getItem("cookieChoice")){
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