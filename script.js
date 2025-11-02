// Lista de productos

console.log("✅ Script cargado correctamente");


const productos = [
  { nombre: "Bocina Inteligente Alexa Azul", archivo: "alexaazul.jpg", precio: 2899, marca: "Amazon", descripcion: "Bocina inteligente con asistente Alexa y conexión WiFi.", ubicaciones: ["Queretaro"] },
  { nombre: "Bocina Inteligente Alexa Negra", archivo: "alexaneg.webp", precio: 2699, marca: "Amazon", descripcion: "Bocina inteligente con asistente Alexa y conexión WiFi. Color Negra", ubicaciones: ["Veracruz"] },
  { nombre: "Bocina Inteligente Alexa Blanca", archivo: "alexawhi.webp", precio: 2599, marca: "Amazon", descripcion: "Versión blanca de la bocina inteligente Alexa.", ubicaciones: ["Queretaro"] },
  { nombre: "Audífonos Inalámbricos Bluetooth Xiaomi", archivo: "audifazulxia.webp", precio: 799, marca: "Xiaomi", descripcion: "Audífonos inalámbricos con bluetooth 5.0 y cancelación de ruido.", ubicaciones: ["Veracruz"] },
  { nombre: "Audífonos Inalámbricos Bluetooth Audio Gen", archivo: "audifelect.webp", precio: 499, marca: "Audio Gen", descripcion: "Audífonos básicos con buena calidad de sonido.", ubicaciones: ["Acayucan"] },
  { nombre: "Audífonos Inalámbricos Lenovo", archivo: "audlen.webp", precio: 799, marca: "Lenovo", descripcion: "Audífonos cómodos con buena duración de batería.", ubicaciones: ["Acayucan"] },
  { nombre: "Avión y Carro Lego", archivo: "avicar.webp", precio: 599, marca: "Lego", descripcion: "Set de avión y carro para niños, ¡ármalo tú mismo!", ubicaciones: ["Acayucan"] },
  { nombre: "Bocina De Colores", archivo: "bocinacol.webp", precio: 699, marca: "Audio Gen", descripcion: "Bocina portátil con luces LED de colores.", ubicaciones: ["Queretaro"] },
  { nombre: "Cable Ethernet 15M", archivo: "cableteth.webp", precio: 499, marca: "Shawly", descripcion: "Cable de red Ethernet de 15 metros de longitud.", ubicaciones: ["Acayucan"] },
  { nombre: "Cámara De Seguridad HD", archivo: "camarapq.webp", precio: 6999, marca: "Shawly", descripcion: "4 Cámaras de seguridad HD para vigilancia.", ubicaciones: ["Acayucan"] },
  { nombre: "Cartera Rosa De Lujo", archivo: "carteraros.jpg", precio: 499, marca: "Moda Gen", descripcion: "Cartera elegante de material de alta calidad.", ubicaciones: ["Acayucan"] },
  { nombre: "Carro Transformers", archivo: "cartrans.webp", precio: 499, marca: "Moda Gen", descripcion: "Figura de carro Transformers para colección.", ubicaciones: ["Acayucan"] },
  { nombre: "Cortadora De Vello Nasal", archivo: "cortadoranar.webp", precio: 599, marca: "Moda Gen", descripcion: "Cortadora eléctrica para vello nasal, segura y eficiente.", ubicaciones: ["Acayucan"] },
  { nombre: "Adaptador Europeo", archivo: "enchufEUR.webp", precio: 149, marca: "Moda Gen", descripcion: "Adaptador de enchufe para tomas europeas.", ubicaciones: ["Acayucan"] },
  { nombre: "Impresora De Código De Barras", archivo: "imprcod.webp", precio: 2599, marca: "Holyhah", descripcion: "Impresora Térmica De Recibos Pos De 80 Mm.", ubicaciones: ["Queretaro"] },
  { nombre: "Tarjeta DDR 1TB Kingston", archivo: "kingst.webp", precio: 3499, marca: "Kingston", descripcion: "Memoria RAM DDR de 1TB de alta velocidad.", ubicaciones: ["Queretaro"] },
  { nombre: "Cargador y Lámpara Inteligente Diseño G", archivo: "lampar.webp", precio: 599, marca: "TechNova", descripcion: "Lámpara con control por app y cargador para iPhone.", ubicaciones: ["Queretaro"] },
  { nombre: "Laptop Gamer HP Victus 15.6", archivo: "lapamdryzen.webp", precio: 24999, marca: "HP", descripcion: "HP Victus Ryzen 7 16GB RAM 512SSD RTX4050.", ubicaciones: ["Queretaro"] },
  { nombre: "Lector de Código", archivo: "letcod.webp", precio: 999, marca: "Shawty", descripcion: "Lector de código de barras rápido y confiable.", ubicaciones: ["Queretaro"] },
  { nombre: "Lector de Código De Escritorio", archivo: "lectcodesc.webp", precio: 1899, marca: "Shawty", descripcion: "Lector Inalámbrico con Mini Receptor USB.", ubicaciones: ["Queretaro"] },
  { nombre: "Lector de Código Inalámbrico", archivo: "letcod2.webp", precio: 1499, marca: "Lozayi", descripcion: "Escáner 1D/2D inalámbrico.", ubicaciones: ["Queretaro"] },
  { nombre: "Legos Varios", archivo: "legosc.webp", precio: 599, marca: "Lego", descripcion: "Set de 300 piezas para construcción creativa.", ubicaciones: ["Queretaro"] },
  { nombre: "Lentes Inteligentes HD", archivo: "lentesint.webp", precio: 5499, marca: "Smart", descripcion: "Lentes inteligentes con cámara HD.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Portátil 15.6", archivo: "mon15.webp", precio: 2999, marca: "GAMER", descripcion: "Monitor portátil Full HD 15.6 pulgadas.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Gamer 21.5", archivo: "mon21.5.webp", precio: 6999, marca: "Xiaomi", descripcion: "Panel IPS sRGB 99% HDR10.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Gamer G27i", archivo: "monitorxiao27.webp", precio: 6999, marca: "Xiaomi", descripcion: "Monitor 27'' Full HD.", ubicaciones: ["Queretaro"] },
  { nombre: "Monitor Gamer Curvo 24.5", archivo: "montisams24.webp", precio: 6999, marca: "GAMER", descripcion: "Monitor curvo gamer.", ubicaciones: ["Queretaro"] },
  { nombre: "Mouse Inalámbrico", archivo: "mousein.webp", precio: 499, marca: "GAMER", descripcion: "Mouse inalámbrico ergonómico.", ubicaciones: ["Acayucan"] },
  { nombre: "Navaja Multiusos", archivo: "navajmul.webp", precio: 499, marca: "GAMER", descripcion: "Navaja compacta con múltiples funciones.", ubicaciones: ["Acayucan"] },
  { nombre: "Protector De Cámara", archivo: "protcam.webp", precio: 99, marca: "GAMER", descripcion: "Protector de cámara para móviles.", ubicaciones: ["Acayucan"] },
  { nombre: "Punto de Venta Digital", archivo: "puntdig.webp", precio: 15999, marca: "TechNova", descripcion: "Sistema digital para punto de venta.", ubicaciones: ["Queretaro"] },
  { nombre: "Wireless Repetidor", archivo: "rept.webp", precio: 1499, marca: "Wireless", descripcion: "Repetidor WiFi amplia cobertura.", ubicaciones: ["Acayucan"] },
  { nombre: "Soporte Para Celular", archivo: "soportcel.webp", precio: 499, marca: "TechNova", descripcion: "Soporte ajustable metálico.", ubicaciones: ["Acayucan"] },
  { nombre: "Tarjeta SSD 2TB", archivo: "SSD2TB.webp", precio: 5999, marca: "TechNova", descripcion: "SSD de 2TB para almacenamiento masivo.", ubicaciones: ["Queretaro"] },
  { nombre: "Teclado Mecánico", archivo: "tecl.webp", precio: 1499, marca: "TechNova", descripcion: "Teclado mecánico retroiluminado.", ubicaciones: ["Queretaro"] },
  { nombre: "Botella Térmica Digital Roja", archivo: "termoroj.webp", precio: 199, marca: "TechNova", descripcion: "Botella térmica acero inoxidable.", ubicaciones: ["eracruz"] },
  { nombre: "Impresora Multifuncional Canon", archivo: "imprcan.webp", precio: 6599, marca: "Canon", descripcion: "Multifuncional Canon G3110.", ubicaciones: ["Queretaro"] },
  { nombre: "Impresora Multifuncional Epson", archivo: "impreps.webp", precio: 9999, marca: "Epson", descripcion: "Epson Ecotank L5590.", ubicaciones: ["Queretaro"] },
  { nombre: "Pc Gaming Computadora", archivo: "pcgam.webp", precio: 20999, marca: "Gamer", descripcion: "Intel Core I5 12400, 16gb, 500gb SSD.", ubicaciones: ["Queretaro"] },
  { nombre: "Turbo Cargador 67w", archivo: "cargrap.webp", precio: 399, marca: "Jeeyee", descripcion: "Turbo cargador rápido con cable Tipo C.", ubicaciones: ["Queretaro"] },
  { nombre: "Router Wifi 300Mbps", archivo: "routlink.webp", precio: 2999, marca: "Tp-Link", descripcion: "TP-Link TL-WR840N.", ubicaciones: ["Queretaro"] },
  { nombre: "Batería Portátil 38600mah", archivo: "PWRBAN.webp", precio: 1499, marca: "Hyboer", descripcion: "Cargador portátil rápida carga.", ubicaciones: ["Veracruz"] },
  { nombre: "Monitor HP P24V G5", archivo: "monhp23.8.webp", precio: 3899, marca: "HP", descripcion: "Monitor 23.8 negro.", ubicaciones: ["Queretaro"] },
  { nombre: "Multicontacto 8 Tomas", archivo: "multi8.webp", precio: 499, marca: "Boparte", descripcion: "Multicontacto con USB 1.2m.", ubicaciones: ["Queretaro"] },
  { nombre: "Extensión Uso Rudo 15M", archivo: "extrud.webp", precio: 1499, marca: "Boparte", descripcion: "Extensión uso rudo 15m.", ubicaciones: ["Queretaro"] },
  { nombre: "Máquina De Afeitar Bronze", archivo: "rasb.webp", precio: 499, marca: "OEM", descripcion: "Máquina profesional barba y pelo.", ubicaciones: ["Veracruz"] },
  { nombre: "Cartera Menbense Café", archivo: "cartc.webp", precio: 399, marca: "Menbense", descripcion: "Cartera estilo italiano café.", ubicaciones: ["Veracruz"] },
  { nombre: "Drone Con Dual Cámara 4K", archivo: "dronp.webp", precio: 1499, marca: "OEM", descripcion: "Drone plegable HD via app 2.4ghz.", ubicaciones: ["Veracruz"] },
  { nombre: "Cartera Menbense Gris", archivo: "cargr.webp", precio: 399, marca: "Menbense", descripcion: "Cartera estilo italiano gris.", ubicaciones: ["Veracruz"] },
  { nombre: "Mochila Deportiva Oxford", archivo: "maric.webp", precio: 399, marca: "Oxford", descripcion: "Mochila deportiva multifuncional.", ubicaciones: ["Veracruz"] },
  { nombre: "Máquina de Afeitar Black", archivo: "rasvia.webp", precio: 399, marca: "OEM", descripcion: "Kit peluquería completo.", ubicaciones: ["Veracruz"] },
  { nombre: "Espumador De Café", archivo: "espum.webp", precio: 199, marca: "Gen", descripcion: "Batidor eléctrico para leche.", ubicaciones: ["Veracruz"] },
  { nombre: "Auriculares inalámbricos E7S", archivo: "audros.webp", precio: 499, marca: "OEM", descripcion: "Mini auriculares deportivos TWS.", ubicaciones: ["Veracruz"] },
  { nombre: "Auriculares inalámbricos Gen", archivo: "audsen.jpg", precio: 399, marca: "OEM", descripcion: "Bluetooth sonido HIFI.", ubicaciones: ["Veracruz"] },
  { nombre: "Bolso de hombro Mujer Negro", archivo: "bolneg.jpg", precio: 499, marca: "Fashionn", descripcion: "Bolso elegante de cuero PU.", ubicaciones: ["Veracruz"] },
  { nombre: "Alfombrilla RGB Gamer Lujo", archivo: "alf.webp", precio: 999, marca: "Oxford", descripcion: "Alfombrilla LED para juegos.", ubicaciones: ["Queretaro"] },
  { nombre: "Alfombrilla RGB Gamer XL", archivo: "alf1.webp", precio: 999, marca: "Oxford", descripcion: "Alfombrilla LED tamaño ampliado.", ubicaciones: ["Queretaro"] },
  { nombre: "Audífonos Airdots 2", archivo: "xiacaj.webp", precio: 799, marca: "Xiaomi", descripcion: "Auriculares inalámbricos con micrófono.", ubicaciones: ["Queretaro"] },
  { nombre: "Cable para iPhone Lightning", archivo: "cabiph.jpg", precio: 169, marca: "Iphone", descripcion: "Cable USB a Lightning certificado.", ubicaciones: ["Veracruz"] },
  { nombre: "Juego de urinario para coche", archivo: "urin.jpg", precio: 299, marca: "OEM", descripcion: "Cubo portátil para viaje de emergencia.", ubicaciones: ["Veracruz"] },
  { nombre: "Cargador y cable USB-C", archivo: "cabc.webp", precio: 179, marca: "Oxford", descripcion: "Cargador con cable resistente.", ubicaciones: ["Veracruz"] },
  { nombre: "Cargador rápido USB-C", archivo: "cabipho.webp", precio: 199, marca: "Oxford", descripcion: "Cargador USB-C carga rápida.", ubicaciones: ["Veracruz"] },
  { nombre: "Foco LED RGB con Bocina", archivo: "boci.jpg", precio: 399, marca: "Oxford", descripcion: "Foco RGB con bocina Bluetooth.", ubicaciones: ["Veracruz"] },
  { nombre: "Smartwatch Gold Black", archivo: "relbl.jpg", precio: 2499, marca: "Smart", descripcion: "Reloj inteligente moderno.", ubicaciones: ["Queretaro"] },
  { nombre: "Titanic Lego Mini", archivo: "titanicleg.webp", precio: 699, marca: "OEM", descripcion: "Barco Titanic armable en miniatura.", ubicaciones: ["Veracruz"] },

  { nombre: "Bocina con luz para baño", archivo: "bocinaducha.jpg", precio: 699, marca: "TechNova", descripcion: "Bocina bluetooth con sujeción para baño, resistente al agua y con luces LED, Diametro 8-9cm", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Silver", archivo: "smartwatch.jpg", precio: 2999, marca: "TechNova", descripcion: "Reloj inteligente estilo premium con monitoreo de salud, notificaciones y correa metálica.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Máscara LED Facial", archivo: "mascaraled.jpg", precio: 1499, marca: "TechNova", descripcion: "Máscara de luz LED para cuidado de la piel con diferentes modos para mejorar rostro y eliminar impurezas.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Foco Inteligente WiFi", archivo: "focowifi.jpg", precio: 199, marca: "TechNova", descripcion: "Foco inteligente controlado vía app, compatible con asistentes de voz y multicolor RGB.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Android TV Box MX10", archivo: "tvboxmx10.jpg", precio: 1799, marca: "TechNova", descripcion: "TV Box Android con 4K, acceso a aplicaciones, conectividad WiFi y almacenamiento ampliable.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Elegance Pink", archivo: "smartpink.jpg", precio: 2999, marca: "TechNova Smart", descripcion: "Reloj inteligente color rosa con pantalla HD táctil, registro de llamadas, monitoreo de salud y estilo moderno.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Dynamic Black", archivo: "smartblack.jpg", precio: 2999, marca: "TechNova Smart", descripcion: "Smartwatch color negro con diseño premium, monitoreo deportivo, llamadas Bluetooth y resistencia al agua IP67.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Duo Pack", archivo: "smartduo.jpg", precio: 3999, marca: "TechNova Smart", descripcion: "Combo de dos smartwatches (negro y rosa). Ideal para pareja, sincronización móvil, notificaciones y control fitness.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Vision White", archivo: "smartwhite.jpg", precio: 2499, marca: "TechNova Smart", descripcion: "Reloj inteligente color blanco con pantalla de alta resolución, control de ritmo cardíaco y múltiples modos deportivos.", ubicaciones: ["Veracruz", "Queretaro"] },
  { nombre: "Smartwatch Silver Edge", archivo: "smartsilver.jpg", precio: 2499, marca: "TechNova Smart", descripcion: "Smartwatch con acabado plateado, interfaz digital moderna, monitoreo del sueño y conectividad Bluetooth estable.", ubicaciones: ["Veracruz", "Queretaro"] }
];


// Número de WhatsApp de la tienda (ejemplo)
const numeroWhatsApp = "7207298015"; // Cambia este número por el de tu tienda
const ubicacionUsuario = "Queretaro";


// Referencias DOM
const catalogoDiv = document.getElementById("catalogo");
const modal = document.getElementById("modal");
const cerrar = document.querySelector(".cerrar");
const modalImg = document.getElementById("modal-img");
const modalNombre = document.getElementById("modal-nombre");
const modalMarca = document.getElementById("modal-marca");
const modalPrecio = document.getElementById("modal-precio");
const modalDescripcion = document.getElementById("modal-descripcion"); // párrafo de descripción
const modalEstado = document.getElementById("modal-estado"); // estado disponible/agotado
const btnCarrito = document.getElementById("btn-carrito"); // botón de carrito

// Función validar imagen
function validarImagen(nombreArchivo){
  const img = new Image();
  img.src = `imagenes/${nombreArchivo}`;
  img.onerror = () => { img.src = "https://via.placeholder.com/200x160?text=Sin+imagen"; };
  return img.src;
}

// Crear catálogo
productos.forEach(producto => {
  const div = document.createElement("div");
  div.classList.add("producto");
  div.setAttribute("data-aos","zoom-in");
  div.innerHTML = `
    <img src="${validarImagen(producto.archivo)}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <button>Ver Detalle</button>
  `;
  catalogoDiv.appendChild(div);

  // Evento click para mostrar modal
  div.querySelector("button").addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = validarImagen(producto.archivo);
    modalNombre.textContent = producto.nombre;
    modalMarca.textContent = `Marca: ${producto.marca}`;
    modalPrecio.textContent = `Precio: $${producto.precio}`;
    modalDescripcion.textContent = producto.descripcion || "Sin descripción disponible";
   // Revisar si el producto está disponible en la ciudad del usuario
if(producto.ubicaciones && producto.ubicaciones.includes(ubicacionUsuario)){
    modalEstado.textContent = "🟢 Disponible en tu ciudad";
} else {
    modalEstado.textContent = "🔴 Agotado en tu ciudad por el momento";
}

    // Botón carrito → envía mensaje a WhatsApp
   btnCarrito.onclick = () => {
  // Mensaje individual para WhatsApp con el producto actual
  const mensaje = `¡Hola! Quiero este producto: ${producto.nombre} - Precio: $${producto.precio}`;

  // Número de WhatsApp de la tienda con lada internacional
  const telefono = "5217207298015";

  // Abrir WhatsApp con el mensaje listo para enviar
  window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");

  // Aquí podrías opcionalmente mantener el carrito visual en la web
  carrito.push(producto); // carrito visual (solo para mostrar en la página)
  console.log(`🛒 Producto agregado al carrito: ${producto.nombre}`);
};
  });
});

// Cerrar modal
cerrar.addEventListener("click", ()=> modal.style.display="none");
window.addEventListener("click", e => { if(e.target==modal) modal.style.display="none"; });

// Animaciones GSAP
if(typeof gsap!=="undefined") gsap.from(".producto",{duration:1,opacity:0,y:50,stagger:0.2});

// Inicializar AOS
if(typeof AOS!=="undefined") AOS.init({duration:1000});

// Partículas tipo circuitos y engranajes
if(typeof particlesJS!=="undefined"){
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": ["#00fff0","#ff00ff","#ffff00"] },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.8 },
      "size": { "value": 3 },
      "line_linked": { "enable": true, "distance": 180, "color": "#fff", "opacity": 0.3, "width": 1 },
      "move": { "enable": true, "speed": 3 }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "repulse" }
      }
    }
  });
}

