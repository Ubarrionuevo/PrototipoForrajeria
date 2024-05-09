var elementos = [
  { nombre: "pichichus 1", precio: 10 },
  { nombre: "Producto 2", precio: 20 },
  { nombre: "Producto 3", precio: 30 },
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

// Función para mostrar los productos en la lista
function mostrarProductos(productos) {
  // Limpiar la lista de productos
  listaProductos.innerHTML = "";

  // Iterar sobre los productos y agregarlos a la lista
  productos.forEach(function(producto, index) {
    var listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = producto.nombre + " - $" + producto.precio;
    listaProductos.appendChild(listItem);
  });

  // Mostrar la lista de productos
  listaProductos.style.display = "block";
}

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

// Detectar cambios en el campo de búsqueda para buscar automáticamente
buscarInput.addEventListener("input", buscarProducto);