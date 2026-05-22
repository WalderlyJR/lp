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