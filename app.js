// Estado inicial: algunas tareas de ejemplo
let tareas = [
  { id: 1, texto: 'Crear repositorio parcial2-v2-software', completada: true },
  { id: 2, texto: 'Escribir el Dockerfile', completada: false },
  { id: 3, texto: 'Hacer merge de feature-nueva-seccion', completada: false },
];

const form = document.getElementById('form-tarea');
const input = document.getElementById('input-tarea');
const lista = document.getElementById('lista-tareas');

function renderTareas() {
  lista.innerHTML = '';

  tareas.forEach((tarea) => {
    const li = document.createElement('li');
    if (tarea.completada) li.classList.add('completada');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.completada;
    checkbox.addEventListener('change', () => toggleTarea(tarea.id));

    const texto = document.createElement('span');
    texto.textContent = tarea.texto; // textContent evita inyección de HTML

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '✕';
    btnEliminar.className = 'btn-eliminar';
    btnEliminar.addEventListener('click', () => eliminarTarea(tarea.id));

    li.append(checkbox, texto, btnEliminar);
    lista.appendChild(li);
  });
}

function agregarTarea(texto) {
  tareas.push({ id: Date.now(), texto, completada: false });
  renderTareas();
}

function toggleTarea(id) {
  tareas = tareas.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t));
  renderTareas();
}

function eliminarTarea(id) {
  tareas = tareas.filter((t) => t.id !== id);
  renderTareas();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = input.value.trim();
  if (texto) {
    agregarTarea(texto);
    input.value = '';
  }
});

renderTareas();