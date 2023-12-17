lista = [
  {
    id: 1,
    nombreTarea: "ejemplo 1",
    tareaTerminada: false,
    tareaEliminada: false,
  },
  {
    id: 2,
    nombreTarea: "ejemplo 2",
    tareaTerminada: false,
    tareaEliminada: false,
  },
  {
    id: 3,
    nombreTarea: "ejemplo 3",
    tareaTerminada: false,
    tareaEliminada: false,
  },
];
contadorTotalTareas = lista.length;
contadorId = lista.length +1
var contadorTerminados = 0;

function addtask() {
  const addinput = document.getElementById("full-wid-input").value;
  let nuevaTarea = {
    id: contadorId,
    nombreTarea: addinput,
    tareaTerminada: false,
    tareaEliminada: false,
  };

  lista.push(nuevaTarea);
  contadorId++;
  mostrar();
}

function renderizarListaHtml(tarea) {
  let inicial = "<ul > ";
  let id = "<li> " + tarea.id + "</li>";
  let tareas = "<li> " + tarea.nombreTarea + "</li>";
  let selccion =
    "<input type='checkbox' name= '" +
    tarea.id +
    "' id='" +
    tarea.id +
    "' onchange ='marcarTareatareminada(" +
    tarea.id +
    ")' " +
    (tarea.tareaTerminada ? "checked" : "") +
    ">";
   
  let borar =
    "<li onclick= 'borrarTarea(" +
    tarea.id +
    ")'><i class='fa-solid fa-circle-xmark' ></i></li>";
  let final = "</ul>";

  return inicial + id + tareas + selccion + borar + final;
}
function mostrar() {
  let datos = "";
  document.getElementById("full-wid-input").value = ""
  for (const tarea of lista) {
    if (tarea.tareaEliminada == false) {
      datos += renderizarListaHtml(tarea);
    }
  }
  document.getElementById("boxList").innerHTML = datos;
  contarTotalTareas()
  document.getElementById("total-tareas").innerHTML = contadorTotalTareas;
  contarRealizadas();
  document.getElementById("total-realizada").innerHTML = contadorTerminados;
  console.log(lista)
}

function borrarTarea(id) {
  const confirmacion = confirm(
    "¿Estás seguro de que deseas borrar esta tarea?"
  );

  if (confirmacion) {
    const index = lista.findIndex((lista) => lista.id === id);

    lista[index].tareaEliminada = true;
    contadorTotalTareas--;
    mostrar();
  }
}

function contarRealizadas() {
  contadorTerminados = 0;
  for (const tarea of lista) {
    if (tarea.tareaTerminada == true && tarea.tareaEliminada == false) {
      contadorTerminados += 1;
    }
  }
}

function contarTotalTareas() {
  contadorTotalTareas = 0;
  for (const tarea of lista) {
    if (tarea.tareaEliminada == false) {
      contadorTotalTareas += 1;
    }
  }
}
function marcarTareatareminada(id) {
  const index = lista.findIndex((lista) => lista.id === id);

  lista[index].tareaTerminada = !lista[index].tareaTerminada;

  mostrar();

  console.log(lista);
}

mostrar();
