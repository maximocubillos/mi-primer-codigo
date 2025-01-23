let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(10 * 100);

btn.onclick = function () {
  container.style.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 10000);

  // Esperar 5 segundos y luego redirigir
  setTimeout(() => {
    window.location.href = "https://api.whatsapp.com/send?phone=56994991536"; // Reemplaza con tu URL
  }, 5000);
};

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}
