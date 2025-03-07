const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Función para generar un número aleatorio entre min y max (ambos incluidos)
const getRandomIntInclusive = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Variables de juego
let intentos = 3;
let randomNumber = getRandomIntInclusive(1, 10);

console.log("\n🎮 Bienvenido!\nAdivina el número (1-10). Tienes 3 intentos.");
rl.prompt();

// Manejo de la entrada del usuario
rl.on("line", (input) => {
    let suposicion = parseInt(input);

    // Verificar si la entrada es un número válido
    if (isNaN(suposicion) || suposicion < 1 || suposicion > 10) {
        console.log("⚠️ Entrada no válida. Ingresa un número entre 1 y 10.");
    } else {
        intentos--;

        if (suposicion === randomNumber) {
            console.log("🎉 ¡GANASTE! Adivinaste el número.");
            rl.close();
        } else if (intentos > 0) {
            console.log(suposicion < randomNumber ? "📉 Demasiado bajo." : "📈 Demasiado alto.");
            console.log(`⏳ Intentos restantes: ${intentos}`);
        } else {
            console.log(`❌ ¡PERDISTE! El número era: ${randomNumber}`);
            rl.close();
        }
    }

    if (intentos > 0) {
        rl.prompt();
    }
});
