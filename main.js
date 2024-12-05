//comentario
//variable
//var
// console.log("Hola Mundo desde la consola!");
// alert("Hola mundo desde un alert");
// //tipos de datos
// //string
// let texto = "soy un texto";
// //number
// let numero = 42;
// //boolean, solo un si o no, verdadero o falso, 1 o 0
// let verdadero = true;
// //undefined
// let undefined;
// //null
// let vacio = null;

// let a = 10;
// let b = 20;
// console.log(a + b);
// ' '[]

const fecha = document.querySelector('#fecha');
const list = document.querySelector('#lista');
const elemento = document.querySelector('#elemento');
const input = document.querySelector('#input');
const botonAgregar = document.querySelector('#botonAgregar');
const check = 'bi-record-circle';
const tachado = 'tachado';
const uncheck = 'bi-circle';
let LIST;
let id;

const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('es-MX', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
});
function agregarTarea(tarea, id, hecho, eliminar) {
    if (eliminar) {
        return
    };
    const realizado = hecho ? check : uncheck;
    const LINE = hecho ? tachado : '';
    const elemento = `<li id="elemento">
<i id="${id}" data="hecho" class="bi ${realizado}"></i>
<p class="tarealista text ${LINE}">${tarea}</p>
<i id="${id}" data="eliminar" class="bi bi-trash3"></i>
</li>`
};
function tareaRealizada(element) {
    elemento.classlist.toggle(check);
    elemento.classlist.toggle(uncheck);
    elemento.parentNode.querySelector('.text').classlist.toggle(tachado);
    LIST[elemento.id].realizado = LIST[element.id].realizado ? false : true;
};
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminar = true;
};
botonAgregar.addEventListener("click", () =>{
    const tarea = input.value
    if(tarea) {
        agregarTarea(tarea, id, false, unfalse)
        LIST.push({
            nombre: tarea,
            id: id,
            hecho: false,
            eliminar: false,

        });
        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
        input.value = "";
    }
});
list.addEventListener("click", function (event) {
    const element = event.target;
    const elementData = element.attributes.data.value;
    if (elementData == "hecho") {
        tareaRealizada(element);
    } else if (elementData == "eliminar") {
        tareaEliminada(element);
    };
    localStorage.setItem("TODO", JSON.stringify(LIST));
});
let data = localStorage.getItem("TODO");
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    cargaLista(LIST);
} else{
    LIST=[];
    id=0;
};
function cargarLista(array) {
    array.forEach(
        function (item) {
            agregarTarea(item.nombre, item.id, item.hecho, item.eliminar);
        }
    );
};
