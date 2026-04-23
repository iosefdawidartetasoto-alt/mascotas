// ===== MENSAJE DE BIENVENIDA =====
const bienvenida    = document.getElementById('bienvenida');
const btnCerrar     = document.getElementById('btn-cerrar-bienvenida');

// Muestra el banner al cargar la página
window.addEventListener('load', () => {
    bienvenida.classList.add('visible');
});

// Cierra el banner al hacer clic en ✕
btnCerrar.addEventListener('click', () => {
    bienvenida.classList.remove('visible');
});


// ===== CAMBIAR TEXTO DEL PÁRRAFO =====
const parrafo       = document.getElementById('parrafo-sobre');
const btnCambiar    = document.getElementById('btn-cambiar-texto');

const textoCorto    = 'Soy un partidario de ayudar a los demás, ¿por tanto porque no ayudar al mejor amigo del hombre? Aquí encontrarás mascotas que están buscando un dueño para vivir tranquilos y ser felices.';
const textoLargo    = textoCorto + ' Creo firmemente en la adopción responsable y en crear conciencia sobre el bienestar animal. Cada mascota merece amor, cuidado y un hogar seguro donde pueda crecer feliz.';

let expandido = false;

btnCambiar.addEventListener('click', () => {
    expandido = !expandido;
    parrafo.textContent    = expandido ? textoLargo : textoCorto;
    btnCambiar.textContent = expandido ? 'Leer menos' : 'Leer más';
});


// ===== MOSTRAR / OCULTAR PANEL =====
const btnToggle     = document.getElementById('btn-toggle');
const panelToggle   = document.getElementById('panel-toggle');

btnToggle.addEventListener('click', () => {
    const visible = !panelToggle.hidden;
    panelToggle.hidden      = visible;
    btnToggle.textContent   = visible ? 'Mostrar razones' : 'Ocultar razones';
});


// ===== FORMULARIO - MENSAJE DE CONFIRMACIÓN =====
const formulario    = document.getElementById('miFormulario');
const msgFormulario = document.getElementById('msg-formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    msgFormulario.textContent = `✅ ¡Gracias, ${nombre}! Tu mensaje fue enviado.`;
    msgFormulario.style.color = '#2ecc71';
    formulario.reset();
});
