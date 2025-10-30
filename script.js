// Lista de productos
console.log("✅ Script cargado correctamente");

const productos = [
    { nombre: "Bocina Inteligente Alexa", archivo: "alexaazul.jpg", precio: 2899, marca: "Amazon", descripcion: "Bocina inteligente con asistente Alexa y conexión WiFi.", disponible: true },
    { nombre: "Bocina Inteligente Alexa", archivo: "alexawhi.webp", precio: 2599, marca: "Amazon", descripcion: "Versión blanca de la bocina inteligente Alexa.", disponible: true },
    { nombre: "Audífonos Inalámbricos Bluetooth", archivo: "audifazulxia.webp", precio: 789, marca: "Xiaomi", descripcion: "Audífonos inalámbricos con bluetooth 5.0 y cancelación de ruido.", disponible: true },
    { nombre: "Audífonos Inalámbricos Bluetooth", archivo: "audifelect.webp", precio: 499, marca: "Audio Gen", descripcion: "Audífonos básicos con buena calidad de sonido.", disponible: true },
    { nombre: "Audífonos Inalambricos Bluetooth", archivo: "audlen.webp", precio: 789, marca: "Lenovo", descripcion: "Audífonos cómodos con buena duración de batería.", disponible: true },
    { nombre: "Avión y Carro", archivo: "avicar.webp", precio: 599, marca: "Services Gen", descripcion: "Set de avión y carro para niños, ideal para regalar.", disponible: true },
    { nombre: "Bocina De Colores", archivo: "bocinacol.webp", precio: 699, marca: "Audio Gen", descripcion: "Bocina portátil con luces LED de colores.", disponible: true },
    { nombre: "Cable Ethernet 15M", archivo: "cableteth.webp", precio: 499, marca: "Shawly", descripcion: "Cable de red Ethernet de 15 metros de longitud.", disponible: true },
    { nombre: "Cámara De Seguridad HD", archivo: "camarapq.webp", precio: 6999, marca: "Shawly", descripcion: "Cámara de seguridad HD para vigilancia de interiores y exteriores.", disponible: true },
    { nombre: "Cartera Rosa De Lujo", archivo: "carteraros.jpg", precio: 499, marca: "Moda Gen", descripcion: "Cartera elegante de color rosa, material de alta calidad.", disponible: true },
    { nombre: "Carro Transformers", archivo: "cartrans.webp", precio: 499, marca: "Moda Gen", descripcion: "Figura de carro Transformers para colección.", disponible: true },
    { nombre: "Cortadora De Bello Nasal", archivo: "cortadoranar.webp", precio: 599, marca: "Moda Gen", descripcion: "Cortadora eléctrica para bello nasal, segura y eficiente.", disponible: true },
    { nombre: "Adaptador Europeo", archivo: "enchufEUR.webp", precio: 149, marca: "Moda Gen", descripcion: "Adaptador de enchufe para tomas europeas.", disponible: true },
    { nombre: "Impresora De Código De Barras", archivo: "imprcod.webp", precio: 2599, marca: "Holyhah", descripcion: "Impresora Térmica De Recibos Pos De 80 Mm.", disponible: true },
    { nombre: "Tarjeta DDR 1TB", archivo: "kingst.webp", precio: 3499, marca: "Kingston", descripcion: "Memoria RAM DDR de 1TB de alta velocidad.", disponible: true },
    { nombre: "Lámpara Inteligente Diseño G", archivo: "lampar.webp", precio: 599, marca: "Services Gen", descripcion: "Lámpara con control por app y colores RGB.", disponible: true },
    { nombre: "Laptop Gamer HP Victus 15.6", archivo: "lapamdryzen.webp", precio: 24999, marca: "HP", descripcion: "Laptop gamer con procesador Ryzen y gráficos potentes.", disponible: true },
    { nombre: "Lector de Código", archivo: "letcod.webp", precio: 999, marca: "Shawty", descripcion: "Lector de códigos de barras rápido y confiable.", disponible: true },
    { nombre: "Lector de Código De Escritorio", archivo: "lectcodesc.webp", precio: 1899, marca: "Shawty", descripcion: "Lector De Código De Barras Inalámbrico con Mini Receptor USB", disponible: true },
    { nombre: "Lector de Código", archivo: "letcod2.webp", precio: 1499, marca: "Lozayi", descripcion: "Escáner de códigos de barras inalambrico 1D/2D", disponible: true },
    { nombre: "Legos", archivo: "legosc.webp", precio: 599, marca: "Lego", descripcion: "Set de Legos para construcción creativa.", disponible: true },
    { nombre: "Lentes Inteligentes HD", archivo: "lentesint.webp", precio: 5499, marca: "Smart", descripcion: "Lentes inteligentes con cámara HD integrada.", disponible: true },
    { nombre: "Monitor Portátil 15.6", archivo: "mon15.webp", precio: 2999, marca: "GAMER", descripcion: "Monitor portátil Full HD de 15.6 pulgadas.", disponible: true },
    { nombre: "Monitor Gamer con pantalla de 21.5/", archivo: "mon21.5.webp", precio: 6999, marca: "Xiaomi", descripcion: "Panel LCD Fast IPS sRGB del 99 % HDR10", disponible: true },
    { nombre: "Monitor Gamer 27/", archivo: "monitorxiao27.webp", precio: 6999, marca: "Xiaomi", descripcion: "Monitor Gamer G27i 27 1920 X 1080 Panel LCD ", disponible: true },
    { nombre: "Monitor Gamer Curvo 24.5\"", archivo: "montisams24.webp", precio: 6999, marca: "GAMER", descripcion: "Monitor curvo gamer con diseño ergonómico.", disponible: true },
    { nombre: "Mouse Inalámbrico", archivo: "mousein.webp", precio: 499, marca: "GAMER", descripcion: "Mouse inalámbrico ergonómico.", disponible: true },
    { nombre: "Navaja Multiusos", archivo: "navajmul.webp", precio: 499, marca: "GAMER", descripcion: "Navaja compacta con múltiples funciones.", disponible: true },
    { nombre: "Protector De Cámara", archivo: "protcam.webp", precio: 99, marca: "GAMER", descripcion: "Protector de cámara para dispositivos móviles.", disponible: true },
    { nombre: "Punto de Venta Digital", archivo: "puntdig.webp", precio: 15999, marca: "Services Gen", descripcion: "Sistema digital para punto de venta.", disponible: true },
    { nombre: "Wireless Repetidor", archivo: "rept.webp", precio: 2499, marca: "Wireless", descripcion: "Repetidor de señal WiFi para mayor cobertura.", disponible: true },
    { nombre: "Soporte Para Celular", archivo: "soportcel.webp", precio: 499, marca: "Services Gen", descripcion: "Soporte ajustable para celular, Reistente De Metal.", disponible: true },
    { nombre: "Tarjeta SSD 2TB", archivo: "SSD2TB.webp", precio: 5999, marca: "Services Gen", descripcion: "SSD de 2TB para almacenamiento masivo.", disponible: true },
    { nombre: "Teclado Mecánico", archivo: "tecl.webp", precio: 1499, marca: "Services Gen", descripcion: "Teclado mecánico retroiluminado.", disponible: true },
    { nombre: "Botella Termica Digital", archivo: "termoroj.webp", precio: 199, marca: "Services Gen", descripcion: "Botella térmica de acero inoxidable.", disponible: true },
    { nombre: "Impresora Multifuncional", archivo: "imprcan.webp", precio: 6599, marca: "Canon", descripcion: "Multifuncional Canon Inalámbrica G3110 Color Negro", disponible: true },
    { nombre: "Impresora Multifuncional", archivo: "impreps.webp", precio: 9999, marca: "Epson", descripcion: "Impresora Epson Ecotank Multifuncional a Color L5590", disponible: true },
    { nombre: "Pc Gaming Computadora", archivo: "pcgam.webp", precio: 20999, marca: "Gamer", descripcion: "Xtreme Pc Gaming Computadora Intel Core I5 12400 16gb Ssd 500gb", disponible: true },
    { nombre: "Turbo Cargador 67w Super Cargador", archivo: "cargrap.webp", precio: 399, marca: "Jeeyee", descripcion: "Turbo Cargador 67w Super Cargador Rápida Con Cable Tipo C", disponible: true },
    { nombre: "Tarjeta SSD 1TB", archivo: "ssd1tb.webp", precio: 2999, marca: "Kingston", descripcion: "Unidad Ssd Interno Kingston Nv3 1tb M.2 Nvme 4.0 6000mb/s", disponible: true },
    { nombre: "Router Wifi 2.4GHZ 300Mbps", archivo: "routlink.webp", precio: 5999, marca: "Tp-Link", descripcion: "TP-Link TL-WR840N Router Wifi N 2.4GHZ 300Mbps 4 puertos", disponible: true },
    { nombre: "Batería Portátil 38600mah Pd22.5w/3a", archivo: "PWRBAN.webp", precio: 1499, marca: "Hyboer", descripcion: "Batería Portátil Carga Rápida Hyboer Dx203 Con Tipo C/lt Cable, 7 Puertos De Salida Y 2 De Entrada,con Linterna Led", disponible: true },
    { nombre: "Monitor HP P24V G5", archivo: "monhp23.8.webp", precio: 3899, marca: "HP", descripcion: "Monitor HP P24V G5 P24 G5 P24V 23.8 Color Negro", disponible: true },
    { nombre: "Multicontacto De 8 Tomas", archivo: "multi8.webp", precio: 499, marca: "Boparte", descripcion: "Multicontacto De 8 Tomas Con Usb 1.2M", disponible: true },
    { nombre: "Extension Cca Uso Rudo", archivo: "extrud.webp", precio: 1499, marca: "Boparte", descripcion: "Extension Cca Uso Rudo 15 Metros 2x#12", disponible: true },


    { nombre: "Titanic", archivo: "titanicleg.webp", precio: 699, marca: "Services Gen", descripcion: "Modelo de barco Titanic en miniatura.", disponible: true }
];

// Número de WhatsApp de la tienda (ejemplo)
const numeroWhatsApp = "7207298015"; // Cambia este número por el de tu tienda


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
    modalEstado.textContent = producto.disponible ? "🟢 Disponible" : "🔴 Agotado";

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