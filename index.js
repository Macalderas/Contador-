const contenedor = document.getElementById("contenedor-dias");
const contador = document.getElementById("contador");
const fraseDiv = document.getElementById("frase-motivadora");

let diasCompletados = JSON.parse(localStorage.getItem("diasCompletados")) || [];

const frases = [
  "¡Sí se puede! 💪",
  "¡Vamos, sigue así! 🔥",
  "¡Excelente trabajo! 🌟",
  "¡Un paso más cerca! 🚀",
  "¡Orgulloso de ti! 👏",
  "¡No te detengas ahora! 🏃",
  "¡Vas con todo! 💥",
  "¡Estás logrando algo grande! 🎯"
];

function mostrarFrase() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  fraseDiv.textContent = frase;
  fraseDiv.style.opacity = 1;

  setTimeout(() => {
    fraseDiv.style.opacity = 0;
  }, 2500);
}

function actualizarContador() {
  contador.textContent = diasCompletados.length;
}

for (let i = 1; i <= 90; i++) {
  const dia = document.createElement("div");
  dia.textContent = `Día ${i}`;
  dia.classList.add("dia");

  if (diasCompletados.includes(i)) {
    dia.classList.add("completado");
  }

  dia.addEventListener("click", () => {
    if (dia.classList.contains("completado")) {
      dia.classList.remove("completado");
      diasCompletados = diasCompletados.filter(d => d !== i);
    } else {
      dia.classList.add("completado");
      diasCompletados.push(i);
      mostrarFrase(); // 👈 Mostrar frase al completar
    }

    localStorage.setItem("diasCompletados", JSON.stringify(diasCompletados));
    actualizarContador();
  });

  contenedor.appendChild(dia);
}

actualizarContador();
