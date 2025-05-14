let retoActual = 0;
let tiempoRestante = 30;  
let temporizador;
let tiempoInicio = Date.now();

const retos = [
  {
    titulo: "Reto del Día",
    pregunta: "Un número más el doble de su valor es igual a 36. ¿Cuál es el número?",
    respuesta: "12",
    explicacion: "Sea el número x. La ecuación es: x + 2x = 36 → 3x = 36 → x = 12.",
    pista: "¿Recuerdas cuanto era doble del 3 multiplicado por dos?"
  },

  {
    titulo: "Reto 1",
    pregunta: "¿Cuál es el número que triplicado y sumado con 5 da 20?",
    respuesta: "5",
    explicacion: "Sea el número x. 3x + 5 = 20 → 3x = 15 → x = 5.",
    pista: "Resta 5 de 20 y divide el resultado entre 3."
  },

  {
    titulo: "Reto 2",
    pregunta: "Si 3x + 4 = 19, ¿cuánto vale x?",
    respuesta: "5",
    explicacion: "3x + 4 = 19 → 3x = 15 → x = 5.",
    pista: "Recuerda que primero debes restar 4 de 19 y luego dividir entre 3."
     },

  {
    titulo: "Reto 3",
    pregunta: "Un rectángulo tiene área 24 y base 6. ¿Cuál es su altura?",
    respuesta: "4",
    explicacion: "Área = base × altura → 24 = 6 × h → h = 4.",
    pista: "Recuerda que el área de un rectángulo se calcula multiplicando la base por la altura. Si el área es 24 y la base es 6, solo necesitas dividir el área entre la base para encontrar la altura."
  },
  {
    titulo: "Reto 4",
    pregunta: "Resuelve: 2(x - 3) = 10",
    respuesta: "8",
    explicacion: "2(x - 3) = 10 → x - 3 = 5 → x = 8.",
    pista: "Recuerda que debes primero despejar el paréntesis multiplicando el 2, luego resolver la ecuación paso a paso."
  },
  {
    titulo: "Reto 5",
    pregunta: "¿Qué número al cuadrado da 49?",
    respuesta: "7",
    explicacion: "7 × 7 = 49.",
    pista: "¿Recuerdas el numero que multiplicado por dos da 14?"
  },
  {
    titulo: "Reto 6",
    pregunta: "Resuelve: x/2 + 3 = 7",
    respuesta: "8",
    explicacion: "x/2 = 4 → x = 8.",
    pista: "¿Recuerdas cual es el doble multiplicado por dos?"
  },

   {
    titulo: "Reto 7",
    pregunta: "Un número más 15 es igual a 42. ¿Cuál es el número?",
    respuesta: "27",
    explicacion: "x = 42−15 = 27,",
    pista: "Piensa en qué número necesitas agregarle 15 para llegar a 42. ¿Qué resta de 42 si le quitas ese 15?"
  },

   {
    titulo: "Reto 8",
    pregunta: "El triple de un número es igual a 81. ¿Cuál es el número?",
    respuesta: "27",
    explicacion: "x= 81/3 = 27.",
    pista: "Si multiplicas cinco por cuatro y luego le agregas siete, ¿qué número obtienes?"
  },

   {
    titulo: "Reto 9",
    pregunta: "Pedro tenía 35 canicas. Perdió 12 mientras jugaba. ¿Cuántas canicas le quedan?",
    respuesta: "23",
    explicacion: "35 − 12 = 23",
    pista: "Si empiezas con 35 y te quedas con lo que queda después de quitar 12, ¿qué cantidad te sobra de lo que tenías al principio?"
  },

   {
    titulo: "Reto 10",
    pregunta: "El doble de un número aumentado en 8 es igual a 24. ¿Cuál es el número?",
    respuesta: "8",
    explicacion: "2x = 16 ⇒ x = 8",
    pista: "Imagina que tienes algo en dos partes, le agregas un 8 y luego llegas a 24. ¿Qué número necesitas para que, al duplicarlo y sumarle 8, llegues a esa cantidad?"
  }
];



function cargarReto(index) {
  clearInterval(temporizador); 

  retoActual = index;
  tiempoRestante = 30;
  tiempoInicio = Date.now();

  document.getElementById("titulo-reto").textContent = retos[index].titulo;
  document.getElementById("pregunta").textContent = retos[index].pregunta;
  document.getElementById("respuesta").value = "";
  document.getElementById("respuesta-msg").textContent = "";
  document.getElementById("explicacion").style.display = "none";
  document.getElementById("explicacion").textContent = "";
  document.getElementById("nuevo-reto").style.display = "none"; 
  document.getElementById("btn-explicacion").disabled = true;
  document.getElementById("pista").style.display = "none";

  iniciarTemporizador();
}



function iniciarTemporizador() {
  const timerDiv = document.getElementById("temporizador");
  timerDiv.textContent = `⏱️ Tiempo: ${tiempoRestante}s`;

  temporizador = setInterval(() => {
    tiempoRestante--;
    timerDiv.textContent = `⏱️ Tiempo: ${tiempoRestante}s`;

    if (tiempoRestante <= 0) {
      clearInterval(temporizador);
      document.getElementById("respuesta-msg").textContent = "⏰ Tiempo agotado.";
      document.getElementById("respuesta-msg").style.color = "gray";
    }
  }, 1000);
}



function verificarRespuesta() {
  const input = document.getElementById("respuesta").value.trim();
  const msg = document.getElementById("respuesta-msg");
  const pistaDiv = document.getElementById("pista");

  if (input === retos[retoActual].respuesta) {
    msg.textContent = "☑ ¡Correcto!";
    msg.style.color = "green";
    clearInterval(temporizador);
    document.getElementById("btn-explicacion").disabled = false;

    const tiempoFinal = Math.floor((Date.now() - tiempoInicio) / 1000);
    
    if (tiempoFinal < 10) {
      document.getElementById("nuevo-reto").style.display = "block";  
    }
  } else {
    msg.textContent = "❌ No es correcto. ¡Inténtalo de nuevo!";
    msg.style.color = "red";

    pistaDiv.textContent = "💡 Pista: " + (retos[retoActual].pista || "No hay pista disponible.");
    pistaDiv.style.display = "block";
  }
}



function mostrarExplicacion() {
  const exp = document.getElementById("explicacion");
  exp.textContent = retos[retoActual].explicacion;
  exp.style.display = "block";
}



function retoAleatorio() {
  const index = Math.floor(Math.random() * retos.length);
  cargarReto(index);
}



function iniciarReto() {
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("contenido-reto").style.display = "block";
  cargarReto(0);
}


window.onload = function() {
}

document.getElementById("respuesta").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    verificarRespuesta();
  }
});