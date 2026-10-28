// 1. Abrir y cerrar el menú en celulares
const menuBoton = document.getElementById("menuBoton");
const menuEnlaces = document.getElementById("menuEnlaces");

menuBoton.addEventListener("click", function () {
  menuEnlaces.classList.toggle("abierto");
});

// Cerrar el menú al elegir una opción
const enlaces = document.querySelectorAll(".menu-enlaces a");
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menuEnlaces.classList.remove("abierto");
  });
});

// 2. Hacer aparecer las secciones suavemente al bajar en la página
const secciones = document.querySelectorAll(".seccion");

secciones.forEach(function (seccion) {
  seccion.classList.add("oculto");
});

const observador = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("mostrar");
    }
  });
}, { threshold: 0.15 });

secciones.forEach(function (seccion) {
  observador.observe(seccion);
});

// 3. Mostrar el botón "volver arriba" cuando se baja en la página
const volverArriba = document.getElementById("volverArriba");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    volverArriba.classList.add("visible");
  } else {
    volverArriba.classList.remove("visible");
  }
});

volverArriba.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 4. Formulario de contacto: abrir WhatsApp con el mensaje escrito
const formularioContacto = document.getElementById("formularioContacto");
const numeroWhatsapp = "51957790119";

formularioContacto.addEventListener("submit", function (evento) {
  evento.preventDefault();   // evita que la página se recargue

  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;
  const texto = "Hola Andrea, soy " + nombre + ". " + mensaje;

  // Abre WhatsApp en una pestaña nueva con el mensaje listo para enviar
  const enlace = "https://wa.me/" + numeroWhatsapp + "?text=" + encodeURIComponent(texto);
  window.open(enlace, "_blank");
});

// 5. Poner el año actual en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();
