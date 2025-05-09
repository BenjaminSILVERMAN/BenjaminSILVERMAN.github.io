// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Bueno, es una ciudad grande y siempre es la misma", time: 15 },
  { text: "Nunca puede ser demasiado bonita, dime tu nombre", time: 19 },
  { text: "¿Está fuera de lugar si me atrevía a decir: ¿serías mía?", time: 22 },
  { text: "Porque yo tal vez un mendigo y tú tal vez la reina", time: 30 },
  { text: "Sé que tal vez en un deprimente, todavía estoy listo para soñar", time: 33 },
  { text: "Ahora son las 3 en punto, el tiempo es justo el tiempo que toma para que hables", time: 37 },
  { text: "Así que si estás solo, ¿por qué dijiste que no estás sola?", time: 43 },
  { text: "Oh, eres una chica necia, lo sé, lo escuché así", time: 51 },
  { text: "es como si vinieras y te fueras", time: 56 },
  { text: "Y conocerme, no, ni siquiera me conoces", time: 59 },
  { text: "eres tan dulce para intentarlo, oh dios atrapaste mi mirada", time: 65 },
  { text: "Una chica como tú es irresistible", time: 70 },
  { text: "Bueno, es una ciudad grande y las luces están apagadas", time: 89 },
  { text: "Pero es mucho lo que puedo hacer, ya sabes, descubrirlo", time: 92 },
  { text: "Y debo confesar que mi corazón está destrozado ", time: 95 },
  { text: "y mi cabeza es un desastre", time: 100 },
  { text: "Y son las 4 de la mañana, y estoy caminando", time: 104 },
  { text: "Al lado del fantasma de todos los bebedores que alguna vez han hecho mal", time: 107 },
  { text: "Y eres tu Woo hoo", time: 110 },
  { text: " que me hace enloquecer por las cosas que haces", time: 112 },
  { text: "Así que si estás loco no me importa, me sorprendes", time: 117 },
 
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