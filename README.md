# 🎮 Adivina el Número - Juego en Consola

Este es un juego simple de adivinanza en la consola donde el jugador tiene **3 intentos** para adivinar un número aleatorio entre **1 y 10**. El juego proporciona pistas sobre si el número ingresado es demasiado alto o bajo y finaliza cuando el jugador gana o se queda sin intentos.

## 🚀 Características
- Generación de un número aleatorio entre 1 y 10.
- Entrada del usuario a través de la consola.
- Indicación de si el número ingresado es **muy alto o muy bajo**.
- Límite de **3 intentos** por partida.
- Mensajes claros para ganar o perder el juego.

## 📌 Requisitos
Para ejecutar este juego, necesitas tener instalado:
- **Node.js** (Versión 12 o superior)

Puedes verificar si tienes Node.js instalado con:
```sh
node -v
```

## 🔧 Instalación y ejecución
1. **Clona este repositorio** en tu máquina local:
   ```sh
   git clone https://github.com/Santiagolescanno/GuessNumber_Console-Game.git
   ```
2. **Accede al directorio del proyecto**:
   ```sh
   cd GuessNumber_Console-Game
   ```
3. **Ejecuta el juego** con el siguiente comando:
   ```sh
   node index.js
   ```

## 🕹️ Cómo jugar
1. El juego generará un número aleatorio entre **1 y 10**.
2. Tendrás **3 intentos** para adivinarlo.
3. Si el número ingresado es incorrecto, el juego indicará si es **muy alto o muy bajo**.
4. Si aciertas, se mostrará un mensaje de **GANADOR**.
5. Si te quedas sin intentos, perderás y se mostrará el número correcto.

## 📜 Ejemplo de ejecución
```
🎮 Bienvenido!
Adivina el número (1-10). Tienes 3 intentos.

> 5
📈 Demasiado alto.
⏳ Intentos restantes: 2

> 2
📉 Demasiado bajo.
⏳ Intentos restantes: 1

> 3
🎉 ¡GANASTE! Adivinaste el número.
```

## 👨‍💻 Autor
Desarrollado por **[Santiagolescanno](https://github.com/Santiagolescanno)**.

## 📜 Licencia
Este proyecto se distribuye bajo la licencia **MIT**. ¡Siéntete libre de modificarlo y mejorarlo! 🚀