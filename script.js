let nombre = prompt("¿Cuál es tu nombre?");
let nombreReverso = "";

for (let i = nombre.length - 1; i >= 0; i--) {
  nombreReverso += nombre[i];
}

console.log("¡Adiós " + nombreReverso + "!");
