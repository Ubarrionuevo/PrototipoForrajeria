var elementos = [
  { nombre: "pichichus 1", precio: 10 , stock :5},
  { nombre: "Producto 2", precio: 20 ,stock :1},
  { nombre: "Producto 3", precio: 30 ,stock :1},
  { nombre: "Producto 4", precio: 10 },
  { nombre: "Producto 5", precio: 20 },
  { nombre: "Producto 6", precio: 30 },
  { nombre: "Producto 7", precio: 10 },
  { nombre: "Producto 8", precio: 20 },
  { nombre: "Producto 9", precio: 30 },
  {nombre : "Odwalla cachorro"},
  {nombre:"odwalla adulto"},
  {nombre : "dog selection"},
  {nombre:"vagoneta tradicional"},
  {nombre:"gran campeon cachorro "},
];

// Odwalla cachorro de 22 kg 
// odwalla cachorro de 8 kg
// odwalla adulto de 8 kg
// dog selection raza pequena 20 kg
// dog selection adulto 20 kg 
// dog selection cachorro 20 kg
// vagoneta tradicional 20 kg 
// vagoneta gourmet 20 kg
// gran campeon perro adulto 21 kg
// gran campeon cachorro 10 kg

var listaProductos = document.getElementById("listaProductos");
var buscarInput = document.getElementById("buscar");


var listaProductos = document.getElementById("listaProductos");

var listaProductos = document.getElementById("listaProductos");

// Función para mostrar los productos en la lista
function mostrarProductos(productos) {
  // Limpiar la lista de productos
  listaProductos.innerHTML = "";

  // Iterar sobre los productos y agregarlos a la lista
  productos.forEach(function(producto) {
    var listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    // Texto del elemento de la lista con el indicador de stock y botón de venta
    var textoProducto = producto.stock + " - " + producto.nombre + " - $" + producto.precio + " - ";
    if (producto.stock > 0) {
      textoProducto += ' <button class="btn btn-primary btn-sm" onclick="venderProducto(\'' + producto.nombre + '\')">Vender</button>';
      textoProducto += ' <button class="btn btn-danger btn-sm" onclick="eliminarProducto(\'' + producto.nombre + '\')">Eliminar</button>';
      textoProducto += ' <button class="btn btn-danger btn-sm" onclick="editarproducto(\'' + producto.nombre + '\')">Editar</button>';
      textoProducto += ' <button class="btn btn-danger btn-sm" onclick="editarproducto(\'' + producto.nombre + '\')">Ingreso</button>'; // Botón de eliminar
      // Botón de eliminar
      // Botón de eliminar
      listItem.classList.add("producto-disponible");
    } else {
      textoProducto += " - <span class='sin-stock'>Sin stock</span>";
      // textoProducto += " - <strong>Sin stock</strong>";
      listItem.classList.add("producto-agotado");
    }
    listItem.innerHTML = textoProducto;

    listaProductos.appendChild(listItem);
  });

  // Mostrar la lista de productos
  listaProductos.style.display = "block";
}


// Función para vender un producto
function venderProducto(nombreProducto) {
  var producto = elementos.find(function(item) {
      return item.nombre === nombreProducto;
  });

  if (producto && producto.stock > 0) {
      producto.stock--;
      // Actualizar la lista de productos después de la venta
      mostrarProductos(elementos);
  }
}

// Mostrar productos al cargar la página
mostrarProductos(elementos);

// Ocultar la lista de productos al cargar la página
listaProductos.style.display = "none";

// Mostrar la lista de productos cuando se haga clic en el campo de búsqueda
buscarInput.addEventListener("click", function() {
  listaProductos.style.display = "block";
});


// Función para buscar un producto
function buscarProducto() {
  var busqueda = buscarInput.value.toLowerCase();

  if (busqueda.trim() !== "") {
    var productosEncontrados = elementos.filter(function(producto) {
      return producto.nombre.toLowerCase().includes(busqueda);
    });
    mostrarProductos(productosEncontrados);
  } else {
    // Si el campo de búsqueda está vacío, ocultar la lista de productos
    listaProductos.style.display = "none";
  }
}

function agregarNuevoProducto() {
  var nombreNuevoProducto = document.getElementById("nombreNuevoProducto").value;
  var precioNuevoProducto = document.getElementById("precioNuevoProducto").value;

  // Validar que se haya ingresado un nombre y un precio
  if (nombreNuevoProducto.trim() !== "" && !isNaN(precioNuevoProducto) && parseFloat(precioNuevoProducto) >= 0) {
    // Agregar el nuevo producto a la lista de productos
    elementos.push({ nombre: nombreNuevoProducto, precio: parseFloat(precioNuevoProducto) });
    
    // Actualizar la lista de productos
    mostrarProductos(elementos);

    // Limpiar los campos del formulario del modal
    document.getElementById("nombreNuevoProducto").value = "";
    document.getElementById("precioNuevoProducto").value = "";

    // Cerrar el modal
    var modal = new bootstrap.Modal(document.getElementById("modalAgregarProducto"));
    modal.hide();
  } else {
    // Mostrar un mensaje de error si los campos no son válidos
    alert("Por favor, ingrese un nombre válido y un precio numérico mayor o igual a 0.");
  }
}

// Detectar cambios en el campo de búsqueda para buscar automáticamente
buscarInput.addEventListener("input", buscarProducto);