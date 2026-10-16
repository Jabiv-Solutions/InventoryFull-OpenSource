/* =========================================================================
 ______ _       _____  _____ __   _  _____ ____  _  _   _____  ______ _      ______  _____ _______ _____  ______  _____ 
 |  ____| |     |  __ \|_   _| \ | |/ ____/ __ \| \| |  |  __ \|  ____| |    |  ____|/ ____|__   __|  __ \|  ____|/ ____|
 | |__  | |     | |__) | | | |  \| | |   | |  | | .` |  | |  | | |__  | |    | |__  | (___    | |  | |__) | |__  | (___  
 |  __| | |     |  _  /  | | | . ` | |   | |  | | |\ |  | |  | |  __| | |    |  __|  \___ \   | |  |  _  /|  __|  \___ \ 
 | |____| |____ | | \ \ _| |_| |\  | |___| |__| | | \|  | |__| | |____| |____| |____ ____) |  | |  | | \ \| |____ ____) |
 |______|______||_|  \_\_____|_| \_|\_____\____/|_|\__|  |_____/|______|______|______|_____/   |_|  |_|  \_\______|_____/

                                                                       
=============================================================================

   [ESCENA: 2:00 AM. La consola del navegador está llena de letras rojas. 
    Un 'Uncaught TypeError: Cannot read properties of null (reading 'value')' 
    destella furiosamente.]

   JABIV (Mirando el archivo script.js con los ojos llorosos):
   
         .---.      
        ( >_< )     "¡No puede ser! Juro que puse el `document.getElementById` 
         )   (       bien. ¿Por qué la consola dice que lee 'null' 
        (  _  )      si el elemento está ahí mismo en el HTML?!"
         `---'       
        _/___\_     
       /       \    

   LIA (Apareciendo con un café en la mano y cara de decepción):

          ^_____^     
         ( ¬_¬ )    "Ay, genio... Estás intentando llamar a una función del DOM 
          (  -  )      antes de que el evento `pywebviewready` termine de cargar 
           |   |       y el script se ejecuta más rápido que la estructura HTML."
          /|___|\      
         /       \    

   JABIV (Tratando de justificar su desastre):
   
         .---.      
        ( T_T )     "¡Pero si le puse 'async' y 'await' a todo lo que se mueve! 
         )   (       ¡El JavaScript debería tener piedad de mí!"
        (  _  )      
         `---'      

   LIA (Suspirando profundamente y acercándose al monitor):

          ^_____^     
         ( º - º )    "El JavaScript no tiene piedad, Jabiv. Solo tiene callbacks 
          (  ~  )      ininfinitos y promesas que rompen tu salud mental. 
           |   |       Ponle un `?.` (optional chaining) a esa consulta 
          /|___|\      o te rompo el teclado por la mitad."
         /       \    

   JABIV (Escribiendo el código con las manos temblando):
   
         .---.      
        ( O_O )     "Listo, listo... Ya le puse el signo de interrogación. 
         )   (       Por favor, consola de Google Chrome, no me hagas esto hoy."
        (  _  )      
         `---'      

   LIA (Cruzando los brazos con una sonrisa de suficiencia):
   
          ^_____^     
         ( ^ _ ^ )    "¿Ves? Menos llanto y más tipado seguro en el cliente. 
          (  u  )      Ahora guarda los cambios, recarga la vista 
           |   |       y cruza los dedos para que el POS no explote."
          /|___|\      
         /       \    

============================================================================= */
/* =========================================================================
  _____     _____ _______ ______    ___  
 |  __ \ / \ |  __ \__   __|  ____|  |__ \ 
 | |__) / _ \| |__) | | |  | |__        ) |
 |  ___/ ___ \  _  /  | |  |  __|      / / 
 | |  / /   \ \ | \ \  | |  | |____    / /_ 
 |_| /_/     \_\_|  \_\|_|  |______|  |____|
                                            
=============================================================================

   [ESCENA: 4:00 AM. La pestaña de la consola de desarrollo tiene 45 errores 
    en rojo brillante. Jabiv está al borde de un colapso nervioso.]

   JABIV (Mirando un `Uncaught (in promise)` con cara de terror):
   
         .---.      
        ( O_O )     "¡Lia! ¡Ahora el fetch de pywebview devolvió un objeto vacío! 
         )   (       El JSON se rompió y el carrito del POS se duplicó solo. 
        (  _  )      ¡Los productos fantasmas están apareciendo en la tabla!"
         `---'       
        _/___\_     
       /       \    

   LIA (Escribiendole por Whasap hasta que llegue a la casa):

          ^_____^     
         ( ¬_¬ )    "Claro que se duplicó, genio del mal. 
          (  -  )      Olvidaste vaciar el array `carritoPOS = []` antes 
           |   |       de renderizar de nuevo. Estás acumulando eventos 
          /|___|\      en el DOM como si no hubiera un mañana."
         /       \    

   JABIV (Juntando las palmas de las manos en señal de ruego):
   
         .---.      
        ( T_T )     "¡Odio el asincronismo! ¡Odio que todo dependa de promesas! 
         )   (       ¿Por qué el JavaScript no puede ser secuencial y bonito 
        (  _  )      como en mis sueños de primer año de programación?"
         `---'      

   LIA (Con una sonrisa irónica en video llamada):

          ^_____^     
         ( º - º )    "Porque la vida real es asíncrona, Jabiv. 
          (  ~  )      Ahora, deja de llorar, ponle un `.catch()` a esa promesa 
           |   |       y asegúrate de que el botón de cobrar limpie el estado 
          /|___|\      antes de que el usuario haga doble clic por desesperación."
         /       \    

   JABIV (Tipeando rápidamente mientras muerde la esquina del escritorio):
   
         .---.      
        ( >_< )     "Listo, async/await controlado, try-catch blindado 
         )   (       y preventDefault en el evento del formulario. 
        (  _  )      Por favor, JS, sé bueno conmigo por una vez en la vida."
         `---'      
        _/___\_     
       /       \    

   LIA (Dándole animos):
   
          ^_____^     
         ( ^ _ ^ )    "¿Ves? Con un poco de miedo y presión psicológica 
          (  u  )      sí que aprendes rápido. Ahora limpia la consola, 
           |   |       guarda el script y a seguir picando código."
          /|___|\      
         /       \    

============================================================================= */
/* ==============================================================================
 * INVENTORY FULL - Sistema ERP y Punto de Venta (POS)
 * Copyright (c) 2026 Jose Andres (Jabiv)
 *
 * Licencia MIT con Atribución Obligatoria.
 * Se debe mantener la autoría original (Jose Andres / Jabiv) y enlaces a redes
 * en cualquier uso, modificación o distribución del código fuente.
 * ============================================================================== */

function formatearMoneda(valor) {
    if (valor == null || isNaN(valor)) return "0,00";
    
    let num = typeof valor === 'number' ? valor : parseFloat(valor);
    if (isNaN(num)) return "0,00";

    let partes = num.toFixed(2).split('.');
    
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return partes.join(',');
}

function limpiarNumero(valorStr) {
    if (!valorStr) return 0;
    let limpio = String(valorStr).trim().toLowerCase();

    if (limpio.endsWith('k')) {
        limpio = limpio.replace('k', '') + '000';
    }

    if (limpio.includes('.') && limpio.includes(',')) {
        limpio = limpio.replace(/\./g, '').replace(',', '.');
    } 
    else if (limpio.includes('.')) {
        const partes = limpio.split('.');
        if (partes.length > 2 || (partes.length === 2 && partes[1].length === 3)) {
            limpio = limpio.replace(/\./g, '');
        }
    } 
    else if (limpio.includes(',')) {
        limpio = limpio.replace(',', '.');
    }
    
    let num = parseFloat(limpio);
    return isNaN(num) ? 0 : num;
}

let configGlobal = { moneda: "$", taxRate: 0.16 };
let productosCache = [];
let inventarioCache = [];
let creditosCache = [];
let carritoPOS = [];
let carritoCompras = [];
let monedaBaseSistema = "$";
let tasasCambioGlobal = { tasa_bs: 36.0, tasa_cop: 4000.0 };
let totalUltimaVentaUSD = 0;
let rolUsuarioActual = 'administracion';
let mostrarCreditosPagadosGlobal = false;
let saldoPendienteCreditoActivoUSD = 0;
let callbackAutorizacionPendiente = null;
let resolverEliminacion = null;

window.addEventListener('pywebviewready', async () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    const hoy = new Date().toISOString().split('T')[0];
    
    const setDateIfExist = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.value = value;
    };

    setDateIfExist('dash-fecha-desde', hoy);
    setDateIfExist('dash-fecha-hasta', hoy);
    setDateIfExist('mov-fecha-desde', hoy);
    setDateIfExist('mov-fecha-hasta', hoy);
    setDateIfExist('finanzas-fecha-desde', hoy);
    setDateIfExist('finanzas-fecha-hasta', hoy);

    try {
        await evaluarModalBienvenidaRedes();
        const estadoInit = await window.pywebview.api.verificar_primer_inicio();
        if (estadoInit.primer_inicio) {
            document.getElementById('modal-primer-inicio')?.classList.remove('hidden');
        } else {
            abrirModalLogin();
        }

        await cargarConfiguracion();
        await cargarTasasMoneda();
        await cargarProductosPOS();
        await cargarDashboard();
        await cargarSelectDescargos();
        await cargarCreditos();
    } catch (err) {
        console.error("Error en la inicialización de pywebview:", err);
    }
});

async function evaluarModalBienvenidaRedes() {
    const welcomeModal = document.getElementById('welcomeModal');
    const btnCloseWelcomeModal = document.getElementById('btnCloseWelcomeModal');
    const btnDontShowAgain = document.getElementById('btnDontShowAgain');

    if (!welcomeModal) return;

    try {
        const data = await window.pywebview.api.gestionar_hola_yadios(null, "GET");
        
        if (!data || data.estado !== 'true') {
            welcomeModal.classList.remove('hidden');
            if (window.lucide) window.lucide.createIcons();
        }
    } catch (err) {
        console.error('Error al consultar holaYadios:', err);
        welcomeModal.classList.remove('hidden');
    }

    if (btnCloseWelcomeModal) {
        btnCloseWelcomeModal.onclick = () => {
            welcomeModal.classList.add('hidden');
        };
    }

    if (btnDontShowAgain) {
        btnDontShowAgain.onclick = async () => {
            try {
                await window.pywebview.api.gestionar_hola_yadios({ estado: 'true' }, "POST");
                welcomeModal.classList.add('hidden');
            } catch (err) {
                console.error('Error al guardar en holaYadios:', err);
                welcomeModal.classList.add('hidden');
            }
        };
    }
}

async function guardarClavesIniciales() {
    const passAdmin = document.getElementById('init-pass-admin').value;
    const passVendedor = document.getElementById('init-pass-vendedor').value;

    if(!passAdmin || !passVendedor) {
        return alert("Por favor complete ambas contraseñas.");
    }

    const res = await window.pywebview.api.configurar_claves_iniciales(passAdmin, passVendedor);
    if(res.success) {
        alert("¡Contraseñas configuradas correctamente!");
        document.getElementById('modal-primer-inicio').classList.add('hidden');
        abrirModalLogin();
    } else {
        alert("Error: " + res.error);
    }
}

function abrirModalLogin() {
    document.getElementById('modal-login')?.classList.remove('hidden');
}

async function intentarLogin() {
    const rol = document.getElementById('login-rol-select').value;
    const password = document.getElementById('login-password').value;

    const res = await window.pywebview.api.validar_login_rol(rol, password);
    if(res.success) {
        seleccionarRol(rol);
        document.getElementById('login-password').value = '';
    } else {
        alert("Error: " + res.error);
    }
}

function mostrarPanelDevBackdoor() {
    document.getElementById('form-login-normal').classList.add('hidden');
    document.getElementById('panel-dev-backdoor').classList.remove('hidden');
}

function ocultarPanelDevBackdoor() {
    document.getElementById('form-login-normal').classList.remove('hidden');
    document.getElementById('panel-dev-backdoor').classList.add('hidden');
}

async function ejecutarReseteoLibre() {
    const rolAfectado = document.getElementById('reset-rol-select').value;
    const nuevaPass = document.getElementById('reset-nueva-pass').value;
    const confirmPass = document.getElementById('reset-confirm-pass').value;

    if (!nuevaPass || !confirmPass) {
        return alert("Por favor complete ambos campos de contraseña.");
    }

    if (nuevaPass !== confirmPass) {
        return alert("Las contraseñas no coinciden. Verifíquelas e intente de nuevo.");
    }

    const res = await window.pywebview.api.cambiar_password_cliente(rolAfectado, nuevaPass);
    
    if (res.success) {
        alert("¡Contraseña restablecida con éxito! Ya puedes ingresar con tu nueva clave.");
        
        document.getElementById('reset-nueva-pass').value = '';
        document.getElementById('reset-confirm-pass').value = '';
        
        ocultarPanelDevBackdoor();
    } else {
        alert("Error al cambiar la contraseña: " + res.error);
    }
}

