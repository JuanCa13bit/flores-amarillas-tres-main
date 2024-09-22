// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te confieso la verdad", time: 18 },
  { text: "No me iba a imaginar", time: 21 },
  { text: "Que llegaras a mi vida a dar sentido", time: 24 },
  { text: "Tu energia un imán", time: 29 },
  { text: "Conexion espiritual", time: 31 },
  { text: "En este sueño donde sea voy contigo", time: 34 },
  { text: "Vayamos de viaje", time: 39 },
  { text: "Te tengo el pasaje", time: 41 },
  { text: "Un dia en París te voy a decir lo que nadie sabe", time: 44 },
  { text: "Y cuando el sol cae", time: 49 },
  { text: "Los dos frente al Sena", time: 51 },
  { text: "Con vino en la mano, momento sagrado", time: 53 },
  { text: "Lo nuestro se queda", time: 56 },
  { text: "Y cuando te besé", time: 59 },
  { text: "Me elevé", time: 101 },
  { text: "Y volé", time: 104 },
  { text: "A otras vidas", time: 106 },
  { text: "Y nunca dudaré", time: 109 },
  { text: "Que contigo seré", time: 111 },
  { text: "Mi mejor versión", time: 113 },
  { text: "Cada día", time: 116 },
  { text: "AMORCITO.", time: 120 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
