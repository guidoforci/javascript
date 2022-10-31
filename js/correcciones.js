//PRODUCTOS GUARDADOS EN EL LOCAL STORAGE
const PasarProductosAJson = JSON.stringify(productos);
localStorage.setItem("Listado de Productos", PasarProductosAJson);

// VARIABLES
let carrito = JSON.parse(localStorage.getItem("Mis compras")) || [];

let totalCarrito;
let contenedor = document.getElementById("divCarritoJS");

const eliminarProducto = (e) => {
	console.log(e.target.id);
	carrito = carrito.filter((producto) => {
		console.log(producto.codigo !== parseInt(e.target.id));
		return producto.codigo !== parseInt(e.target.id);
	});
	console.log(carrito);
	localStorage.setItem("Mis compras", JSON.stringify(carrito));
	document.querySelectorAll(".fa-trash-can").forEach((product) => {
		product.removeEventListener("click", eliminarProducto);
	});
	renderCarrito();
};

//RECORRIDO DE LAS CARDS
function renderCarrito() {
	const tabla = document.getElementById("tablabody");
	tabla.innerHTML = "";
	carrito.forEach((producto) => {
		tabla.innerHTML += `
<tr>
<td style="color: aliceblue;">${producto.codigo}</td>
<td style="color: aliceblue;">${producto.nombre}</td>
<td style="color: aliceblue;">${producto.precio}</td>
<td style="color: aliceblue;"><i id="${producto.codigo}" class="fa-regular fa-trash-can"></i></td>
</tr>
`;
	});
	document.querySelectorAll(".fa-trash-can").forEach((product) => {
		product.addEventListener("click", eliminarProducto);
	});
}

function agregarAlCarrito(producto) {
	carrito.push(producto);
	console.log(carrito);
	alert(producto.nombre + " fue añadido a tu carrito!");
	document.querySelectorAll(".fa-trash-can").forEach((product) => {
		product.removeEventListener("click", eliminarProducto);
	});
	renderCarrito();

	//TOTALIZAR COMPRA
	totalCarrito = carrito.reduce(
		(acumulador, producto) => acumulador + producto.precio,
		0,
	);
	let Total = document.getElementById("total");
	Total.innerText =
		"Total a pagar: $" +
		totalCarrito +
		"\n" +
		"\n" +
		"Gracias por tu compra." +
		"\n" +
		"Te esperamos por el local para retirar tu pedido!";

	localStorage.setItem("Mis compras", JSON.stringify(carrito));
}

function renderProds() {
	for (const producto of productos) {
		contenedor.innerHTML += `
<div class="col">
<div class="card " style="margin: 0 auto;">
<img src=${producto.imagen} class="card-img-top" alt="cards de productos">
<div class="card-body">
<h5 class="card-title" style="font-family: 'Righteous', cursive;">${producto.nombre} $${producto.precio}</h5>
<p class="card-text" style="background-color: transparent; font-family: 'Nunito', sans-serif;">${producto.descripcion}</p>
<button id="btn${producto.codigo}" class="btn btn-dark" style="font-family: 'Righteous', cursive;">Añadir al Carrito!</button>
</div>
</div>
`;
	}

	//EVENTO Click para comprar el producto.
	productos.forEach((producto) => {
		document
			.getElementById(`btn${producto.codigo}`)
			.addEventListener("click", function () {
				agregarAlCarrito(producto);
			});
	});
}

renderProds();
renderCarrito();