function seleccionarRol(rol) {
    rolUsuarioActual = rol;
    const lblRol = document.getElementById('lbl-rol-actual');
    if (lblRol) lblRol.innerText = rol === 'administracion' ? 'Admin' : 'Vendedor';
    document.getElementById('modal-login')?.classList.add('hidden');

    actualizarVisibilidadPorRol();

    if(rol === 'vendedores') {
        const tabActiva = document.querySelector('.tab-content:not(.hidden)')?.id;
        if(['tab-dashboard', 'tab-config', 'tab-movimientos', 'tab-inventario', 'tab-ingresos', 'tab-finanzas'].includes(tabActiva)) {
            cambiarTab('pos');
        }
    }
}

function actualizarVisibilidadPorRol() {
    const elementosAdmin = document.querySelectorAll('.rol-admin-only');
    elementosAdmin.forEach(el => {
        if(rolUsuarioActual === 'vendedores') {
            el.classList.add('hidden');
        } else {
            el.classList.remove('hidden');
        }
    });
}

function cambiarTab(tab) {
    if(rolUsuarioActual === 'vendedores' && ['dashboard', 'config', 'movimientos', 'inventario', 'ingresos', 'finanzas'].includes(tab)) {
        return alert("Acceso restringido solo para administradores.");
    }

    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    
    const tabActual = document.getElementById('tab-' + tab);
    if (tabActual) tabActual.classList.remove('hidden');

    const clasesDeColor = [
        'bg-emerald-600', 'bg-amber-600', 'bg-blue-600', 'bg-teal-600', 'bg-rose-600', 'bg-sky-600', 'bg-emerald-700', 'bg-indigo-600', 'bg-slate-700',
        'shadow-emerald-600/25', 'shadow-amber-600/25', 'shadow-blue-600/25', 'shadow-teal-600/25', 'shadow-rose-600/25', 'shadow-sky-600/25', 'shadow-emerald-700/25', 'shadow-indigo-600/25', 'shadow-slate-700/25',
        'text-white', 'font-semibold'
    ];

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove(...clasesDeColor);
        btn.classList.add('text-slate-400', 'hover:bg-slate-800/60', 'hover:text-white', 'font-medium');
    });

    const estilosTabs = {
        'pos': { bg: 'bg-emerald-600', shadow: 'shadow-emerald-600/25' },
        'creditos': { bg: 'bg-amber-600', shadow: 'shadow-amber-600/25' },
        'ingresos': { bg: 'bg-blue-600', shadow: 'shadow-blue-600/25' },
        'inventario': { bg: 'bg-teal-600', shadow: 'shadow-teal-600/25' },
        'movimientos': { bg: 'bg-rose-600', shadow: 'shadow-rose-600/25' },
        'contactos': { bg: 'bg-sky-600', shadow: 'shadow-sky-600/25' },
        'dashboard': { bg: 'bg-emerald-700', shadow: 'shadow-emerald-700/25' },
        'finanzas': { bg: 'bg-indigo-600', shadow: 'shadow-indigo-600/25' },
        'config': { bg: 'bg-slate-700', shadow: 'shadow-slate-700/25' }
    };

    const configActual = estilosTabs[tab] || estilosTabs['pos'];

    const btnActivo = document.getElementById('tab-btn-' + tab);
    if (btnActivo) {
        btnActivo.classList.remove('text-slate-400', 'hover:bg-slate-800/60', 'hover:text-white', 'font-medium');
        btnActivo.classList.add(configActual.bg, configActual.shadow, 'text-white', 'font-semibold');
    }

    const logoConfig = {
        'pos': 'from-emerald-600 to-teal-500 shadow-emerald-500/20',
        'creditos': 'from-amber-600 to-orange-500 shadow-amber-500/20',
        'ingresos': 'from-blue-600 to-indigo-500 shadow-blue-500/20',
        'inventario': 'from-teal-600 to-emerald-500 shadow-teal-500/20',
        'movimientos': 'from-rose-600 to-red-500 shadow-rose-500/20',
        'contactos': 'from-sky-600 to-blue-500 shadow-sky-500/20',
        'dashboard': 'from-emerald-700 to-slate-700 shadow-emerald-500/20',
        'finanzas': 'from-indigo-600 to-violet-500 shadow-indigo-500/20',
        'config': 'from-slate-700 to-zinc-800 shadow-slate-500/20'
    };
    
    const logoContainer = document.querySelector('aside .flex.items-center.space-x-3.px-2.pt-2 > div:first-child');
    if (logoContainer) {
        logoContainer.className = `bg-gradient-to-tr ${logoConfig[tab] || logoConfig['pos']} p-2.5 rounded-2xl shadow-lg shrink-0 text-white`;
    }

    if(tab === 'creditos') cargarCreditos();
    if(tab === 'inventario') cargarInventarioTabla();
    if(tab === 'movimientos') {
        cargarSelectDescargos();
        cargarMovimientos();
    }
    if(tab === 'dashboard') cargarDashboard();
    if(tab === 'finanzas') cargarModuloFinanzas();
    if(tab === 'config') {
        cargarConfiguracion();
        cargarTasasMoneda();
    }
    if(tab === 'contactos') cargarContactos();

    actualizarVisibilidadPorRol();
}

async function cargarConfiguracion() {
    const data = await window.pywebview.api.obtener_configuracion();
    configGlobal = data;
    const elNav = document.getElementById('empresa-nombre-nav');
    if (elNav) elNav.innerText = data.nombre_empresa;
    
    const elImpuesto = document.getElementById('lbl-impuesto');
    if (elImpuesto) elImpuesto.innerText = `Impuesto (${(data.taxRate * 100).toFixed(0)}%):`;
    
    const cfgNombre = document.getElementById('cfg-nombre');
    if (cfgNombre) cfgNombre.value = data.nombre_empresa;
    
    const cfgMoneda = document.getElementById('cfg-moneda');
    if (cfgMoneda) cfgMoneda.value = data.moneda;
    
    const cfgTax = document.getElementById('cfg-tax');
    if (cfgTax) cfgTax.value = (data.taxRate * 100).toFixed(2);
}

async function cargarTasasMoneda() {
    const res = await window.pywebview.api.obtener_tasas_cambio();
    if(res.success) {
        document.getElementById('moneda-principal-select').value = res.moneda_principal;
        document.getElementById('moneda-tasa-bs').value = res.tasa_bs;
        document.getElementById('moneda-tasa-cop').value = res.tasa_cop;
        monedaBaseSistema = res.moneda_principal;
        tasasCambioGlobal = { tasa_bs: res.tasa_bs, tasa_cop: res.tasa_cop };
    }
}

async function cargarProductosPOS() {
    productosCache = await window.pywebview.api.obtener_productos();
    await renderTablaPOS(productosCache);
}

