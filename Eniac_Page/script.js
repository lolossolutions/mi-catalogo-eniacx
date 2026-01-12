/* ========== script.js - ENIACX PRO (Login mejorado + MENÚ) ========== */
document.addEventListener('DOMContentLoaded', () => {

  /* ======== RUTA DEL CATÁLOGO ======== */
  const catalogPath = "../catalogo/catalogo.html";

  /* ========== FUNCIONALIDAD DEL MENÚ SUPERIOR ========== */
  const navLinks = document.querySelectorAll(".nav ul li a");

  navLinks.forEach(a => {
      if(a.textContent.includes("Catálogo")){
          a.addEventListener("click", (e)=>{
              e.preventDefault();
              window.open(catalogPath, "_blank");
          });
      }
      if(a.textContent.includes("Ventas a profesionales")){
          a.addEventListener("click", (e)=>{
              e.preventDefault();
              window.open("https://wa.me/527207298015?text=Hola,%20quiero%20información%20de%20ventas%20profesionales", "_blank");
          });
      }
      if(a.textContent.includes("Ayuda")){
          a.addEventListener("click", (e)=>{
              e.preventDefault();
              alert("Centro de ayuda próximamente disponible.");
          });
      }
      if(a.textContent.includes("Promociones")){
          a.addEventListener("click", (e)=>{
              e.preventDefault();
              alert("Las promociones estarán activas próximamente.");
          });
      }
      if(a.textContent.includes("Buen Fin")){
          a.addEventListener("click", (e)=>{
              e.preventDefault();
              alert("Ofertas de Buen Fin disponibles próximamente.");
          });
      }
      if(a.textContent.includes("Departamentos")){
          a.addEventListener("click", (e)=>{
              e.preventDefault();
              alert("Departamentos será activado más adelante.");
          });
      }
  });

  /* ======== BOTÓN VER CATÁLOGO (HERO) ======== */
  const btnCatalog = document.getElementById("btnCatalog");
  if(btnCatalog){
      btnCatalog.addEventListener("click", () => {
          window.open(catalogPath, "_blank");
      });
  }

  /* ======== BOTÓN CATÁLOGO COMPLETO (DEBAJO DEL IFRAME) ======== */
  const btnCatalogoReal = document.getElementById("btnCatalogoReal");
  if(btnCatalogoReal){
      btnCatalogoReal.addEventListener("click", () => {
          window.open(catalogPath, "_blank");
      });
  }

  /* ======== BOTÓN CONTACTO PROFESIONAL ======== */
  const btnContact = document.getElementById("btnContact");
  if(btnContact){
      btnContact.addEventListener("click", () => {
          window.open("https://wa.me/527207298015?text=Hola,%20quiero%20contacto%20profesional", "_blank");
      });
  }

  /* ---------- Datos ---------- */
  const PRODUCTS = [
    {id:1,name:'Router Gigabit AC1200',price:1299,stock:12,desc:'Router dual-band Gigabit',img:''},
    {id:2,name:'Terminal POS Android',price:3899,stock:5,desc:'Terminal Android 10" para ventas',img:''},
    {id:3,name:'Switch 24 Puertos',price:2200,stock:8,desc:'Switch administrable 24 puertos',img:''},
    {id:4,name:'Memoria SSD 1TB',price:1099,stock:20,desc:'SSD NVMe 1TB',img:''},
    {id:5,name:'Cámara IP 4K',price:2499,stock:7,desc:'Cámara IP 4K con visión nocturna',img:''},
    {id:6,name:'Sensor de movimiento',price:349,stock:30,desc:'Sensor PIR con alcance 10m',img:''},
    {id:7,name:'Cable UTP Cat6 100m',price:499,stock:50,desc:'Bobina Cat6 100m',img:''},
    {id:8,name:'Licencia POS',price:899,stock:100,desc:'Licencia de software para POS',img:''}
  ];

  /* ---------- Elementos ---------- */
  const grid = document.getElementById('productGrid');
  const resultsInfo = document.getElementById('resultsInfo');
  const searchInput = document.getElementById('searchInput');
  const doSearchBtn = document.getElementById('doSearch');
  const cartCountEl = document.getElementById('cartCount');
  const toast = document.getElementById('toast');
  const loginModal = document.getElementById('loginModal');
  const openLogin = document.getElementById('openLogin');
  const closeLogin = document.getElementById('closeLogin');
  const doLogin = document.getElementById('doLogin');
  const locBtn = document.getElementById('locBtn');
  const locText = document.getElementById('locText');
  const waBtn = document.getElementById('waBtn');
  const themeToggle = document.getElementById('themeToggle');

  /* ---------- Estado ---------- */
  let cart = JSON.parse(localStorage.getItem('eniac_cart') || '[]');
  let city = localStorage.getItem('eniac_city') || null;
  let cartCount = cart.length;

  /* ---------- Helpers ---------- */
  function formatPrice(n){ return n.toLocaleString('es-MX', {style:'currency', currency:'MXN'}); }
  function showToast(msg, ms = 1500){
    if(!toast) return console.log(msg);
    toast.textContent = msg;
    toast.style.opacity = '1';
    setTimeout(()=> toast.style.opacity = '0', ms);
  }

  /* ---------- LOGIN ---------- */
  const STORAGE_USER_KEY = 'eniac_user_email';

  (function ensureRememberCheckbox(){
    try {
      const modalGrid = loginModal && loginModal.querySelector('.modal-grid');
      if(modalGrid && !document.getElementById('rememberMe')) {
        const wrapper = document.createElement('div');
        wrapper.style.margin = "8px 0";
        wrapper.innerHTML = `
          <label style="display:flex;align-items:center;gap:8px;font-size:0.95rem;color:#333">
            <input id="rememberMe" type="checkbox" />
            Recordarme en este dispositivo
          </label>
        `;
        const actions = modalGrid.querySelector('.modal-actions');
        modalGrid.insertBefore(wrapper, actions);
      }
    } catch(err){ /* noop */ }
  })();

  function isValidEmail(e){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(e).toLowerCase());
  }

  function getLocalUser(){
    return localStorage.getItem(STORAGE_USER_KEY) || null;
  }
  function setLocalUser(email){
    if(email) localStorage.setItem(STORAGE_USER_KEY, email);
    else localStorage.removeItem(STORAGE_USER_KEY);
  }

  function shortNameFromEmail(email){
    if(!email) return '';
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function updateHeaderForUser(){
    const stored = getLocalUser();
    if(stored){
      const short = shortNameFromEmail(stored);
      openLogin.textContent = `Hola, ${short}`;
      openLogin.addEventListener('click', ()=> {
        const out = confirm(`Cerrar sesión de ${stored}?`);
        if(out){
          setLocalUser(null);
          location.reload();
        }
      });
    } else {
      openLogin.textContent = 'Iniciar sesión';
      openLogin.addEventListener('click', openLoginShowModal);
    }
  }

  function openLoginShowModal(){
    if(!loginModal) return;
    loginModal.style.display = 'flex';
    loginModal.setAttribute('aria-hidden', 'false');
  }

  openLogin.addEventListener('click', openLoginShowModal);
  closeLogin.addEventListener('click', ()=> loginModal.style.display = 'none');

  doLogin.addEventListener('click', ()=> {
    const emailInput = document.getElementById('email');
    const pwInput = document.getElementById('password');
    const remember = document.getElementById('rememberMe');

    const email = emailInput.value.trim();
    const pw = pwInput.value;

    if(!email){ showToast("Introduce tu correo"); return; }
    if(!isValidEmail(email)){ showToast("Correo inválido"); return; }
    if(pw.length < 4){ showToast("Contraseña muy corta"); return; }

    showToast("Sesión iniciada ✔");

    if(remember.checked) setLocalUser(email);
    else setLocalUser(null);

    loginModal.style.display = 'none';
    updateHeaderForUser();
  });

  if(getLocalUser()) updateHeaderForUser();

  /* ---------- Render Productos ---------- */
  function renderProducts(list = PRODUCTS, query = ''){
    if(!grid) return;
    grid.innerHTML = '';
    if(list.length === 0){
      resultsInfo.textContent = query ? `No encontramos "${query}"` : 'Sin productos';
      return;
    }
    resultsInfo.textContent = query ? 
      `Mostrando ${list.length} resultados para "${query}"` :
      `Mostrando ${list.length} productos`;

    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product';
      card.innerHTML = `
        <div class="thumb">
          <div class="badge">${p.stock} en stock</div>
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="title">${p.name}</div>
        <div class="desc">${p.desc}</div>
        <div class="meta">
          <div class="price">${formatPrice(p.price)}</div>
          <button class="add" data-id="${p.id}">Agregar</button>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function search(q){
    const ql = q.trim().toLowerCase();
    if(!ql) return renderProducts(PRODUCTS);
    const res = PRODUCTS.filter(p =>
      (p.name + " " + p.desc).toLowerCase().includes(ql)
    );
    renderProducts(res, q);
  }

  doSearchBtn.addEventListener("click", ()=> search(searchInput.value));
  searchInput.addEventListener("keypress", e=>{
    if(e.key === "Enter") search(searchInput.value);
  });

  /* ---------- Carrito ---------- */
  function updateCartUI(){
    cartCountEl.textContent = cart.length;
    localStorage.setItem("eniac_cart", JSON.stringify(cart));
  }

  document.addEventListener("click", e=>{
    const add = e.target.closest(".add");
    if(add){
      const id = Number(add.dataset.id);
      const p = PRODUCTS.find(x => x.id === id);
      cart.push(p);
      updateCartUI();
      showToast("Producto agregado ✔");
    }
  });

  /* ---------- Ubicación ---------- */
  locBtn.addEventListener("click", ()=>{
    const c = prompt("Escribe tu ciudad");
    if(c){
      city = c;
      locText.textContent = c;
      localStorage.setItem("eniac_city", c);
    }
  });

  if(!city){ city = "México"; locText.textContent = "México"; }

  /* ---------- WhatsApp ------- */
  waBtn.addEventListener("click", ()=> {
    window.open("https://wa.me/527207298015", "_blank");
  });

  /* ---------- Tema ---------- */
  themeToggle.addEventListener("click", ()=>{
    document.documentElement.classList.toggle("dark");
  });

  renderProducts();
  updateCartUI();

  console.log("✅ ENIACX PRO cargado con MENÚ activado");
});
