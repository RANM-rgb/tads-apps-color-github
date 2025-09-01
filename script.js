// Sliders
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// Inputs numéricos
const redInput = document.getElementById("red-input");
const greenInput = document.getElementById("green-input");
const blueInput = document.getElementById("blue-input");

// Recuadro y textos
const colorBox = document.getElementById("color-box");
const rgbCode = document.getElementById("rgb-code");
const hexCode = document.getElementById("hex-code");

// Función para actualizar color
function updateColor(r, g, b) {
  // Limitar valores entre 0 y 255
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  // Sincronizar sliders e inputs
  red.value = r;
  green.value = g;
  blue.value = b;

  redInput.value = r;
  greenInput.value = g;
  blueInput.value = b;

  // Color en RGB
  const rgb = `rgb(${r}, ${g}, ${b})`;
  colorBox.style.backgroundColor = rgb;
  rgbCode.textContent = rgb;

  // Color en HEX
  const hex = "#" + [r, g, b].map(x => {
    const hexPart = x.toString(16);
    return hexPart.length === 1 ? "0" + hexPart : hexPart;
  }).join("");
  hexCode.textContent = hex;
}

// Eventos sliders
red.addEventListener("input", () => updateColor(+red.value, +green.value, +blue.value));
green.addEventListener("input", () => updateColor(+red.value, +green.value, +blue.value));
blue.addEventListener("input", () => updateColor(+red.value, +green.value, +blue.value));

// Eventos inputs numéricos
redInput.addEventListener("input", () => updateColor(+redInput.value, +greenInput.value, +blueInput.value));
greenInput.addEventListener("input", () => updateColor(+redInput.value, +greenInput.value, +blueInput.value));
blueInput.addEventListener("input", () => updateColor(+redInput.value, +greenInput.value, +blueInput.value));

// Inicializar
updateColor(0, 0, 0);