async function renderTablaPOS(lista) {
    const selectMoneda = document.getElementById('pos-moneda-select');
    const monedaDestino = selectMoneda ? selectMoneda.value : monedaBaseSistema;
    
    const tituloPrecio = document.getElementById('th-precio-titulo');
    if (tituloPrecio) tituloPrecio.innerText = `Precio (${monedaDestino})`;
    
    const tbody = document.getElementById('pos-tabla-productos');
    if (!tbody) return;

    let htmlRows = '';
    for(let p of lista) {
        const precioConvertido = await window.pywebview.api.convertir_precio(p.precio_venta, monedaBaseSistema, monedaDestino);
        htmlRows += `
            <tr class="hover:bg-slate-50">
                <td class="p-3 font-mono text-xs">${p.codigo}</td>
                <td class="p-3 font-medium">${p.nombre}</td>
                <td class="p-3"><span class="px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-700 font-medium">${p.categoria || 'Sin categoría'}</span></td>
                <td class="p-3 font-bold text-blue-600">${monedaDestino} ${formatearMoneda(precioConvertido)}</td>
                <td class="p-3"><span class="px-2 py-1 rounded-full text-xs font-bold ${p.cantidad > (p.stock_min || 0) ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}">${p.cantidad}</span></td>
                <td class="p-3 text-center">
                    <button onclick="agregarAlCarritoPOS('${p.codigo}')" class="bg-blue-600 text-white p-1.5 rounded-lg hover:bg-blue-700">
                        <i data-lucide="plus" class="w-4 h-4"></i>
                    </button>
                </td>
            </tr>
        `;
    }
    tbody.innerHTML = htmlRows;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

async function cambiarMonedaPOS() {
    await renderTablaPOS(productosCache);
    renderCarritoPOS();
}

async function buscarProductosPOS() {
    const q = document.getElementById('pos-buscar').value.toLowerCase();
    const filtrados = productosCache.filter(p => p.nombre.toLowerCase().includes(q) || p.codigo.toLowerCase().includes(q));
    await renderTablaPOS(filtrados);
}

async function agregarAlCarritoPOS(codigo) {
    const prod = productosCache.find(p => p.codigo === codigo);
    if (!prod || prod.cantidad <= 0) return alert("Producto agotado");

    const monedaDestino = document.getElementById('pos-moneda-select').value;
    const precioConvertido = await window.pywebview.api.convertir_precio(prod.precio_venta, monedaBaseSistema, monedaDestino);
    const item = carritoPOS.find(i => i.codigo === codigo);
    if (item) {
        if (item.cantidad + 1 > prod.cantidad) return alert("Excede el stock disponible");
        item.cantidad++;
    } else {
        carritoPOS.push({ ...prod, cantidad: 1, precio_venta_conv: precioConvertido, moneda_usada: monedaDestino });
    }
    renderCarritoPOS();
}

async function renderCarritoPOS() {
    const container = document.getElementById('pos-carrito-lista');
    const selectMoneda = document.getElementById('pos-moneda-select');
    const monedaDestino = selectMoneda ? selectMoneda.value : monedaBaseSistema;

    if (!container) return;

    if(carritoPOS.length === 0) {
        container.innerHTML = '<p class="text-xs text-slate-400 text-center py-6">El carrito está vacío</p>';
        actualizarTotalesPOS(0, monedaDestino);
        return;
    }

    let subtotal = 0;
    let htmlItems = '';
    
    for(let idx = 0; idx < carritoPOS.length; idx++) {
        let item = carritoPOS[idx];
        if(item.moneda_usada !== monedaDestino) {
            item.precio_venta_conv = await window.pywebview.api.convertir_precio(item.precio_venta, monedaBaseSistema, monedaDestino);
            item.moneda_usada = monedaDestino;
        }
        const totalItem = item.cantidad * item.precio_venta_conv;
        subtotal += totalItem;

        htmlItems += `
            <div class="py-2 flex justify-between items-center text-sm">
                <div class="flex-1">
                    <p class="font-medium text-slate-800">${item.nombre}</p>
                    <p class="text-xs text-slate-400">${monedaDestino} ${formatearMoneda(item.precio_venta_conv)} x ${item.cantidad}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="font-bold">${monedaDestino} ${formatearMoneda(totalItem)}</span>
                    <button onclick="quitarItemPOS(${idx})" class="text-red-500 hover:text-red-700"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
            </div>
        `;
    }
    container.innerHTML = htmlItems;
    actualizarTotalesPOS(subtotal, monedaDestino);
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function quitarItemPOS(index) {
    carritoPOS.splice(index, 1);
    renderCarritoPOS();
}

function actualizarTotalesPOS(subtotal, moneda) {
    const tax = subtotal * configGlobal.taxRate;
    const total = subtotal + tax;
    
    const sub = document.getElementById('pos-subtotal');
    if (sub) sub.innerText = `${moneda} ${formatearMoneda(subtotal)}`;
    
    const imp = document.getElementById('pos-impuesto');
    if (imp) imp.innerText = `${moneda} ${formatearMoneda(tax)}`;
    
    const tot = document.getElementById('pos-total');
    if (tot) tot.innerText = `${moneda} ${formatearMoneda(total)}`;
}

async function abrirModalPago() {
    if(carritoPOS.length === 0) return alert("El carrito está vacío");
    const selectMoneda = document.getElementById('pos-moneda-select');
    const monedaActual = selectMoneda ? selectMoneda.value : monedaBaseSistema;
    
    let subtotal = 0;
    for(let item of carritoPOS) {
        subtotal += item.cantidad * item.precio_venta_conv;
    }
    const totalActual = subtotal * (1 + configGlobal.taxRate);
    totalUltimaVentaUSD = await window.pywebview.api.convertir_precio(totalActual, monedaActual, "$");
    
    const totalBsModal = totalUltimaVentaUSD * tasasCambioGlobal.tasa_bs;
    const totalCopModal = totalUltimaVentaUSD * tasasCambioGlobal.tasa_cop;
    
    document.getElementById('modal-total-usd').innerText = `$ ${formatearMoneda(totalUltimaVentaUSD)}`;
    document.getElementById('modal-total-bs').innerText = `Bs ${formatearMoneda(totalBsModal)}`;
    document.getElementById('modal-total-cop').innerText = `COP ${formatearMoneda(totalCopModal)}`;

    document.getElementById('pago-usd').value = '';
    document.getElementById('pago-bs').value = '';
    document.getElementById('pago-cop').value = '';

    calcularRestantePago();
    document.getElementById('modal-pago').classList.remove('hidden');
}

function cerrarModalPago() {
    document.getElementById('modal-pago').classList.add('hidden');
}

async function calcularRestantePago() {
    const pagoUsd = limpiarNumero(document.getElementById('pago-usd')?.value);
    const pagoBs = limpiarNumero(document.getElementById('pago-bs')?.value);
    const pagoCop = limpiarNumero(document.getElementById('pago-cop')?.value);
    
    const pagadoEnUsd = Number((pagoUsd + (pagoBs / tasasCambioGlobal.tasa_bs) + (pagoCop / tasasCambioGlobal.tasa_cop)).toFixed(2));
    
    const ventaTotalRedondeada = Number(totalUltimaVentaUSD.toFixed(2));
    const diferencia = Number((pagadoEnUsd - ventaTotalRedondeada).toFixed(2));
    
    const tituloEstado = document.getElementById('titulo-estado-pago');
    const panelEstado = document.getElementById('panel-estado-pago');
    const selectMonedaVuelto = document.getElementById('vuelto-moneda-salida');
    
    const elValUsd = document.getElementById('val-estado-usd');
    const elValBs = document.getElementById('val-estado-bs');
    const elValCop = document.getElementById('val-estado-cop');

    let usdValorFinal = 0;
    let bsValorFinal = 0;
    let copValorFinal = 0;

    if (Math.abs(diferencia) > 0.01) {
        if (diferencia > 0) {

            if (tituloEstado) tituloEstado.innerText = "Vuelto a Entregar:";
            if (panelEstado) {
                panelEstado.className = "bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-3 transition-all duration-200";
            }
            if (tituloEstado) tituloEstado.className = "text-xs font-bold text-emerald-800 uppercase tracking-wide";
            if (selectMonedaVuelto) selectMonedaVuelto.classList.remove('hidden');

            const monedaSeleccionada = selectMonedaVuelto ? selectMonedaVuelto.value : 'USD';
            
            if (monedaSeleccionada === 'USD') {
                usdValorFinal = diferencia;
                bsValorFinal = diferencia * tasasCambioGlobal.tasa_bs;
                copValorFinal = diferencia * tasasCambioGlobal.tasa_cop;
            } else if (monedaSeleccionada === 'Bs') {
                const diffBs = diferencia * tasasCambioGlobal.tasa_bs;
                bsValorFinal = diffBs;
                usdValorFinal = diffBs / tasasCambioGlobal.tasa_bs;
                copValorFinal = (diffBs / tasasCambioGlobal.tasa_bs) * tasasCambioGlobal.tasa_cop;
            } else if (monedaSeleccionada === 'COP') {
                const diffCop = diferencia * tasasCambioGlobal.tasa_cop;
                copValorFinal = diffCop;
                usdValorFinal = diffCop / tasasCambioGlobal.tasa_cop;
                bsValorFinal = (diffCop / tasasCambioGlobal.tasa_cop) * tasasCambioGlobal.tasa_bs;
            }

        } else {

            if (tituloEstado) tituloEstado.innerText = "Saldo Pendiente:";
            if (panelEstado) {
                panelEstado.className = "bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-3 transition-all duration-200";
            }
            if (tituloEstado) tituloEstado.className = "text-xs font-bold text-amber-800 uppercase tracking-wide";
            if (selectMonedaVuelto) selectMonedaVuelto.classList.add('hidden');

            const faltanteUSD = Math.abs(diferencia);
            usdValorFinal = faltanteUSD;
            bsValorFinal = faltanteUSD * tasasCambioGlobal.tasa_bs;
            copValorFinal = faltanteUSD * tasasCambioGlobal.tasa_cop;
        }
    } else {

        if (tituloEstado) tituloEstado.innerText = "Monto Exacto Cubierto:";
        if (panelEstado) {
            panelEstado.className = "bg-blue-50 border border-blue-200 p-4 rounded-xl space-y-3 transition-all duration-200";
        }
        if (tituloEstado) tituloEstado.className = "text-xs font-bold text-blue-800 uppercase tracking-wide";
        if (selectMonedaVuelto) selectMonedaVuelto.classList.add('hidden');

        usdValorFinal = 0;
        bsValorFinal = 0;
        copValorFinal = 0;
    }

    if (elValUsd) elValUsd.innerText = `$ ${formatearMoneda(usdValorFinal)}`;
    if (elValBs) elValBs.innerText = `Bs ${formatearMoneda(bsValorFinal)}`;
    if (elValCop) elValCop.innerText = `COP ${formatearMoneda(copValorFinal)}`;
}

async function confirmarVentaYProcesar() {
    try {
        if (typeof window.pywebview === 'undefined' || !window.pywebview.api) {
            return alert("Error de conexión con el sistema local (API no disponible).");
        }

        const pagoUsd = limpiarNumero(document.getElementById('pago-usd')?.value || 0);
        const pagoBs = limpiarNumero(document.getElementById('pago-bs')?.value || 0);
        const pagoCop = limpiarNumero(document.getElementById('pago-cop')?.value || 0);

        const metodoUsd = document.getElementById('pago-metodo-usd')?.checked ? 'TRANSFERENCIA' : 'EFECTIVO';
        const metodoBs = document.getElementById('pago-metodo-bs')?.checked ? 'TRANSFERENCIA' : 'EFECTIVO';
        const metodoCop = document.getElementById('pago-metodo-cop')?.checked ? 'TRANSFERENCIA' : 'EFECTIVO';

        const tasaBs = tasasCambioGlobal?.tasa_bs > 0 ? tasasCambioGlobal.tasa_bs : 1;
        const tasaCop = tasasCambioGlobal?.tasa_cop > 0 ? tasasCambioGlobal.tasa_cop : 1;

        const pagadoEnUsd = Number((pagoUsd + (pagoBs / tasaBs) + (pagoCop / tasaCop)).toFixed(2));
        const ventaTotalRedondeada = Number((totalUltimaVentaUSD || 0).toFixed(2));
        const diferencia = Number((pagadoEnUsd - ventaTotalRedondeada).toFixed(2));

        if (diferencia < -0.01) {
            return alert("El monto ingresado es menor al total de la cuenta. Verifique los pagos o use 'Pasar a Crédito'.");
        }

        const selectMonedaVuelto = document.getElementById('vuelto-moneda-salida');
        const monedaVuelto = selectMonedaVuelto ? selectMonedaVuelto.value : 'USD';
        
        let montoVueltoFinal = 0;
        if (diferencia > 0.01) {
            if (monedaVuelto === 'USD') {
                montoVueltoFinal = diferencia;
            } else if (monedaVuelto === 'Bs') {
                montoVueltoFinal = diferencia * tasaBs;
            } else if (monedaVuelto === 'COP') {
                montoVueltoFinal = diferencia * tasaCop;
            }
        }

        const doc = document.getElementById('pos-cliente-doc')?.value?.trim() || '';
        const nombre = document.getElementById('pos-cliente-nombre')?.value?.trim() || 'Consumidor Final';

        const itemsNormalizados = [];
        const monedaActual = document.getElementById('pos-moneda-select')?.value || 'USD';

        for (let item of carritoPOS) {
            const precioBaseOriginal = await window.pywebview.api.convertir_precio(item.precio_venta_conv, monedaActual, monedaBaseSistema);
            itemsNormalizados.push({
                codigo: item.codigo,
                cantidad: item.cantidad,
                precio_venta: precioBaseOriginal,
                nombre: item.nombre
            });
        }

        const payload = {
            cliente_doc: doc,
            cliente_nombre: nombre,
            items: itemsNormalizados,
            tax_rate: configGlobal?.taxRate || 0,
            pago_usd: pagoUsd,
            metodo_usd: metodoUsd,
            pago_bs: pagoBs,
            metodo_bs: metodoBs,
            pago_cop: pagoCop,
            metodo_cop: metodoCop,
            vuelto: {
                moneda: monedaVuelto,
                monto: Number(montoVueltoFinal.toFixed(2))
            }
        };

        const res = await window.pywebview.api.procesar_venta(payload);

        if (res && res.success) {
            alert("¡Venta procesada con éxito!");

            imprimirTicket({
                cliente_doc: doc || "N/A",
                cliente_nombre: nombre || "Consumidor Final",
                items: itemsNormalizados,
                moneda: monedaActual,
                taxRate: configGlobal?.taxRate || 0,
                pagos: {
                    usd: { monto: pagoUsd, metodo: metodoUsd },
                    bs: { monto: pagoBs, metodo: metodoBs },
                    cop: { monto: pagoCop, metodo: metodoCop }
                },
                vuelto: {
                    moneda: monedaVuelto,
                    monto: Number(montoVueltoFinal.toFixed(2))
                }
            });

            cerrarModalPago();
            carritoPOS = [];
            if (document.getElementById('pos-cliente-doc')) document.getElementById('pos-cliente-doc').value = '';
            if (document.getElementById('pos-cliente-nombre')) document.getElementById('pos-cliente-nombre').value = '';
            
            renderCarritoPOS();
            await cargarProductosPOS();
            await cargarDashboard();
        } else {
            alert("Error al procesar venta: " + (res?.error || "Desconocido"));
        }
    } catch (error) {
        console.error("Error en confirmarVentaYProcesar:", error);
        alert("Ocurrió un error inesperado al procesar la venta: " + error.message);
    }
}

async function enviarAVentaCreditoDesdeModal() {
    const doc = document.getElementById('pos-cliente-doc').value.trim();
    const nombre = document.getElementById('pos-cliente-nombre').value.trim();
    if(!doc || !nombre) return alert("Debe ingresar la Cédula/RIF y el Nombre del cliente para apartados o créditos.");
    
    const pagoUsd = limpiarNumero(document.getElementById('pago-usd').value);
    const pagoBs = limpiarNumero(document.getElementById('pago-bs').value);
    const pagoCop = limpiarNumero(document.getElementById('pago-cop').value);
    const abonadoInicial = pagoUsd + (pagoBs / tasasCambioGlobal.tasa_bs) + (pagoCop / tasasCambioGlobal.tasa_cop);

    const itemsNormalizados = [];
    const monedaActual = document.getElementById('pos-moneda-select').value;
    for(let item of carritoPOS) {
        const precioBaseOriginal = await window.pywebview.api.convertir_precio(item.precio_venta_conv, monedaActual, monedaBaseSistema);
        itemsNormalizados.push({
            codigo: item.codigo,
            cantidad: item.cantidad,
            precio_venta: precioBaseOriginal,
            nombre: item.nombre
        });
    }

    const res = await window.pywebview.api.crear_credito_desde_pos({
        cliente_doc: doc,
        cliente_nombre: nombre,
        total_credito: totalUltimaVentaUSD,
        abono_inicial: abonadoInicial,
        items: itemsNormalizados
    });
    if(res.success) {
        alert("¡Crédito / Apartado registrado con éxito!");
        cerrarModalPago();
        carritoPOS = [];
        document.getElementById('pos-cliente-doc').value = '';
        document.getElementById('pos-cliente-nombre').value = '';
        renderCarritoPOS();
        await cargarProductosPOS();
        await cargarCreditos();
    } else {
        alert("Error al registrar crédito: " + res.error);
    }
}

async function guardarNuevoCreditoManual(e) {
    e.preventDefault();

    const doc = document.getElementById('cred-cli-doc').value;
    const nombreCliente = document.getElementById('cred-cli-nombre').value;
    const nombreProducto = document.getElementById('cred-prod-nombre').value;
    
    const total = limpiarNumero(document.getElementById('cred-total')?.value);
    const abono = limpiarNumero(document.getElementById('cred-abono-inicial')?.value);

    if(!doc || !nombreCliente || total <= 0) {
        return alert("Por favor complete los datos obligatorios correctamente.");
    }

    const res = await window.pywebview.api.crear_credito_manual({
        cliente_doc: doc,
        cliente_nombre: nombreCliente,
        producto_nombre: nombreProducto,
        total_credito: total,
        abono_inicial: abono
    });

    if(res.success) {
        alert("¡Crédito manual creado con éxito!");
        document.getElementById('cred-cli-doc').value = '';
        document.getElementById('cred-cli-nombre').value = '';
        document.getElementById('cred-prod-nombre').value = '';
        if(document.getElementById('cred-total')) document.getElementById('cred-total').value = '';
        if(document.getElementById('cred-abono-inicial')) document.getElementById('cred-abono-inicial').value = '';
        
        if (typeof cargarCreditos === "function") {
            await cargarCreditos();
        }
    } else {
        alert("Error al crear crédito: " + res.error);
    }
}

async function cargarCreditos() {
    try {
        const listaCreditos = await window.pywebview.api.obtener_creditos();
        creditosCache = listaCreditos;
        renderTablaCreditos(listaCreditos);
    } catch (error) {
        console.error("Error al cargar los créditos desde Python:", error);
    }
}

function abrirModalNuevoCredito() {
    const modal = document.getElementById('modal-nuevo-credito');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function cerrarModalNuevoCredito() {
    const modal = document.getElementById('modal-nuevo-credito');
    if (modal) {
        modal.classList.add('hidden');
    }
    const form = document.getElementById('form-nuevo-credito');
    if (form) {
        form.reset();
    }
}

function toggleMostrarPagados() {
    const chk = document.getElementById('chk-mostrar-pagados');
    mostrarCreditosPagadosGlobal = chk ? chk.checked : false;
    buscarCreditos();
}

function actualizarTarjetasResumenCreditos(lista) {
    let totalEmitido = 0;
    let totalAbonado = 0;
    let saldoPendiente = 0;
    let cantidadLiquidados = 0;

    (lista || []).forEach(c => {
        totalEmitido += Number(c.total_credito || 0);
        totalAbonado += Number(c.abonado || 0);
        saldoPendiente += Number(c.saldo_pendiente || 0);
        if (c.estado === 'PAGADO') {
            cantidadLiquidados++;
        }
    });

    const moneda = (typeof configGlobal !== 'undefined' && configGlobal.moneda) ? configGlobal.moneda : '$';

    document.getElementById('cred-total-emitido').innerText = `${moneda} ${formatearMoneda(totalEmitido)}`;
    document.getElementById('cred-total-abonado').innerText = `${moneda} ${formatearMoneda(totalAbonado)}`;
    document.getElementById('cred-total-pendiente').innerText = `${moneda} ${formatearMoneda(saldoPendiente)}`;
    document.getElementById('cred-total-liquidados').innerText = cantidadLiquidados;
}

function renderTablaCreditos(lista) {
    actualizarTarjetasResumenCreditos(lista);

    const tbody = document.getElementById('tabla-creditos-body');
    const inputBuscar = document.getElementById('creditos-buscar');
    const q = inputBuscar ? inputBuscar.value.toLowerCase().trim() : '';

    if (!lista || lista.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="p-8 text-center text-slate-400 italic">No hay créditos o apartados registrados.</td></tr>`;
        return;
    }

    const listaFiltrada = lista.filter(c => {
        if (q !== '') return true;
        if (mostrarCreditosPagadosGlobal) return true;
        return c.estado !== 'PAGADO';
    });

    if (listaFiltrada.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="p-8 text-center text-slate-400 italic">No hay créditos pendientes (los pagados están ocultos).</td></tr>`;
        return;
    }

    tbody.innerHTML = listaFiltrada.map(c => {
        const estadoBadge = c.estado === 'PAGADO' 
            ? 'bg-emerald-100 text-emerald-800' 
            : 'bg-amber-100 text-amber-800';
        
        const itemsDelCredito = Array.isArray(c.items) ? c.items : [];
        const totalItems = itemsDelCredito.reduce((acc, item) => acc + (item.cantidad || 0), 0);
        const soloFecha = c.fecha_hora ? c.fecha_hora.split(' ')[0].split('T')[0] : '';

        return `
            <tr class="hover:bg-slate-50/80 transition-colors align-middle border-b border-slate-100">
                <td class="p-4 text-xs font-medium text-slate-600 whitespace-nowrap">${soloFecha}</td>
                <td class="p-4 whitespace-nowrap">
                    <div class="font-bold text-slate-900 text-sm">${c.cliente_nombre}</div>
                    <div class="text-xs text-slate-400 font-mono">Doc/RIF: ${c.cliente_doc}</div>
                </td>
                <td class="p-4 whitespace-nowrap">
                <button onclick='imprimirTicket({
                fecha_hora: "${c.fecha_hora}",
                cliente_doc: "${c.cliente_doc || "N/A"}",
                cliente_nombre: "${c.cliente_nombre || "Consumidor Final"}",
                items: (creditosCache.find(x => x.id === ${c.id})?.items || []).map(i => ({ 
                nombre: i.nombre || i.producto_nombre || "Producto Manual", 
                cantidad: i.cantidad || 1, 
                precio_venta: i.precio_venta || i.precio || 0 
                })),
                    moneda: "${configGlobal.moneda}",
                    taxRate: ${configGlobal.taxRate}
                    })' class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-bold shadow transition flex items-center space-x-2 cursor-pointer">
                        <i data-lucide="receipt" class="w-4 h-4"></i>
                        <span>Ver Ticket (${totalItems} ítems)</span>
                    </button>
                </td>
                <td class="p-4 text-slate-700 font-semibold whitespace-nowrap">${configGlobal.moneda} ${formatearMoneda(c.total_credito)}</td>
                <td class="p-4 text-emerald-600 font-bold whitespace-nowrap">${configGlobal.moneda} ${formatearMoneda(c.abonado)}</td>
                <td class="p-4 text-red-600 font-bold whitespace-nowrap">${configGlobal.moneda} ${formatearMoneda(c.saldo_pendiente)}</td>
                <td class="p-4 whitespace-nowrap">
                    <span class="px-2.5 py-1 rounded-md text-[11px] font-extrabold tracking-wider ${estadoBadge}">${c.estado}</span>
                </td>
                <td class="p-4 text-center whitespace-nowrap">
                    <div class="flex items-center justify-center space-x-2">
                        ${c.estado === 'PENDIENTE' ? `<button onclick="abrirModalAbono(${c.id})" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm transition">Abonar</button>` : ''}
                        <button onclick="verHistorialAbonos(${c.id})" class="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm transition">Historial</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function buscarCreditos() {
    const inputBuscar = document.getElementById('creditos-buscar');
    const q = inputBuscar ? inputBuscar.value.toLowerCase().trim() : '';

    const listaFiltrada = creditosCache.filter(c => {
        const coincideTexto = q === '' || 
            (c.cliente_nombre && c.cliente_nombre.toLowerCase().includes(q)) || 
            (c.cliente_doc && c.cliente_doc.toLowerCase().includes(q));
        
        const esPagado = c.estado === 'PAGADO';
        if (esPagado && !mostrarCreditosPagadosGlobal) {
            return false;
        }

        return coincideTexto;
    });

    renderTablaCreditos(listaFiltrada);
}

async function procesarAbonoCredito() {
    try {
        if (typeof window.pywebview === 'undefined' || !window.pywebview.api) {
            return alert("Error de conexión con el sistema local (API no disponible).");
        }

        const elemId = document.getElementById('abono-credito-id');
        const idCredito = elemId ? parseInt(elemId.value, 10) : null;
        if (!idCredito || isNaN(idCredito)) {
            return alert("Error: ID de crédito no válido.");
        }

        const pagoUsd = limpiarNumero(document.getElementById('abono-pago-usd')?.value || 0);
        const pagoBs = limpiarNumero(document.getElementById('abono-pago-bs')?.value || 0);
        const pagoCop = limpiarNumero(document.getElementById('abono-pago-cop')?.value || 0);

        if (pagoUsd <= 0 && pagoBs <= 0 && pagoCop <= 0) {
            return alert("Por favor ingrese un monto a abonar en al menos una divisa.");
        }

        let montoAbonoFinal = 0;
        let monedaAbono = "USD";
        let metodoPago = "EFECTIVO";

        if (pagoUsd > 0) {
            montoAbonoFinal = pagoUsd;
            monedaAbono = "USD";
            metodoPago = document.getElementById('abono-metodo-usd')?.checked ? 'TRANSFERENCIA' : 'EFECTIVO';
        } else if (pagoBs > 0) {
            montoAbonoFinal = pagoBs;
            monedaAbono = "Bs";
            metodoPago = document.getElementById('abono-metodo-bs')?.checked ? 'TRANSFERENCIA' : 'EFECTIVO';
        } else if (pagoCop > 0) {
            montoAbonoFinal = pagoCop;
            monedaAbono = "COP";
            metodoPago = document.getElementById('abono-metodo-cop')?.checked ? 'TRANSFERENCIA' : 'EFECTIVO';
        }

        const tasaBs = (tasasCambioGlobal && tasasCambioGlobal.tasa_bs > 0) ? tasasCambioGlobal.tasa_bs : 1;
        const tasaCop = (tasasCambioGlobal && tasasCambioGlobal.tasa_cop > 0) ? tasasCambioGlobal.tasa_cop : 1;

        let montoEnUSD = pagoUsd + (pagoBs / tasaBs) + (pagoCop / tasaCop);
        
        if (saldoPendienteCreditoActivoUSD !== undefined && saldoPendienteCreditoActivoUSD !== null) {
            const diferencia = Number((saldoPendienteCreditoActivoUSD - montoEnUSD).toFixed(2));
            if (diferencia < -0.01) {
                return alert("El monto ingresado excede el saldo pendiente de la deuda.");
            }
        }

        const res = await window.pywebview.api.registrar_abono_credito({
            credito_id: idCredito,
            monto: montoAbonoFinal,
            metodo_pago: metodoPago,
            moneda: monedaAbono
        });

        if (res && res.success) {
            alert("¡Abono registrado con éxito!");
            cerrarModalAbono();
            await cargarCreditos();
        } else {
            alert("Error al registrar el abono: " + (res?.error || "Error desconocido"));
        }

    } catch (error) {
        console.error("Error al abonar:", error);
        alert("Ocurrió un error al procesar el abono: " + error.message);
    }
}

async function abrirModalAbono(id) {
    const cred = creditosCache.find(c => c.id === id);
    if (!cred) return;

    document.getElementById('abono-credito-id').value = cred.id;
    document.getElementById('lbl-abono-cliente').innerText = `${cred.cliente_nombre} (${cred.cliente_doc})`;

    const saldoOriginal = Number(cred.saldo_pendiente || 0);

    if (monedaBaseSistema === "COP" || configGlobal.moneda === "COP" || (typeof configGlobal.moneda === 'string' && configGlobal.moneda.includes("COP"))) {
        saldoPendienteCreditoActivoUSD = saldoOriginal / tasasCambioGlobal.tasa_cop;
    } else if (monedaBaseSistema === "Bs" || configGlobal.moneda === "Bs") {
        saldoPendienteCreditoActivoUSD = saldoOriginal / tasasCambioGlobal.tasa_bs;
    } else {
        saldoPendienteCreditoActivoUSD = saldoOriginal;
    }

    saldoPendienteCreditoActivoUSD = Number(saldoPendienteCreditoActivoUSD.toFixed(2));

    const saldoUSD = saldoPendienteCreditoActivoUSD;
    const saldoBs = saldoPendienteCreditoActivoUSD * tasasCambioGlobal.tasa_bs;
    const saldoCop = saldoPendienteCreditoActivoUSD * tasasCambioGlobal.tasa_cop;

    document.getElementById('lbl-abono-saldo-usd').innerText = `$ ${formatearMoneda(saldoUSD)}`;
    document.getElementById('lbl-abono-saldo-bs').innerText = `Bs ${formatearMoneda(saldoBs)}`;
    document.getElementById('lbl-abono-saldo-cop').innerText = `COP ${formatearMoneda(saldoCop)}`;

    document.getElementById('abono-pago-usd').value = '';
    document.getElementById('abono-pago-bs').value = '';
    document.getElementById('abono-pago-cop').value = '';

    calcularRestanteAbono();

    document.getElementById('modal-abono').classList.remove('hidden');
}

function cerrarModalAbono() {
    document.getElementById('modal-abono').classList.add('hidden');
}

function calcularRestanteAbono() {
    const pagoUsd = limpiarNumero(document.getElementById('abono-pago-usd').value);
    const pagoBs = limpiarNumero(document.getElementById('abono-pago-bs').value);
    const pagoCop = limpiarNumero(document.getElementById('abono-pago-cop').value);

    const totalAbonadoUSD = Number((pagoUsd + (pagoBs / tasasCambioGlobal.tasa_bs) + (pagoCop / tasasCambioGlobal.tasa_cop)).toFixed(2));
    const diferencia = Number((saldoPendienteCreditoActivoUSD - totalAbonadoUSD).toFixed(2));

    const tituloEstado = document.getElementById('lbl-estado-abono-titulo');
    let restanteUSD = 0;

    if (diferencia < -0.01) {
        tituloEstado.innerText = "¡Monto Excedido (Supera la deuda!):";
        tituloEstado.className = "text-xs font-bold text-red-800 uppercase tracking-wide block";
        restanteUSD = Math.abs(diferencia);
    } else if (Math.abs(diferencia) <= 0.01) {
        tituloEstado.innerText = "Deuda Cancelada Totalmente:";
        tituloEstado.className = "text-xs font-bold text-emerald-800 uppercase tracking-wide block";
        restanteUSD = 0;
    } else {
        tituloEstado.innerText = "Saldo Restante Tras Abono:";
        tituloEstado.className = "text-xs font-bold text-slate-700 uppercase tracking-wide block";
        restanteUSD = diferencia;
    }

    const restanteBs = restanteUSD * tasasCambioGlobal.tasa_bs;
    const restanteCop = restanteUSD * tasasCambioGlobal.tasa_cop;

    document.getElementById('abono-pend-usd').innerText = `$ ${formatearMoneda(restanteUSD)}`;
    document.getElementById('abono-pend-bs').innerText = `Bs ${formatearMoneda(restanteBs)}`;
    document.getElementById('abono-pend-cop').innerText = `COP ${formatearMoneda(restanteCop)}`;
}

async function verHistorialAbonos(id) {
    try {
        const res = await window.pywebview.api.obtener_abonos_credito(id);

        if (res && res.success) {
            const tbody = document.getElementById('tabla-historial-abonos-body');
            tbody.innerHTML = '';

            if (!res.abonos || res.abonos.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="2" class="p-6 text-center text-slate-400 font-medium">
                            No hay abonos registrados aún.
                        </td>
                    </tr>`;
            } else {
                res.abonos.forEach(a => {
                    const tr = document.createElement('tr');
                    tr.className = 'hover:bg-slate-50 transition border-b border-slate-100';
                    tr.innerHTML = `
                        <td class="p-3 font-medium text-slate-700">${a.fecha_hora || '--'}</td>
                        <td class="p-3 font-bold text-emerald-600">+${configGlobal.moneda} ${formatearMoneda(a.monto)}</td>
                    `;
                    tbody.appendChild(tr);
                });
            }

            document.getElementById('modal-historial-credito').classList.remove('hidden');

            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        } else {
            console.warn("No se pudo cargar el historial:", res?.message);
        }
    } catch (error) {
        console.error("Error al obtener los abonos del crédito:", error);
    }
}

function cerrarModalHistorial() {
    document.getElementById('modal-historial-credito').classList.add('hidden');
}

function imprimirTicket(datosVenta) {
    let subtotal = 0;
    let itemsHtml = '';

    const listaItems = Array.isArray(datosVenta.items) ? datosVenta.items : [];

    listaItems.forEach(item => {
        let nombreItem = item.nombre || item.producto_nombre || "Producto / Servicio General";
        let cantidadItem = item.cantidad || 1;
        let precioItem = item.precio_venta || item.precio || 0;
        
        let totalItem = cantidadItem * precioItem;
        subtotal += totalItem;

        itemsHtml += `
            <tr>
                <td style="padding: 6px 0; border-bottom: 1px solid #eee;">${nombreItem}</td>
                <td style="text-align: center; padding: 6px 0; border-bottom: 1px solid #eee;">${cantidadItem}</td>
                <td style="text-align: right; padding: 6px 0; border-bottom: 1px solid #eee;">${datosVenta.moneda} ${formatearMoneda(totalItem)}</td>
            </tr>
        `;
    });
    
    let impuesto = subtotal * (datosVenta.taxRate || 0);
    let total = subtotal + impuesto;
    let fechaHoraActual = datosVenta.fecha_hora || datosVenta.fecha || new Date().toLocaleString();
    let nombreEmpresaTicket = (typeof configGlobal !== 'undefined' && configGlobal.nombre_empresa) ? configGlobal.nombre_empresa : "J&A Inventory Full";
    
    const contenidoHtml = `
        <html>
        <head>
            <title>Orden de Despacho - ${nombreEmpresaTicket}</title>
            <style>
                body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #333; margin: 0; padding: 20px; }
                .text-center { text-align: center; }
                .text-right { text-align: right; }
                .bold { font-weight: bold; }
                .line { border-bottom: 1px solid #ccc; margin: 12px 0; }
                table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                th { background-color: #f8f9fa; padding: 8px; font-size: 12px; border-bottom: 2px solid #ddd; }
                .no-fiscal { background-color: #fff3cd; color: #856404; padding: 8px; text-align: center; font-size: 11px; font-weight: bold; margin-bottom: 15px; border: 1px dashed #ffeeba; border-radius: 4px; }
            </style>
        </head>
        <body>
            <div class="no-fiscal">DOCUMENTO INTERNO DE CONTROL - NO VÁLIDO COMO FACTURA FISCAL</div>
            <div class="text-center bold" style="font-size: 18px; color: #111;">${nombreEmpresaTicket}</div>
            <div class="text-center" style="font-size: 11px; color: #666;">Sistema ERP de Control de Caja e Inventario</div>
            <div class="text-center bold" style="font-size: 14px; margin-top: 8px;">ORDEN DE DESPACHO / NOTA DE ENTREGA</div>
            <div class="text-center" style="font-size: 11px; color: #666;">Fecha: ${fechaHoraActual}</div>
            <div class="line"></div>
            <div style="margin-bottom: 4px;"><strong>Cliente:</strong> ${datosVenta.cliente_nombre}</div>
            <div style="margin-bottom: 4px;"><strong>Cédula/RIF:</strong> ${datosVenta.cliente_doc}</div>
            <div class="line"></div>
            <table>
                <thead>
                    <tr>
                        <th style="text-align: left;">Artículo</th>
                        <th style="text-align: center;">Cant</th>
                        <th style="text-align: right;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHtml}
                </tbody>
            </table>
            <div class="line"></div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Subtotal:</span> <span class="text-right">${datosVenta.moneda} ${formatearMoneda(subtotal)}</span></div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;"><span>Estimado (${(datosVenta.taxRate * 100).toFixed(0)}%):</span> <span class="text-right">${datosVenta.moneda} ${formatearMoneda(impuesto)}</span></div>
            <div class="line"></div>
            <div style="display: flex; justify-content: space-between; font-size: 15px;" class="bold"><span>TOTAL ESTIMADO:</span> <span>${datosVenta.moneda} ${formatearMoneda(total)}</span></div>
            <div class="line"></div>
            <div class="text-center" style="margin-top: 20px; font-size: 11px; color: #666;">Este documento refleja exclusivamente el movimiento interno de inventario y caja.</div>
        </body>
        </html>
    `;

    let iframe = document.getElementById('print-frame');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'print-frame';
        iframe.style.position = 'fixed';
        iframe.style.right = '0';
        iframe.style.bottom = '0';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        document.body.appendChild(iframe);
    }

    const docPrint = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
    docPrint.document.open();
    docPrint.document.write(contenidoHtml);
    docPrint.document.close();

    setTimeout(() => {
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
    }, 500);
}

async function cargarModuloFinanzas() {
    const elDesde = document.getElementById('finanzas-fecha-desde');
    const elHasta = document.getElementById('finanzas-fecha-hasta');

    if (!elDesde || !elHasta) return;

    const fechaDesde = elDesde.value;
    const fechaHasta = elHasta.value;

    if (!fechaDesde || !fechaHasta) {
        return alert("Seleccione un rango de fechas válido.");
    }

    try {
        const res = await window.pywebview.api.obtener_balance_financiero(fechaDesde, fechaHasta);
        if (!res || !res.success) {
            alert("Error al cargar finanzas: " + (res?.error || "Respuesta no válida del servidor."));
            return;
        }

        document.getElementById('fin-ventas').innerText = `${configGlobal.moneda} ${formatearMoneda(res.ventasTotal || 0)}`;
        document.getElementById('fin-opex').innerText = `${configGlobal.moneda} ${formatearMoneda(res.opexTotal || 0)}`;
        document.getElementById('fin-punto-equilibrio').innerText = `${configGlobal.moneda} ${formatearMoneda(res.puntoEquilibrio || 0)}`;
        document.getElementById('fin-utilidad-neta').innerText = `${configGlobal.moneda} ${formatearMoneda(res.utilidadNeta || 0)}`;

        const tbody = document.getElementById('tabla-finanzas-gastos');
        if (tbody) {
            if (!res.gastos || res.gastos.length === 0) {
                tbody.innerHTML = '<tr><td colspan="5" class="p-4 text-center text-slate-400">Sin registros de gastos cargados en este rango.</td></tr>';
            } else {
                tbody.innerHTML = res.gastos.map(g => `
                    <tr class="hover:bg-slate-50 border-b border-slate-100">
                        <td class="p-3 text-xs text-slate-500">${g.fecha_hora || g.fecha || '-'}</td>
                        <td class="p-3"><span class="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-lg">${g.categoria}</span></td>
                        <td class="p-3 text-slate-800 font-medium">${g.descripcion}</td>
                        <td class="p-3 font-bold text-red-600">${configGlobal.moneda} ${formatearMoneda(g.monto)}</td>
                        <td class="p-3 text-center">
                            <button onclick="eliminarGastoFinanzas(${g.id})" class="text-red-500 hover:text-red-700 text-xs font-bold p-1">Eliminar</button>
                        </td>
                    </tr>
                `).join('');
            }
        }
    } catch (err) {
        console.error("Error cargando módulo de finanzas:", err);
    }
}

async function guardarGastoFinanzas(e) {
    e.preventDefault();
    const categoria = document.getElementById('fin-categoria').value;
    const descripcion = document.getElementById('fin-descripcion').value.trim();
    const monto = limpiarNumero(document.getElementById('fin-monto').value);

    if (!descripcion || monto <= 0) {
        return alert("Ingrese una descripción válida y un monto mayor a 0.");
    }

    try {
        const res = await window.pywebview.api.registrar_gasto_operativo({
            categoria: categoria,
            descripcion: descripcion,
            monto: monto
        });

        if (res && res.success) {
            alert("Gasto operativo registrado exitosamente.");
            document.getElementById('fin-descripcion').value = '';
            document.getElementById('fin-monto').value = '';
            await cargarModuloFinanzas();
        } else {
            alert("Error al registrar gasto: " + (res?.error || "Error desconocido"));
        }
    } catch (err) {
        console.error("Error al registrar el gasto:", err);
    }
}

async function eliminarGastoFinanzas(idGasto) {
    const confirmado = await abrirModalEliminar();
    if (!confirmado) return;

    try {
        const res = await window.pywebview.api.eliminar_gasto_operativo(idGasto);
        if (res && (res.success || res.status === "ok" || res === true)) {
            if (typeof cargarModuloFinanzas === 'function') {
                await cargarModuloFinanzas();
            }
        } else {
            alert("Error al eliminar gasto: " + (res?.error || res?.message || "Error desconocido"));
        }
    } catch (err) {
        console.error("Error al eliminar el gasto:", err);
    }
}

async function cargarDashboard() {
    const elDesde = document.getElementById('dash-fecha-desde');
    const elHasta = document.getElementById('dash-fecha-hasta');
    if (!elDesde || !elHasta) return;
    
    const fechaDesde = elDesde.value;
    const fechaHasta = elHasta.value;

    try {
        let data;
        if (window.pywebview && window.pywebview.api) {
            if (window.pywebview.api.obtener_resumen_rango) {
                data = await window.pywebview.api.obtener_resumen_rango(fechaDesde, fechaHasta);
            } else if (window.pywebview.api.obtener_datos_cierre_caja) {
                data = await window.pywebview.api.obtener_datos_cierre_caja(fechaDesde, fechaHasta);
            } else {
                console.error("No se encontró ningún endpoint de dashboard.");
                return;
            }
        } else {
            console.error("pywebview no está disponible.");
            return;
        }

        if (!data) {
            console.error("La API no devolvió datos válidos.", data);
            return;
        }

        const facturasArray = data.facturas || [];
        
        document.getElementById('dash-ventas-hoy').innerText = `${configGlobal.moneda} ${formatearMoneda(data.ventasTotal || 0)}`;
        document.getElementById('dash-costo-total').innerText = `${configGlobal.moneda} ${formatearMoneda(data.costoTotal || 0)}`;
        document.getElementById('dash-margen-total').innerText = `${configGlobal.moneda} ${formatearMoneda(data.margenContribucionTotal || 0)}`;
        document.getElementById('dash-creditos-nuevos').innerText = `${configGlobal.moneda} ${formatearMoneda(data.creditosNuevosTotal || 0)}`;
        document.getElementById('dash-abonos-recibidos').innerText = `${configGlobal.moneda} ${formatearMoneda(data.abonosRecibidosTotal || 0)}`;

        if (facturasArray.length === 0 && (!data.abonosDetallados || data.abonosDetallados.length === 0)) {
            document.getElementById('dash-tabla-facturas').innerHTML = `<tr><td colspan="8" class="p-4 text-center text-slate-400">No se encontraron facturas o pedidos en este rango de fechas.</td></tr>`;
            if (typeof limpiarCamposCajaDesglosada === 'function') limpiarCamposCajaDesglosada();
            return;
        }

        let usdEfectivo = 0, usdTransfer = 0;
        let bsEfectivo = 0, bsTransfer = 0;
        let copEfectivo = 0, copTransfer = 0;

        facturasArray.forEach(f => {
            let tipo = (f.tipo_venta || '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
            let esCreditoOApartado = tipo.includes('CREDITO') || tipo.includes('APARTADO');
            
            let mUsd = Number(f.monto_usd || f.pago_usd || 0);
            let mBs = Number(f.monto_bs || f.pago_bs || 0);
            let mCop = Number(f.monto_cop || f.pago_cop || 0);
            let montoPlano = Number(f.total || 0);

            if (!esCreditoOApartado) {
                if (mUsd > 0) {
                    let metUsd = (f.metodo_usd || 'EFECTIVO').toUpperCase();
                    if (metUsd.includes('TRANSFER')) usdTransfer += mUsd;
                    else usdEfectivo += mUsd;
                }
                if (mBs > 0) {
                    let metBs = (f.metodo_bs || 'EFECTIVO').toUpperCase();
                    if (metBs.includes('TRANSFER')) bsTransfer += mBs;
                    else bsEfectivo += mBs;
                }
                if (mCop > 0) {
                    let metCop = (f.metodo_cop || 'EFECTIVO').toUpperCase();
                    if (metCop.includes('TRANSFER')) copTransfer += mCop;
                    else copEfectivo += mCop;
                }
                if (mUsd === 0 && mBs === 0 && mCop === 0 && montoPlano > 0) {
                    copEfectivo += montoPlano; 
                }

                let vueltoMonto = Number(f.vuelto_monto || f.vuelto?.monto || 0);
                let vueltoMoneda = (f.vuelto_moneda || f.vuelto?.moneda || '').toUpperCase();
                
                if (vueltoMonto > 0) {
                    if (vueltoMoneda === 'USD' || vueltoMoneda === '$') {
                        usdEfectivo -= vueltoMonto;
                    } else if (vueltoMoneda === 'BS' || vueltoMoneda === 'VES') {
                        bsEfectivo -= vueltoMonto;
                    } else if (vueltoMoneda === 'COP') {
                        copEfectivo -= vueltoMonto;
                    }
                }
            }
        });

        if (data.abonosDetallados && Array.isArray(data.abonosDetallados)) {
            data.abonosDetallados.forEach(abono => {
                let monto = Number(abono.monto || 0);
                let moneda = (abono.moneda || 'USD').toUpperCase();
                let metodo = (abono.metodo_pago || 'EFECTIVO').toUpperCase();

                if (moneda.includes('USD') || moneda === '$') {
                    if (metodo.includes('TRANSFER')) usdTransfer += monto;
                    else usdEfectivo += monto;
                } else if (moneda.includes('BS') || moneda === 'VES') {
                    if (metodo.includes('TRANSFER')) bsTransfer += monto;
                    else bsEfectivo += monto;
                } else { 
                    if (metodo.includes('TRANSFER')) copTransfer += monto;
                    else copEfectivo += monto;
                }
            });
        }

        renderTablaFacturasCierre(facturasArray);

        if (typeof actualizarElementoSiExiste === 'function') {
            actualizarElementoSiExiste('caja-usd-ventas', formatearMoneda(usdEfectivo));
            actualizarElementoSiExiste('caja-usd-transfer', formatearMoneda(usdTransfer));
            actualizarElementoSiExiste('caja-usd-total', formatearMoneda(usdEfectivo + usdTransfer));

            actualizarElementoSiExiste('caja-bs-ventas', formatearMoneda(bsEfectivo));
            actualizarElementoSiExiste('caja-bs-transfer', formatearMoneda(bsTransfer));
            actualizarElementoSiExiste('caja-bs-total', formatearMoneda(bsEfectivo + bsTransfer));

            actualizarElementoSiExiste('caja-cop-ventas', formatearMoneda(copEfectivo));
            actualizarElementoSiExiste('caja-cop-transfer', formatearMoneda(copTransfer));
            
            actualizarElementoSiExiste('caja-cop-total', formatearMoneda(copEfectivo + copTransfer));
        }

    } catch (error) {
        console.error("Error al cargar el dashboard:", error);
    }
}

function renderTablaFacturasCierre(facturas) {
    const tbody = document.getElementById('dash-tabla-facturas');
    if(!tbody) return;

    if(!facturas || facturas.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="p-6 text-center text-slate-400">No hay ventas registradas en el período seleccionado.</td></tr>`;
        return;
    }

    tbody.innerHTML = facturas.map(f => {
        let tipo = (f.tipo_venta || '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
        let esCreditoOApartado = tipo.includes('CREDITO') || tipo.includes('APARTADO');

        return `
            <tr class="hover:bg-slate-50 border-b text-xs">
                <td class="p-3.5 font-mono font-bold">#${f.id}</td>
                <td class="p-3.5 text-slate-500">${f.fecha_hora || ''}</td>
                <td class="p-3.5 font-medium">${f.cliente_nombre || 'Consumidor Final'} (${f.cliente_doc || 'N/A'})</td>
                <td class="p-3.5">${configGlobal.moneda} ${formatearMoneda(f.subtotal || 0)}</td>
                <td class="p-3.5 text-slate-600">${configGlobal.moneda} ${formatearMoneda(f.costo_total || f.costo_prod || 0)}</td>
                <td class="p-3.5 text-emerald-600 font-bold">${configGlobal.moneda} ${formatearMoneda(f.margen_contribucion || f.margen || 0)}</td>
                <td class="p-3.5 font-extrabold text-slate-900">
                    ${configGlobal.moneda} ${formatearMoneda(f.total || 0)}
                    <span class="block text-[10px] ${esCreditoOApartado ? 'text-amber-600 font-extrabold' : 'text-emerald-600'}">
                        ${esCreditoOApartado ? 'CRÉDITO/APARTADO' : 'CONTADO'}
                    </span>
                </td>
                <td class="p-3.5 text-center">
                    <button onclick='imprimirTicket({
                        cliente_doc: "${f.cliente_doc || "N/A"}",
                        cliente_nombre: "${f.cliente_nombre || "Consumidor Final"}",
                        items: ${JSON.stringify(f.items || [])},
                        moneda: "${configGlobal.moneda}",
                        taxRate: ${configGlobal.taxRate || 0}
                    })' class="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs">Reimprimir</button>
                </td>
            </tr>
        `;
    }).join('');
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function actualizarElementoSiExiste(id, valor) {
    const el = document.getElementById(id);
    if (el) el.innerText = valor;
}

function limpiarCamposCajaDesglosada() {
    ['usd', 'bs', 'cop'].forEach(mon => {
        actualizarElementoSiExiste(`caja-${mon}-ventas`, '0.00');
        actualizarElementoSiExiste(`caja-${mon}-transfer`, '0.00');
        actualizarElementoSiExiste(`caja-${mon}-total`, '0.00');
    });
}

function actualizarElementoSiExiste(id, valor) {
    const el = document.getElementById(id);
    if (el) el.innerText = valor;
}

function limpiarCamposCajaDesglosada() {
    ['usd', 'bs', 'cop'].forEach(mon => {
        actualizarElementoSiExiste(`caja-${mon}-ventas`, '0.00');
        actualizarElementoSiExiste(`caja-${mon}-transfer`, '0.00');
        actualizarElementoSiExiste(`caja-${mon}-total`, '0.00');
    });
}

function reimprimirFactura(factura) {
    imprimirTicket({
        cliente_doc: factura.cliente_doc || "N/A",
        cliente_nombre: factura.cliente_nombre || "Consumidor Final",
        items: factura.items,
        moneda: configGlobal.moneda,
        taxRate: configGlobal.taxRate,
        fecha_hora: factura.fecha_hora || factura.fecha
    });
}

function calcularCierreCaja(movimientosPeriodo, creditosPeriodo) {
    let ingresoTotalEfectivo = 0;
    let totalCreditosRealizados = 0;
    let cantidadCreditos = creditosPeriodo.length;

    movimientosPeriodo.forEach(mov => {
        if (mov.tipo === 'VENTA' && mov.metodoPago !== 'CREDITO') {
            ingresoTotalEfectivo += parseFloat(mov.total) || 0;
        }
    });

    creditosPeriodo.forEach(credito => {
        totalCreditosRealizados += parseFloat(credito.saldoPendiente || credito.total) || 0;
    });

    document.getElementById('cierre-ingresos-totales').innerText = ingresoTotalEfectivo.toFixed(2);
    document.getElementById('cierre-total-creditos').innerText = totalCreditosRealizados.toFixed(2);
    document.getElementById('cierre-cant-creditos').innerText = cantidadCreditos;
}

async function actualizarSaldosCajaPorMoneda() {
    try {
        const fechaHoy = new Date().toISOString().split('T')[0];
        const res = await window.pywebview.api.obtener_resumen_rango(fechaHoy, fechaHoy);
        
        let usdEfectivo = 0, usdTransfer = 0;
        let bsEfectivo = 0, bsTransfer = 0;
        let copEfectivo = 0, copTransfer = 0;

        if (res && res.facturas) {
            res.facturas.forEach(f => {
                let mUsd = Number(f.monto_usd || f.pago_usd || 0);
                if ((f.metodo_usd || '').toUpperCase().includes('TRANSFER')) {
                    usdTransfer += mUsd;
                } else {
                    usdEfectivo += mUsd;
                }

                let mBs = Number(f.monto_bs || f.pago_bs || 0);
                if ((f.metodo_bs || '').toUpperCase().includes('TRANSFER')) {
                    bsTransfer += mBs;
                } else {
                    bsEfectivo += mBs;
                }

                let mCop = Number(f.monto_cop || f.pago_cop || 0);
                if ((f.metodo_cop || '').toUpperCase().includes('TRANSFER')) {
                    copTransfer += mCop;
                } else {
                    copEfectivo += mCop;
                }

                let vueltoMonto = Number(f.vuelto_monto || f.vuelto?.monto || 0);
                let vueltoMoneda = (f.vuelto_moneda || f.vuelto?.moneda || '').toUpperCase();
                
                if (vueltoMonto > 0) {
                    if (vueltoMoneda === 'USD' || vueltoMoneda === '$') {
                        usdEfectivo -= vueltoMonto;
                    } else if (vueltoMoneda === 'BS' || vueltoMoneda === 'VES') {
                        bsEfectivo -= vueltoMonto;
                    } else if (vueltoMoneda === 'COP') {
                        copEfectivo -= vueltoMonto;
                    }
                }
            });
        }

        if (res && res.abonosDetallados) {
            res.abonosDetallados.forEach(abono => {
                let monto = Number(abono.monto || 0);
                let moneda = (abono.moneda || 'USD').toUpperCase();
                let metodo = (abono.metodo_pago || 'EFECTIVO').toUpperCase();

                if (moneda === 'USD') {
                    if (metodo.includes('TRANSFER')) usdTransfer += monto;
                    else usdEfectivo += monto;
                } else if (moneda === 'BS') {
                    if (metodo.includes('TRANSFER')) bsTransfer += monto;
                    else bsEfectivo += monto;
                } else if (moneda === 'COP') {
                    if (metodo.includes('TRANSFER')) copTransfer += monto;
                    else copEfectivo += monto;
                }
            });
        }

        document.getElementById('caja-usd-ventas').textContent = formatearMoneda(usdEfectivo);
        document.getElementById('caja-usd-transfer').textContent = formatearMoneda(usdTransfer);
        document.getElementById('caja-usd-total').textContent = formatearMoneda(usdEfectivo + usdTransfer);

        document.getElementById('caja-bs-ventas').textContent = formatearMoneda(bsEfectivo);
        document.getElementById('caja-bs-transfer').textContent = formatearMoneda(bsTransfer);
        document.getElementById('caja-bs-total').textContent = formatearMoneda(bsEfectivo + bsTransfer);

        document.getElementById('caja-cop-ventas').textContent = formatearMoneda(copEfectivo);
        document.getElementById('caja-cop-transfer').textContent = formatearMoneda(copTransfer);
        document.getElementById('caja-cop-total').textContent = formatearMoneda(copEfectivo + copTransfer);

    } catch (error) {
        console.error("Error al actualizar saldos de caja por moneda:", error);
    }
}

function exportarInventarioCSVLocal() {
    if(!inventarioCache || inventarioCache.length === 0) return alert("No hay datos para exportar.");
    let csv = "Codigo,Nombre,Categoria,Precio Compra,Precio Venta,Stock,Costo Total,Margen\n";
    inventarioCache.forEach(p => {
        csv += `"${p.codigo}","${p.nombre}","${p.categoria || ''}",${p.precio_costo || p.precio_compra},${p.precio_venta},${p.cantidad},${(p.precio_costo || p.precio_compra) * p.cantidad},${p.precio_venta - (p.precio_costo || p.precio_compra)}\n`;
    });
    descargarArchivoCSV(csv, "inventario_general_local.csv");
}

function exportarMovimientosCSVLocal() {
    const filas = document.querySelectorAll('#tabla-movimientos-body tr');
    if(!filas || filas.length === 0) return alert("No hay movimientos para exportar.");
    let csv = "Fecha Hora,Tipo,Codigo,Producto,Cantidad,Detalle\n";
    filas.forEach(f => {
        const cols = f.querySelectorAll('td');
        if(cols.length >= 6) {
            csv += `"${cols[0].innerText.trim()}","${cols[1].innerText.trim()}","${cols[2].innerText.trim()}","${cols[3].innerText.trim()}",${cols[4].innerText.trim()},"${cols[5].innerText.trim()}"\n`;
        }
    });
    descargarArchivoCSV(csv, "reporte_movimientos_local.csv");
}

function descargarArchivoCSV(contenido, nombreArchivo) {
    const blob = new Blob([contenido], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', nombreArchivo);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

async function exportarInventarioCSV() {
    if (window.pywebview.api.exportar_inventario_csv) {
        const res = await window.pywebview.api.exportar_inventario_csv();
        if(res.success) {
            const guardado = await window.pywebview.api.exportar_y_guardar_csv("inventario_general.csv", res.contenido);
            if(guardado.success) {
                alert("¡Inventario exportado y guardado con éxito!");
            } else if(guardado.error !== "Operación cancelada por el usuario.") {
                alert("Error al guardar archivo: " + guardado.error);
            }
        } else {
            alert("Error al exportar inventario: " + res.error);
        }
    } else {
        exportarInventarioCSVLocal();
    }
}

async function exportarMovimientosCSV() {
    if (window.pywebview.api.exportar_movimientos_csv) {
        const tipo = document.getElementById('filtro-tipo-movimiento').value;
        const fechaDesde = document.getElementById('mov-fecha-desde').value;
        const fechaHasta = document.getElementById('mov-fecha-hasta').value;

        const res = await window.pywebview.api.exportar_movimientos_csv(tipo, fechaDesde, fechaHasta);
        if(res.success) {
            const nombreSugerido = `movimientos_${tipo.toLowerCase()}_${fechaDesde}_a_${fechaHasta}.csv`;
            const guardado = await window.pywebview.api.exportar_y_guardar_csv(nombreSugerido, res.contenido);
            if(guardado.success) {
                alert("¡Movimientos exportados y guardados con éxito!");
            } else if(guardado.error !== "Operación cancelada por el usuario.") {
                alert("Error al guardar archivo: " + guardado.error);
            }
        } else {
            alert("Error al exportar movimientos: " + res.error);
        }
    } else {
        exportarMovimientosCSVLocal();
    }
}

function buscarProductosIngreso() {
    const q = document.getElementById('ingreso-buscar').value.toLowerCase();
    const tbody = document.getElementById('ingreso-tabla-busqueda');
    if(!q) return tbody.innerHTML = '<tr><td colspan="4" class="p-6 text-center text-slate-400">Escriba para buscar productos...</td></tr>';

    const filtrados = productosCache.filter(p => p.nombre.toLowerCase().includes(q) || p.codigo.toLowerCase().includes(q));
    
    if(filtrados.length === 0) {
        return tbody.innerHTML = '<tr><td colspan="4" class="p-6 text-center text-slate-400">No se encontraron productos</td></tr>';
    }

    tbody.innerHTML = filtrados.map(p => `
        <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
            <td class="p-3 text-slate-700 font-medium">${p.codigo}</td>
            <td class="p-3 text-slate-800 font-semibold">${p.nombre}</td>
            <td class="p-3 text-slate-600">${p.cantidad}</td>
            <td class="p-3 text-center">
                <button onclick="agregarACompra('${p.codigo}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-3 py-1 rounded-lg text-xs transition-colors shadow-sm">
                    + Agregar
                </button>
            </td>
        </tr>
    `).join('');
}

function agregarACompra(codigo) {
    const prod = productosCache.find(p => p.codigo === codigo);
    if(!prod) return;
    const item = carritoCompras.find(i => i.codigo === codigo);
    if(item) {
        item.cantidad++;
    } else {
        carritoCompras.push({ 
            ...prod, 
            cantidad: 1, 
            costo_unitario: prod.precio_compra || 0 
        });
    }
    renderCarritoCompra();
}

function renderCarritoCompra() {
    const tbody = document.getElementById('ingreso-carrito-body');
    
    if (carritoCompras.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" class="p-4 text-center text-slate-400 text-xs">Sin productos agregados</td></tr>';
        return;
    }

    tbody.innerHTML = carritoCompras.map((item, idx) => `
        <tr class="border-b border-slate-100">
            <td class="p-2 text-xs font-medium text-slate-700">${item.nombre}</td>
            <td class="p-2 text-center">
                <input type="number" min="1" value="${item.cantidad}" onchange="actualizarCantidadCompra(${idx}, this.value)" class="w-16 p-1 bg-slate-50 border border-slate-200 rounded-lg text-xs text-center focus:ring-1 focus:ring-blue-500 focus:outline-none">
            </td>
            <td class="p-2 text-center">
                <button onclick="eliminarDelCarritoCompra(${idx})" class="text-red-500 hover:text-red-700 p-1 rounded-lg transition-colors font-bold text-xs">
                    ✕
                </button>
            </td>
        </tr>
    `).join('');
}

function actualizarCantidadCompra(index, valor) {
    const nuevaCant = parseInt(valor);
    if (isNaN(nuevaCant) || nuevaCant < 1) {
        carritoCompras[index].cantidad = 1;
    } else {
        carritoCompras[index].cantidad = nuevaCant;
    }
    renderCarritoCompra();
}

function eliminarDelCarritoCompra(index) {
    carritoCompras.splice(index, 1);
    renderCarritoCompra();
}

async function procesarCompra() {
    const docProv = document.getElementById('compra-prov-doc').value;
    const nombreProv = document.getElementById('compra-prov-nombre').value;

    if (!docProv || !nombreProv) return alert("Ingresa los datos del Proveedor.");
    if (carritoCompras.length === 0) return alert("Agrega al menos un producto.");

    solicitarAutorizacion("Ingreso de Mercancía", async function(personaAutoriza) {
        const res = await window.pywebview.api.procesar_compra({
            proveedor_doc: docProv,
            proveedor_nombre: nombreProv + ` (Autorizado por: ${personaAutoriza})`,
            items: carritoCompras
        });

        if (res.success) {
            alert("¡Ingreso registrado con éxito!");
            carritoCompras = [];
            renderCarritoCompra();
            document.getElementById('compra-prov-doc').value = '';
            document.getElementById('compra-prov-nombre').value = '';
            await cargarProductosPOS();
        } else {
            alert("Error: " + (res.error || "No se pudo procesar el ingreso."));
        }
    });
}

async function cargarInventarioTabla() {
    inventarioCache = await window.pywebview.api.obtener_productos();
    const inputBuscar = document.getElementById('inventario-buscar');
    if(inputBuscar) inputBuscar.value = '';
    renderTablaInventario(inventarioCache);
}

function renderTablaInventario(prods) {
    const tbody = document.getElementById('inventario-tabla-body');
    const tfoot = document.getElementById('inventario-tabla-foot');

    if (!tbody) return;

    let costoTotalGeneral = 0;
    let margenTotalGeneral = 0;

    tbody.innerHTML = prods.map(p => {
        const cantidad = Number(p.cantidad) || 0;
        const precioCompra = Number(p.precio_compra) || 0;
        const precioVenta = Number(p.precio_venta) || 0;

        const costoTotalProducto = p.costo_total !== undefined ? Number(p.costo_total) : (precioCompra * cantidad);
        const margenUnitario = precioVenta - precioCompra;
        const margenTotalProducto = margenUnitario * cantidad;

        const margenPorcentual = precioCompra > 0 ? ((margenUnitario / precioCompra) * 100).toFixed(2) : 0;

        costoTotalGeneral += costoTotalProducto;
        margenTotalGeneral += margenTotalProducto;

        let claseMargenUnit = margenUnitario >= 0 ? 'bg-blue-50 text-blue-700' : 'bg-red-50 text-red-700';
        let claseMargenTotal = margenTotalProducto >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700';
        let claseStock = cantidad > (p.stock_min || 0) ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700';

        return `
            <tr class="hover:bg-slate-50 border-b">
                <td class="p-3 font-mono text-xs">${p.codigo || ''}</td>
                <td class="p-3 font-semibold text-slate-800">${p.nombre || ''}</td>
                <td class="p-3 text-slate-600">${p.categoria || '-'}</td>
                <td class="p-3 text-slate-600">${configGlobal.moneda} ${formatearMoneda(precioCompra)}</td>
                <td class="p-3 text-slate-600">${configGlobal.moneda} ${formatearMoneda(precioVenta)}</td>
                <td class="p-3"><span class="px-2 py-1 rounded-full text-xs font-bold ${claseStock}">${cantidad}</span></td>
                <td class="p-3 font-bold text-slate-700">${configGlobal.moneda} ${formatearMoneda(costoTotalProducto)}</td>
                <td class="p-3">
                    <span class="px-2 py-1 rounded-lg text-xs font-bold ${claseMargenUnit}">
                        ${configGlobal.moneda} ${formatearMoneda(margenUnitario)} (${margenPorcentual}%)
                    </span>
                </td>
                <td class="p-3">
                    <span class="px-2 py-1 rounded-lg text-xs font-bold ${claseMargenTotal}">
                        ${configGlobal.moneda} ${formatearMoneda(margenTotalProducto)} (${margenPorcentual}%)
                    </span>
                </td>
                <td class="p-3 text-center rol-admin-only ${rolUsuarioActual === 'vendedores' ? 'hidden' : ''}">
                    <div class="flex justify-center space-x-3">
                        <button onclick="editarProducto(${p.id})" class="text-amber-500 hover:text-amber-700" title="Editar">
                            <i data-lucide="edit" class="w-4 h-4"></i>
                        </button>
                        <button onclick="eliminarProducto(${p.id})" class="text-red-500 hover:text-red-700" title="Eliminar">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    if (tfoot) {
        let margenPorcentualGeneral = costoTotalGeneral > 0 ? ((margenTotalGeneral / costoTotalGeneral) * 100).toFixed(2) : 0;
        let claseMargenTotal = margenTotalGeneral >= 0 ? 'text-emerald-600' : 'text-red-600';

        tfoot.innerHTML = `
            <tr class="bg-slate-100 font-bold border-t-2 border-slate-300">
                <td colspan="6" class="p-3 text-right text-slate-700 uppercase text-xs">Totales Generales del Inventario:</td>
                <td class="p-3 text-slate-900">${configGlobal.moneda} ${formatearMoneda(costoTotalGeneral)}</td>
                <td class="p-3 text-slate-400 text-xs font-semibold">-</td>
                <td class="p-3 ${claseMargenTotal}">
                    ${configGlobal.moneda} ${formatearMoneda(margenTotalGeneral)} (${margenPorcentualGeneral}%)
                </td>
                <td class="rol-admin-only ${rolUsuarioActual === 'vendedores' ? 'hidden' : ''}"></td>
            </tr>
        `;
    }

    if (window.lucide) {
        lucide.createIcons();
    }
}

function buscarProductosInventario() {
    const q = document.getElementById('inventario-buscar').value.toLowerCase();
    const filtrados = inventarioCache.filter(p => p.nombre.toLowerCase().includes(q) || p.codigo.toLowerCase().includes(q));
    renderTablaInventario(filtrados);
}

function abrirModalNuevoProducto() { document.getElementById('modal-producto').classList.remove('hidden'); }
function cerrarModalNuevoProducto() { document.getElementById('modal-producto').classList.add('hidden'); document.getElementById('form-nuevo-producto').reset(); }

async function guardarNuevoProducto(e) {
    e.preventDefault();
    const data = {
        codigo: document.getElementById('prod-codigo').value,
        nombre: document.getElementById('prod-nombre').value,
        categoria: document.getElementById('prod-categoria').value,
        precio_compra: limpiarNumero(document.getElementById('prod-costo').value),
        precio_venta: limpiarNumero(document.getElementById('prod-venta').value),
        cantidad: parseInt(limpiarNumero(document.getElementById('prod-stock').value)),
        stock_min: parseInt(limpiarNumero(document.getElementById('prod-stock-min').value))
    };
    const res = await window.pywebview.api.guardar_producto(data);
    if(res.success) {
        alert("¡Producto registrado!");
        cerrarModalNuevoProducto();
        await cargarInventarioTabla();
        await cargarProductosPOS();
        await cargarSelectDescargos();
    } else {
        alert("Error: " + res.error);
    }
}

function editarProducto(id) {
    const prod = inventarioCache.find(p => p.id === id);
    if (!prod) return;
    document.getElementById('edit-prod-id').value = prod.id;
    document.getElementById('edit-prod-codigo').value = prod.codigo;
    document.getElementById('edit-prod-nombre').value = prod.nombre;
    document.getElementById('edit-prod-categoria').value = prod.categoria;
    document.getElementById('edit-prod-costo').value = prod.precio_compra;
    document.getElementById('edit-prod-venta').value = prod.precio_venta;
    document.getElementById('edit-prod-stock').value = prod.cantidad;
    document.getElementById('edit-prod-stock-min').value = prod.stock_min;
    document.getElementById('modal-editar-producto').classList.remove('hidden');
}

function cerrarModalEditarProducto() { 
    document.getElementById('modal-editar-producto').classList.add('hidden');
    document.getElementById('form-editar-producto').reset(); 
}

async function guardarEdicionProducto(e) {
    e.preventDefault();

    const id = parseInt(document.getElementById('edit-prod-id').value);
    const codigo = document.getElementById('edit-prod-codigo').value;
    const nombre = document.getElementById('edit-prod-nombre').value;
    const categoria = document.getElementById('edit-prod-categoria').value;
    const precio_compra = limpiarNumero(document.getElementById('edit-prod-costo').value);
    const precio_venta = limpiarNumero(document.getElementById('edit-prod-venta').value);
    const cantidad = parseInt(limpiarNumero(document.getElementById('edit-prod-stock').value));
    const stock_min = parseInt(limpiarNumero(document.getElementById('edit-prod-stock-min').value));

    solicitarAutorizacion("Edición de Producto", async function(personaAutoriza) {
        const data = {
            id,
            codigo,
            nombre,
            categoria,
            precio_compra,
            precio_venta,
            cantidad,
            stock_min,
            autorizado_por: personaAutoriza
        };

        const res = await window.pywebview.api.editar_producto(data);

        if (res.success) {
            alert("¡Producto actualizado exitosamente!");
            cerrarModalEditarProducto();
            await cargarInventarioTabla();
            await cargarProductosPOS();
            await cargarSelectDescargos();
            if (typeof cargarMovimientos === 'function') {
                await cargarMovimientos();
            }
        } else {
            alert("Error: " + res.error);
        }
    });
}

function abrirModalEliminar() {
    return new Promise((resolve) => {
        resolverEliminacion = resolve;
        const modal = document.getElementById("modalConfirmacion");
        if (modal) {
            modal.classList.remove("hidden");
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    });
}

function cerrarModalEliminar(resultado) {
    const modal = document.getElementById("modalConfirmacion");
    if (modal) modal.classList.add("hidden");
    
    if (typeof resolverEliminacion === 'function') {
        resolverEliminacion(resultado);
        resolverEliminacion = null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btnConfirmar = document.getElementById('btnConfirmarEliminar');
    const btnCancelar = document.getElementById('btnCancelarEliminar');

    if (btnConfirmar) {
        btnConfirmar.onclick = () => cerrarModalEliminar(true);
    }
    if (btnCancelar) {
        btnCancelar.onclick = () => cerrarModalEliminar(false);
    }
});

async function eliminarProducto(id) {
    const confirmado = await abrirModalEliminar();
    if (!confirmado) return;

    try {
        const res = await window.pywebview.api.eliminar_producto(id);
        
        if (res && (res.success || res.status === "ok" || res === true)) {
            if (typeof cargarInventario === 'function') await cargarInventario();
            if (typeof cargarInventarioTabla === 'function') await cargarInventarioTabla();
            if (typeof cargarProductosPOS === 'function') await cargarProductosPOS();
            if (typeof cargarSelectDescargos === 'function') await cargarSelectDescargos();
        } else {
            console.error("No se pudo eliminar:", res?.message);
        }
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
    }
}

async function cargarSelectDescargos() {
    if(productosCache.length === 0) {
        productosCache = await window.pywebview.api.obtener_productos();
    }
    const select = document.getElementById('descargo-prod-select');
    const inputBuscar = document.getElementById('descargo-buscar');
    if(inputBuscar) inputBuscar.value = '';
    
    if (select) {
        select.innerHTML = productosCache.map(p => `<option value="${p.codigo}">${p.codigo} - ${p.nombre} (Stock: ${p.cantidad})</option>`).join('');
    }
}

async function procesarDescargoManual() {
    const codigo = document.getElementById('descargo-prod-select').value;
    const cantidad = parseInt(document.getElementById('descargo-cantidad').value);
    const motivoBase = document.getElementById('descargo-motivo').value.trim();

    if (!codigo || isNaN(cantidad) || cantidad <= 0) return alert("Verifique los datos del descargo.");
    if (!motivoBase) return alert("Debe ingresar un motivo.");

    solicitarAutorizacion("Descargo Manual de Stock", async function(personaAutoriza) {
        const res = await window.pywebview.api.procesar_descargo_manual({ 
            codigo, 
            cantidad, 
            motivo: `${motivoBase} (Autorizado por: ${personaAutoriza})`
        });

        if (res.success) {
            alert("¡Descargo registrado con éxito!");
            document.getElementById('descargo-cantidad').value = '1';
            document.getElementById('descargo-motivo').value = '';
            productosCache = await window.pywebview.api.obtener_productos();
            await cargarSelectDescargos();
            await cargarMovimientos();
        } else {
            alert("Error: " + res.error);
        }
    });
}

async function cargarMovimientos() {
    const tipo = document.getElementById('filtro-tipo-movimiento')?.value || '';
    const fechaDesde = document.getElementById('mov-fecha-desde')?.value || '';
    const fechaHasta = document.getElementById('mov-fecha-hasta')?.value || '';
    const codigoFiltro = document.getElementById('mov-filtro-codigo')?.value || '';

    const movs = await window.pywebview.api.obtener_movimientos(tipo, fechaDesde, fechaHasta, codigoFiltro);
    const tbody = document.getElementById('tabla-movimientos-body');
    if (!tbody) return;

    if(movs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="p-4 text-center text-slate-400">No se encontraron movimientos registrados con estos filtros.</td></tr>`;
        return;
    }

    tbody.innerHTML = movs.map(m => {
        let badgeColor = 'bg-slate-100 text-slate-700';
        if(m.tipo === 'CARGO') badgeColor = 'bg-emerald-100 text-emerald-800';
        if(m.tipo === 'DESCARGO') badgeColor = 'bg-red-100 text-red-800';
        if(m.tipo === 'VENTA') badgeColor = 'bg-blue-100 text-blue-800';
        if(m.tipo === 'EDICION') badgeColor = 'bg-purple-100 text-purple-800';

        return `
            <tr class="hover:bg-slate-50">
                <td class="p-3 text-xs text-slate-500">${m.fecha_hora}</td>
                <td class="p-3"><span class="px-2 py-1 rounded text-xs font-bold ${badgeColor}">${m.tipo}</span></td>
                <td class="p-3 font-mono text-xs">${m.codigo}</td>
                <td class="p-3 font-medium">${m.nombre}</td>
                <td class="p-3 font-bold">${m.cantidad}</td>
                <td class="p-3 text-xs text-slate-600">${m.detalle}</td>
            </tr>
        `;
    }).join('');
}

async function cargarContactos() {
    const clientes = await window.pywebview.api.obtener_contactos('cliente');
    const tbodyClientes = document.getElementById('tabla-clientes-body');
    if (tbodyClientes) {
        tbodyClientes.innerHTML = clientes.map(c => `
            <tr class="border-b hover:bg-slate-50">
                <td class="p-1.5 font-mono">${c.documento}</td>
                <td class="p-1.5">${c.nombre}</td>
                <td class="p-1.5">${c.telefono || '-'}</td>
                <td class="p-1.5 text-right"><button onclick="eliminarContacto(${c.id}, 'cliente')" class="text-red-500 font-bold hover:underline">X</button></td>
            </tr>
        `).join('');
    }

    const proveedores = await window.pywebview.api.obtener_contactos('proveedor');
    const tbodyProveedores = document.getElementById('tabla-proveedores-body');
    if (tbodyProveedores) {
        tbodyProveedores.innerHTML = proveedores.map(p => `
            <tr class="border-b hover:bg-slate-50">
                <td class="p-1.5 font-mono">${p.documento}</td>
                <td class="p-1.5">${p.nombre}</td>
                <td class="p-1.5">${p.telefono || '-'}</td>
                <td class="p-1.5 text-right"><button onclick="eliminarContacto(${p.id}, 'proveedor')" class="text-red-500 font-bold hover:underline">X</button></td>
            </tr>
        `).join('');
    }
}

async function guardarContactoForm(e, tipo) {
    e.preventDefault();
    const data = {
        tipo: tipo,
        documento: document.getElementById(tipo === 'cliente' ? 'cli-doc' : 'prov-doc').value,
        nombre: document.getElementById(tipo === 'cliente' ? 'cli-nombre' : 'prov-nombre').value,
        telefono: document.getElementById(tipo === 'cliente' ? 'cli-tel' : 'prov-tel').value
    };
    const res = await window.pywebview.api.guardar_contacto(data);
    if(res.success) {
        alert(`¡${tipo === 'cliente' ? 'Cliente' : 'Proveedor'} guardado con éxito!`);
        e.target.reset();
        await cargarContactos();
    } else {
        alert("Error: " + res.error);
    }
}

async function eliminarContacto(id, tipo) {
    if(!confirm(`¿Eliminar este ${tipo}?`)) return;
    const res = await window.pywebview.api.eliminar_contacto(id);
    if(res.success) {
        await cargarContactos();
    }
}

async function guardarConfig(e) {
    e.preventDefault();
    const data = {
        nombre_empresa: document.getElementById('cfg-nombre').value,
        moneda: document.getElementById('cfg-moneda').value,
        taxRate: limpiarNumero(document.getElementById('cfg-tax').value) / 100
    };
    const res = await window.pywebview.api.actualizar_configuracion(data);
    if(res.success) {
        alert("¡Configuración guardada exitosamente!");
        await cargarConfiguracion();
    } else {
        alert("Error: " + res.error);
    }
}

async function guardarConfigMoneda(e) {
    e.preventDefault();
    const monedaPrincipal = document.getElementById('moneda-principal-select').value;
    const tasaBs = limpiarNumero(document.getElementById('moneda-tasa-bs').value);
    const tasaCop = limpiarNumero(document.getElementById('moneda-tasa-cop').value);

    if(isNaN(tasaBs) || isNaN(tasaCop)) return alert("Ingrese tasas válidas.");
    const res = await window.pywebview.api.actualizar_tasas_cambio({
        moneda_principal: monedaPrincipal,
        tasa_bs: tasaBs,
        tasa_cop: tasaCop
    });
    if(res.success) {
        alert("¡Configuración de divisas actualizada con éxito!");
        await cargarTasasMoneda();
        await cargarProductosPOS();
    } else {
        alert("Error: " + res.error);
    }
}

function solicitarAutorizacion(accionNombre, callbackFinal) {
    document.getElementById('auth-modal-accion').innerText = accionNombre;
    document.getElementById('auth-input-persona').value = '';
    callbackAutorizacionPendiente = callbackFinal;
    
    document.getElementById('modal-autorizacion').classList.remove('hidden');
    document.getElementById('auth-input-persona').focus();
}

function cerrarModalAutorizacion() {
    document.getElementById('modal-autorizacion').classList.add('hidden');
    callbackAutorizacionPendiente = null;
}

function confirmarYEjecutarAutorizacion() {
    const autorizador = document.getElementById('auth-input-persona').value.trim();
    if (!autorizador) {
        alert('Debe ingresar el nombre o código de la persona que autoriza.');
        return;
    }

    if (typeof callbackAutorizacionPendiente === 'function') {
        callbackAutorizacionPendiente(autorizador);
    }

    cerrarModalAutorizacion();
}