console.log(`Conexión con JS correcta...`)

/* IMAGENES DEL CARRUSEL */

const imagenes = [
    "static/images/MannVsMachine.png", // Imagen 0
    "static/images/PootisEngage.png", // Imagen 1
    "static/images/TeamFabulous2.png", // Imagen 2
    "static/images/TheRedTheBlueAndTheUgly.png"  // Imagen 3
];

const cajaTexto = document.getElementById("texto-cambiante")

const textos = [
    "Mann Vs Machine",
    "Pootis Engage // EXTREME",
    "Team Fabulous 2",
    "The Red, The Blue And The Ugly"
];

// 2. Variable para saber en qué imagen estamos (empezamos en la primera)
let indiceActual = 0;

// 3. La función que mueve el carrusel
function cambiarImagen(direccion) {
    // Sumamos o restamos dependiendo del botón que se hizo clic
    indiceActual = indiceActual + direccion;

    // Si nos pasamos de la última imagen, volvemos al principio (0)
    if (indiceActual >= imagenes.length && indiceActual >= textos.length) {
        indiceActual = 0;
    }
    // Si retrocedemos antes de la primera imagen, vamos a la última
    else if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
        indiceActual = textos.length - 1;
    }

    // Capturamos la etiqueta <img id="imagen-carrusel"> y le cambiamos su atributo 'src'
    document.getElementById("imagen-carrusel").src = imagenes[indiceActual];
    cajaTexto.innerText = textos[indiceActual];
}

/* INAGENES CAMBIANTES */

let imagen1 = document.querySelector("#portadaCambiante1")
let imagen2 = document.querySelector("#portadaCambiante2")
let imagen3 = document.querySelector("#portadaCambiante3")
let imagen4 = document.querySelector("#portadaCambiante4")

imagen1.addEventListener("mouseover", function(){
    this.src = "static/images/soporteTecnico2.png";
})

imagen1.addEventListener("mouseout", function(){
    this.src = "static/images/soporteTecnico1.png";
})

imagen2.addEventListener("mouseover", function(){
    this.src = "static/images/redesConectividad2.png";
})

imagen2.addEventListener("mouseout", function(){
    this.src = "static/images/redesConectividad1.png";
})

imagen3.addEventListener("mouseover", function(){
    this.src = "static/images/desarrolloWeb2.png";
})

imagen3.addEventListener("mouseout", function(){
    this.src = "static/images/desarrolloWeb1.png";
})

imagen4.addEventListener("mouseover", function(){
    this.src = "static/images/seguridadInformatica2.png";
})

imagen4.addEventListener("mouseout", function(){
    this.src = "static/images/seguridadInformatica1.png";
})

/* BOTÓN DE LIKE */

let likes = 0;
let estadoLike = false;

const btnLike = document.querySelector(".indicador-like");
const numLike = document.querySelector("#valor-like");

btnLike.addEventListener("click", () => {
    if (!estadoLike) {
        likes++;
        estadoLike = true;
        btnLike.querySelector("img").src = "static/images/botonLike_activo.png";
    } else {
        likes--;
        estadoLike = false;
        btnLike.querySelector("img").src = "static/images/botonLike_neutral.png";
    }
    numLike.textContent = likes;
});