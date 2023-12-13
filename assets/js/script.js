//const addboton = document.getElementById("addboton").innerHTML

lista = [
  {
    'id':1,
    'nombreTarea':"ejemplo 1",
    'tareaTerminada': false,
    'tareaEliminada': false
  },
  {
    'id':2,
    'nombreTarea':"ejemplo 2",
    'tareaTerminada': false,
    'tareaEliminada': false
  },
  {
    'id':3,
    'nombreTarea':"ejemplo 3",
    'tareaTerminada': false,
    'tareaEliminada': false
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
  console.log(lista);
  contador++;
  mostar();
  // renderizar donde se muentran los item de la lista
}

function renderizarListaHtml(tarea) {
  let inicial = "<ul > ";
  let id = "<li> " + tarea.id + "</li>";
  let tareas = "<li> " + tarea.nombreTarea + "</li>";
  let final = "</ul>";

  return inicial + id + tareas + final;
}
function mostar() {
  let datos = "";

  for (const tarea of lista) {
    datos += renderizarListaHtml(tarea);
  }
  document.getElementById("boxList").innerHTML = datos;
  document.getElementById("total-tareas").innerHTML = lista.length;
}
mostar()