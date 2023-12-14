//const addboton = document.getElementById("addboton").innerHTML

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
contador = 1;
//crear un fucion que agregue elementos a la lista atraves de input haciendi clic en el boton

function addtask() {
  const addinput = document.getElementById("full-wid-input").value;
  let nuevaTarea = {
    id: contador,
    nombreTarea: addinput,
    tareaTerminada: false,
    tareaEliminada: false,
  };

  lista.push(nuevaTarea);
  contador++;
  mostar();
  // renderizar donde se muentran los item de la lista
}

function renderizarListaHtml(tarea) {
  let inicial = "<ul > ";
  let id = "<li> " + tarea.id + "</li>";
  let tareas = "<li> " + tarea.nombreTarea + "</li>";
  let selccion =
    "<input type='checkbox' name=' id='" +
    tarea.id +
    "onchange= 'onChange('" +
    tarea.id +
    ") >";

  let borar =
    "<li onclick= 'borrarTarea(" +
    tarea.id +
    ")'><i class='fa-solid fa-circle-xmark' ></i></li>";
  let final = "</ul>";

  return inicial + id + tareas + selccion + borar + final;
}
function mostar() {
  let datos = "";

  for (const tarea of lista) {
    if (tarea.tareaEliminada == false) {
      datos += renderizarListaHtml(tarea);
    }
  }
  document.getElementById("boxList").innerHTML = datos;
  document.getElementById("total-tareas").innerHTML = lista.length;
}

function borrarTarea(id) {
  const confirmacion = confirm(
    "¿Estás seguro de que deseas borrar esta tarea?"
  );

  if (confirmacion) {
    const index = lista.findIndex((lista) => lista.id === id);
    lista.tareaEliminada = true;

    mostar();
    console.log(index);
  }
}
mostar();
