/*
function numeroDado(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let nombre = prompt("Ingrese nombre");
let dados = parseInt(prompt("Numero de dados maximo 10"));

document.write("<h1>Tu nombre es: " + nombre + "</h1><h3>Resultado:</h3>");
for (let i = 1; i <= dados; i++) {
  document.write("<h4>" + i + ". - " + numeroDado(1, 6) + "</h4>");
  if (i >= 10) {
    document.write("<p>El limite es de diez dados</p>");
    break;
  }
}
*/
let base_preguntas = readText("preguntas.json");
let interpreta_preguntas = JSON.parse(base_preguntas);
let pregunta;
let arraybtn;
let lista_pregunta;
let btns = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),
  select_id("btn4"),
];

traer__pregunta(0);

function traer__pregunta(n) {
  lista_pregunta = interpreta_preguntas[n];
  select_id("categoria").innerHTML = lista_pregunta.categoria;
  select_id("pregunta").innerHTML = lista_pregunta.pregunta;
  select_id("imagen").setAttribute("src", lista_pregunta.imagen);
  style("imagen").objectFit = lista_pregunta.objectFit;
  randombnt(pregunta);
  if (lista_pregunta.imagen) {
    style("imagen").height = "350px";
  } else {
    style("imagen").height = 0;
  }
}

function randombnt(pregunta) {
  arraybtn = [
    lista_pregunta.true,
    lista_pregunta.false1,
    lista_pregunta.false2,
    lista_pregunta.false3,
  ];
  arraybtn.sort(() => Math.random() - 0.5);

  select_id("btn1").innerHTML = arraybtn[0];
  select_id("btn2").innerHTML = arraybtn[1];
  select_id("btn3").innerHTML = arraybtn[2];
  select_id("btn4").innerHTML = arraybtn[3];
}

function press_btn(i) {
  if (arraybtn[i] == lista_pregunta.true) {
    btns[i].style.background = "rgba(0, 255, 0, .7)";
  } else {
    btns[i].style.background = "rgba(255, 0, 0, .7)";
  }
  setTimeout(() => {
    reset();
  }, 20000);
}

function reset() {
  for (const btn of btns) {
    btn.style.background = "white";
  }
}

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
