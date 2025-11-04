
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // remove para repetir ao subir/ descer
    }
  });
}, { threshold: 0.15 });

reveals.forEach(element => observer.observe(element));

var light = document.getElementById("toggle-check");

light.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const text = "Artur Henrique";
const speed = 80; // velocidade da digitação (ms)

let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("type").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

const modal = document.getElementById("modal");
const openModal = document.getElementById("form-btn");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
open.addEventListener("click", () => {
  modal.showModal();
});


