// Lista de productos

console.log("✅ Script cargado correctamente");


const productos = [
    { nombre: "Bocina Inteligente Alexa", archivo: "alexaazul.jpg", precio: 2899, marca: "Amazon", descripcion: "Bocina inteligente con asistente Alexa y conexión WiFi.", ubicaciones: ["Queretaro"] },
    { nombre: "Bocina Inteligente Alexa", archivo: "alexaneg.webp", precio: 2699, marca: "Amazon", descripcion: "Bocina inteligente con asistente Alexa y conexión WiFi. Color Negra", ubicaciones: ["Veracruz"] },
    { nombre: "Bocina Inteligente Alexa", archivo: "alexawhi.webp", precio: 2599, marca: "Amazon", descripcion: "Versión blanca de la bocina inteligente Alexa.", ubicaciones: ["Queretaro"] },
    { nombre: "Audífonos Inalámbricos Bluetooth", archivo: "audifazulxia.webp", precio: 799, marca: "Xiaomi", descripcion: "Audífonos inalámbricos con bluetooth 5.0 y cancelación de ruido", ubicaciones: ["Acayucan"] },
    { nombre: "Audífonos Inalámbricos Bluetooth", archivo: "audifelect.webp", precio: 499, marca: "Audio Gen", descripcion: "Audífonos básicos con buena calidad de sonido.", ubicaciones: ["Acayucan"] },
    { nombre: "Audífonos Inalambricos Bluetooth", archivo: "audlen.webp", precio: 799, marca: "Lenovo", descripcion: "Audífonos cómodos con buena duración de batería.",  ubicaciones: ["Acayucan"] },
    { nombre: "Avión y Carro Lego", archivo: "avicar.webp", precio: 599, marca: "Services Gen", descripcion: "Set de avión y carro para niños, armalo tu mismo! Diviertete Aprendiendo!.", ubicaciones: ["Acayucan"] },
    { nombre: "Bocina De Colores", archivo: "bocinacol.webp", precio: 699, marca: "Audio Gen", descripcion: "Bocina portátil con luces LED de colores.", ubicaciones: ["Queretaro"] },
    { nombre: "Cable Ethernet 15M", archivo: "cableteth.webp", precio: 499, marca: "Shawly", descripcion: "Cable de red Ethernet de 15 metros de longitud.", ubicaciones: ["Acayucan"] },
    { nombre: "Cámara De Seguridad HD", archivo: "camarapq.webp", precio: 6999, marca: "Shawly", descripcion: "4 Cámaras de seguridad HD para vigilancia de interiores y exteriores.", ubicaciones: ["Acayucan"] },
    { nombre: "Cartera Rosa De Lujo", archivo: "carteraros.jpg", precio: 499, marca: "Moda Gen", descripcion: "Cartera elegante de color rosa, material de alta calidad.", ubicaciones: ["Acayucan"] },
    { nombre: "Carro Transformers", archivo: "cartrans.webp", precio: 499, marca: "Moda Gen", descripcion: "Figura de carro Transformers para colección.", ubicaciones: ["Acayucan"] },
    { nombre: "Cortadora De Bello Nasal", archivo: "cortadoranar.webp", precio: 599, marca: "Moda Gen", descripcion: "Cortadora eléctrica para bello nasal, segura y eficiente.", ubicaciones: ["Acayucan",] },
    { nombre: "Adaptador Europeo", archivo: "enchufEUR.webp", precio: 149, marca: "Moda Gen", descripcion: "Adaptador de enchufe para tomas europeas.", ubicaciones: ["Acayucan"] },
    { nombre: "Impresora De Código De Barras", archivo: "imprcod.webp", precio: 2599, marca: "Holyhah", descripcion: "Impresora Térmica De Recibos Pos De 80 Mm.", ubicaciones: ["Queretaro",] },
    { nombre: "Tarjeta DDR 1TB", archivo: "kingst.webp", precio: 3499, marca: "Kingston", descripcion: "Memoria RAM DDR de 1TB de alta velocidad.", ubicaciones: ["Queretaro"] },
    { nombre: "Cargador y Lámpara Inteligente Diseño G", archivo: "lampar.webp", precio: 599, marca: "Services Gen", descripcion: "Lámpara con control por app y colores RGB y ademas es Cargador para Iphone.", ubicaciones: ["Queretaro",] },
    { nombre: "Laptop Gamer Victus 15.6", archivo: "lapamdryzen.webp", precio: 24999, marca: "HP", descripcion: "Laptop Gamer Hp Victus 15.6 Ryzen 7 7445hs 16gb Ram 512 Ssd Nvidia Geforce Rtx 4050 6 Gb.", ubicaciones: ["Queretaro",] },
    { nombre: "Lector de Código", archivo: "letcod.webp", precio: 999, marca: "Shawty", descripcion: "Lector de códigos de barras rápido y confiable.", ubicaciones: ["Queretaro"] },
    { nombre: "Lector de Código De Escritorio", archivo: "lectcodesc.webp", precio: 1899, marca: "Shawty", descripcion: "Lector De Código De Barras Inalámbrico con Mini Receptor USB", ubicaciones: ["Queretaro",] },
    { nombre: "Lector de Código", archivo: "letcod2.webp", precio: 1499, marca: "Lozayi", descripcion: "Escáner de códigos de barras inalambrico 1D/2D", ubicaciones: ["Queretaro"] },
    { nombre: "Legos Varios", archivo: "legosc.webp", precio: 599, marca: "Lego", descripcion: "Set de 300Pz Legos para construcción creativa.", ubicaciones: ["Queretaro"] },
    { nombre: "Lentes Inteligentes HD", archivo: "lentesint.webp", precio: 5499, marca: "Smart", descripcion: "Lentes inteligentes con cámara HD integrada.", ubicaciones: ["Queretaro"] },
    { nombre: "Monitor Portátil 15.6", archivo: "mon15.webp", precio: 2999, marca: "GAMER", descripcion: "Monitor portátil Full HD de 15.6 pulgadas.", ubicaciones: ["Queretaro"] },
    { nombre: "Monitor Gamer con pantalla de 21.5/", archivo: "mon21.5.webp", precio: 6999, marca: "Xiaomi", descripcion: "Panel LCD Fast IPS sRGB del 99 % HDR10", ubicaciones: ["Queretaro"] },
    { nombre: "Monitor Gamer G27i/", archivo: "monitorxiao27.webp", precio: 6999, marca: "Xiaomi", descripcion: "Monitor Gamer G27i 27 1920 X 1080 Panel LCD ", ubicaciones: ["Queretaro"] },
    { nombre: "Monitor Gamer Curvo 24.5\"", archivo: "montisams24.webp", precio: 6999, marca: "GAMER", descripcion: "Monitor curvo gamer con diseño ergonómico.", ubicaciones: ["Queretaro"] },
    { nombre: "Mouse Inalámbrico", archivo: "mousein.webp", precio: 499, marca: "GAMER", descripcion: "Mouse inalámbrico ergonómico.", ubicaciones: ["Acayucan"] },
    { nombre: "Navaja Multiusos", archivo: "navajmul.webp", precio: 499, marca: "GAMER", descripcion: "Navaja compacta con múltiples funciones.", ubicaciones: ["Acayucan"] },
    { nombre: "Protector De Cámara", archivo: "protcam.webp", precio: 99, marca: "GAMER", descripcion: "Protector de cámara para dispositivos móviles.", ubicaciones: ["Acayucan"] },
    { nombre: "Punto de Venta Digital", archivo: "puntdig.webp", precio: 15999, marca: "Services Gen", descripcion: "Sistema digital para punto de venta.", ubicaciones: ["Queretaro"] },
    { nombre: "Wireless Repetidor", archivo: "rept.webp", precio: 2499, marca: "Wireless", descripcion: "Repetidor de señal WiFi para mayor cobertura.", ubicaciones: ["Acayucan"] },
    { nombre: "Soporte Para Celular", archivo: "soportcel.webp", precio: 499, marca: "Services Gen", descripcion: "Soporte ajustable para celular, Reistente De Metal.", ubicaciones: ["Acayucan"] },
    { nombre: "Tarjeta SSD 2TB", archivo: "SSD2TB.webp", precio: 5999, marca: "Services Gen", descripcion: "SSD de 2TB para almacenamiento masivo.", ubicaciones: ["Queretaro"] },
    { nombre: "Teclado Mecánico", archivo: "tecl.webp", precio: 1499, marca: "Services Gen", descripcion: "Teclado mecánico retroiluminado.", ubicaciones: ["Queretaro"] },
    { nombre: "Botella Termica Digital", archivo: "termoroj.webp", precio: 199, marca: "Services Gen", descripcion: "Botella térmica de acero inoxidable.", ubicaciones: ["Acayucan"] },
    { nombre: "Impresora Multifuncional", archivo: "imprcan.webp", precio: 6599, marca: "Canon", descripcion: "Multifuncional Canon Inalámbrica G3110 Color Negro", ubicaciones: ["Queretaro"] },
    { nombre: "Impresora Multifuncional", archivo: "impreps.webp", precio: 9999, marca: "Epson", descripcion: "Impresora Epson Ecotank Multifuncional a Color L5590", ubicaciones: ["Queretaro"] },
    { nombre: "Pc Gaming Computadora", archivo: "pcgam.webp", precio: 20999, marca: "Gamer", descripcion: "Xtreme Pc Gaming Computadora Intel Core I5 12400 16gb Ssd 500gb", ubicaciones: ["Queretaro"] },
    { nombre: "Turbo Cargador 67w Super Cargador", archivo: "cargrap.webp", precio: 399, marca: "Jeeyee", descripcion: "Turbo Cargador 67w Super Cargador Rápida Con Cable Tipo C", ubicaciones: ["Queretaro"] },
    { nombre: "Router Wifi 2.4GHZ 300Mbps", archivo: "routlink.webp", precio: 3999, marca: "Tp-Link", descripcion: "TP-Link TL-WR840N Router Wifi N 2.4GHZ 300Mbps 4 puertos", ubicaciones: ["Queretaro"] },
    { nombre: "Batería Portátil 38600mah Pd22.5w/3a", archivo: "PWRBAN.webp", precio: 1499, marca: "Hyboer", descripcion: "Batería Portátil Carga Rápida Hyboer Dx203 Con Tipo C/lt Cable, 7 Puertos De Salida Y 2 De Entrada,con Linterna Led", ubicaciones: ["Acayucan"] },
    { nombre: "Monitor HP P24V G5", archivo: "monhp23.8.webp", precio: 3899, marca: "HP", descripcion: "Monitor HP P24V G5 P24 G5 P24V 23.8 Color Negro", ubicaciones: ["Queretaro"] },
    { nombre: "Multicontacto De 8 Tomas", archivo: "multi8.webp", precio: 499, marca: "Boparte", descripcion: "Multicontacto De 8 Tomas Con Usb 1.2M", ubicaciones: ["Queretaro"] },
    { nombre: "Extension Cca Uso Rudo", archivo: "extrud.webp", precio: 1499, marca: "Boparte", descripcion: "Extension Cca Uso Rudo 15 Metros 2x#12", ubicaciones: ["Queretaro"] },
    { nombre: "Maquina De afeitar", archivo: "rasb.webp", precio: 499, marca: "Gen", descripcion: "Máquina De Afeitar Profesional Para Afeitar Barba Y Pelo Color Bronze Dragon", ubicaciones: ["Acayucan"] },
    { nombre: "Cartera Menbense", archivo: "cartc.webp", precio: 399, marca: "Menbense", descripcion: "Cartera Menbense Style Itali Color Café Liso", ubicaciones: ["Acayucan"] },
    { nombre: "Drone Con Dual Camara 4k", archivo: "dronp.webp", precio: 1499, marca: "Gen", descripcion: "Drone Con Dual Camara 4k Kimh  Drone Portatil Plegable Alta Definicion Control Remoto Via App 2.4ghz Giro 360 Con 1 Bateria", disponible: true },
    { nombre: "Cartera Menbense", archivo: "cargr.webp", precio: 399, marca: "Menbense", descripcion: "Cartera Menbense Style Itali Color Gris Liso", ubicaciones: ["Acayucan"] },
    { nombre: "Mochila Deportiva", archivo: "maric.webp", precio: 399, marca: "Oxford", descripcion: "Mochila Hombre Oxford Deportivo Multifuncional Bandolera",ubicaciones: ["Acayucan"] },
    { nombre: "Maquina De afeitar", archivo: "rasvia.webp", precio: 399, marca: "Gen", descripcion: "Kit Peluquería Trimmer Máquina Barba Cabello Viaje Color Black", ubicaciones: ["Acayucan"] },
    { nombre: "Espumador De Leche Y Café", archivo: "espum.webp", precio: 199, marca: "Gen", descripcion: "Espumador De Leche Y Café Batidores Electricos Color Blanco", ubicaciones: ["Acayucan"] },
    { nombre: "Auriculares inalámbricos", archivo: "audros.webp", precio: 499, marca: "Gen", descripcion: "Auriculares inalámbricos E7S con Bluetooth 5,0, cascos de sonido HIFI sin pérdidas, Mini auriculares deportivos TWS para teléfonos inteligentes", ubicaciones: ["Acayucan"] },
    { nombre: "Auriculares inalámbricos", archivo: "audsen.jpg", precio: 399, marca: "Gen", descripcion: "Auriculares inalámbricos con Bluetooth sonido HIFI sin pérdidas", ubicaciones: ["Acayucan"] },
    { nombre: "Bolso de hombro para mujer", archivo: "bolneg.jpg", precio: 499, marca: "Fashionn", descripcion: "Bolso de hombro para mujer, bolsos elegantes de cuero de PU para mujer", ubicaciones: ["Acayucan"] },
    { nombre: "Alfombrilla de ratón RGB de lujo", archivo: "alf.webp", precio: 999, marca: "Oxford", descripcion: "Alfombrilla de ratón RGB de lujo, alfombrillas LED para juegos, accesorios para PC", ubicaciones: ["Queretaro"] },
    { nombre: "Alfombrilla de ratón RGB de lujo", archivo: "alf1.webp", precio: 999, marca: "Oxford", descripcion: "Alfombrilla de ratón RGB de lujo, alfombrillas LED para juegos, accesorios para PC", ubicaciones: ["Queretaro"] },
    { nombre: "Audifonos Airdots 2", archivo: "xiacaj.webp", precio: 799, marca: "Xiaomi", descripcion: "Xiaomi Redmi Airdots 2 Auriculares inalámbricos con Bluetooth con micrófono Auriculares Airdots 2", ubicaciones: ["Queretaro"] },
    { nombre: "Cable para Iphone", archivo: "cabiph.jpg", precio: 169, marca: "Iphone", descripcion: "Cable para iPhone USB a Lightning [MFi Certificado]", ubicaciones: ["Acayucan"] },
    { nombre: "Juego de urinario para coche", archivo: "urin.jpg", precio: 299, marca: "Gen", descripcion: "Cubo para orina de pie al aire libre, viaje de emergencia, portátil, reutilizable, retráctil, inodoro para acampar, fuga de orina, 1/2", ubicaciones: ["Acayucan"] },

   { 
  nombre: "Cargador y cable USB-C",
  archivo: "cabc.webp",
  precio: 179,
  marca: "Oxford",
  descripcion: "Cargador de pared con salida USB-C y cable resistente.",
  ubicaciones: ["Acayucan"]
  },

  { 
  nombre: "Cargador rápido USB-C con cable",
  archivo: "cabipho.webp", // dime cómo está nombrada tu imagen y lo ajusto
  precio: 199,
  marca: "Oxford",
  descripcion: "Cargador de pared con salida USB-C y cable incluido, compatible con carga rápida para diversos modelos.",
  ubicaciones: ["Acayucan"]
},

{ 
  nombre: "Foco LED RGB con bocina Bluetooth",
  archivo: "boci.jpg", // cambiar según tu archivo real
  precio: 399, // Falta precio ✅
  marca: "Oxford",
  descripcion: "Foco inteligente con luz RGB y bocina Bluetooth integrada, control remoto incluido.",
  ubicaciones: ["Acayucan"]
},

{ 
  nombre: "Smartwatch Gold Black",
  archivo: "relbl.jpg", // cambiar según tu archivo real
  precio: 2499, // Falta precio ✅
  marca: "Smart",
  descripcion: "Reloj inteligente estilo moderno, con monitoreo básico de actividad y notificaciones.",
  ubicaciones: ["Queretaro"]
},



    { nombre: "Titanic Lego", archivo: "titanicleg.webp", precio: 699, marca: "Services Gen", descripcion: "Modelo de barco Titanic en miniatura, Armalo tu mismo!.", ubicaciones: ["Acayucan"] },



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

